---
title: "OCR de cámara: apuntar, capturar, traducir"
description: "OCR en el dispositivo mediante vision_text_recognition con orientación precisa a nivel de hardware, incluso cuando la interfaz está bloqueada en vertical."
date: 2026-09-03
lang: es
slug: camera-ocr
icon: camera
---

El OCR de cámara ejecuta OCR localmente usando un paquete `vision_text_recognition` forkado que admite escrituras latina, china (simplificada y tradicional), japonesa y coreana. No se sube nada para el reconocimiento. Cada bloque devuelto por el motor OCR lleva su propia caja delimitadora y texto detectado; la página de resultados pinta la traducción sobre las mismas coordenadas para preservar el diseño original.

## Pipeline de captura

1. **Inicialización de la cámara.** El controlador de la cámara se inicializa de forma asíncrona con estados explícitos `initializing / ready / failed`. Si falla, se muestra un botón de reintento que vuelve a ejecutar la inicialización sin reentrar en la protección `initializing`.
2. **Orientación real.** El `DeviceOrientation` de iOS y EXIF no son fiables cuando la app está bloqueada en vertical. La app lee el acelerómetro bruto a través de `sensors_plus` y guarda en caché el frame más reciente, de modo que el obturador captura la verdadera dirección de agarre incluso si la UI está bloqueada. La orientación EXIF se reconcilia entonces con esta verdad de terreno.
3. **Obturador.** Toca para capturar con la relación de aspecto actual de la vista previa. El frame capturado se reduce a un borde máximo configurable antes del OCR; la mayoría de las páginas necesitan 1500–2000 px en el borde largo para que el motor lea letra pequeña sin inflar la memoria.
4. **Flash.** Cuatro modos en el visor — automático, apagado, encendido y linterna — con el conmutador vinculado a la API de flash del sistema.

## Lo que devuelve el OCR

- **Cajas delimitadoras por bloque.** Cada TextBlock tiene su propio rectángulo. La página de resultados los usa para colocar el texto traducido exactamente sobre el texto fuente.
- **Texto y orden de los bloques.** Texto del idioma fuente por bloque, en el orden en que el motor los emitió (de arriba abajo, de izquierda a derecha por defecto).
- **Confianza.** Cada bloque lleva su propia confianza. Los bloques por debajo de un umbral se renderizan en la página de resultados pero se marcan como «baja confianza» para que el usuario pueda verificarlos.

## Por qué en el dispositivo

- **Privacidad.** Las fotos de letreros, contratos o formularios médicos nunca salen del dispositivo para el OCR.
- **Latencia.** Sin ida y vuelta de red. El OCR de una página típica tomada con el teléfono termina en mucho menos de un segundo en un dispositivo reciente.
- **Sin conexión.** El OCR funciona en aviones, sótanos y regiones sin cobertura. El mismo motor que ejecuta el reconocimiento lo hace completamente desde el modelo en el dispositivo.

## Mejores prácticas para un OCR preciso

1. **Luz uniforme e indirecta.** La luz de ventana supera a los focos del techo. Las sombras que cruzan la página son la causa más común de caracteres mal leídos.
2. **Toca para enfocar.** Si el autofoco selecciona el sujeto equivocado (el escritorio, un dedo, el borde de la página), toca el centro del texto antes de capturar.
3. **Páginas planas.** Las páginas que se curvan hacia el lomo pierden caracteres cerca del pliegue. Presiona la página plana con la otra mano cuando sea posible.
4. **Un idioma por captura.** Las páginas con escrituras mixtas funcionan en una sola pasada, pero una página que mezcla latín con japonés vertical se divide mejor en dos capturas.
