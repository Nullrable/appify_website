---
title: "Cómo funciona la traducción sin conexión en tu iPhone"
description: "Un recorrido completo de cómo la aplicación completa una traducción sin subir un solo byte de texto fuente a un servidor."
date: 2026-09-03
lang: es
slug: how-offline-translation-works
---

## Cómo funciona la traducción sin conexión en tu iPhone

El pipeline de traducción de la aplicación se ejecuta por completo en el dispositivo. Ninguna foto, ningún resultado de OCR y ninguna solicitud de traducción sale del iPhone. Este artículo explica qué significa realmente «en el dispositivo», dónde viven los modelos y qué compromisos conlleva ejecutar la traducción localmente.

## Las piezas que se ejecutan en el dispositivo

Hay tres trabajos independientes que ocurren en el teléfono para una traducción por cámara:

1. **OCR.** Un paquete `vision_text_recognition` forkado ejecuta el reconocimiento de texto localmente. Admite escrituras latinas, chinas (simplificada y tradicional), japonesas y coreanas. Cada bloque de texto reconocido lleva su propia caja delimitadora y su texto detectado.
2. **Traducción.** El motor de traducción en el dispositivo de Google ML Kit toma la salida del OCR y produce texto traducido. El motor se empaqueta como un modelo lingüístico descargable por par de idiomas; la aplicación descarga modelos bajo demanda y los almacena en caché en disco.
3. **Renderizado.** La página de resultados pinta cada bloque traducido sobre la foto original, usando las cajas delimitadoras devueltas por el motor OCR. No se necesita ningún viaje de ida y vuelta al servidor para renderizar la superposición — la imagen, los bloques fuente y las traducciones viven en la memoria del dispositivo.

## Por qué esto importa

- **Privacidad.** Las fotos de letreros, contratos, formularios médicos y correspondencia personal permanecen en el dispositivo. No hay paso de carga en ningún lugar del pipeline, así que no hay nada que filtrar, citar o vender.
- **Latencia.** Sin viaje de ida y vuelta de red. El OCR de una página típica capturada por un smartphone se completa en mucho menos de un segundo en un dispositivo reciente, y la traducción de los resultados por bloque se transmite a medida que cada bloque termina.
- **Sin conexión.** El pipeline se ejecuta en un avión, en un sótano, en un túnel, en un tren, en un país sin cobertura. El motor OCR y el motor de traducción se descargan una vez y se reutilizan indefinidamente; no se recupera nada por captura.
- **Coste.** La aplicación no paga por carácter a una API de traducción, por lo que la función no necesita un muro de pago basado en el uso o un límite mensual de caracteres para mantenerse sostenible. El nivel gratuito es el mismo pipeline.

## Dónde viven los modelos

ML Kit publica modelos de traducción en el dispositivo para 19 idiomas. Cada modelo pesa aproximadamente 10–50 MB. Cuando eliges un idioma de origen o destino, la aplicación descarga el modelo correspondiente en la caja de arena local de la app en el primer uso. El modelo persiste a través de los reinicios de la app; eliminarlo recupera el almacenamiento inmediatamente.

La lista completa de idiomas compatibles: árabe, chino (simplificado), checo, neerlandés, inglés, francés, alemán, croata, húngaro, italiano, japonés, coreano, polaco, portugués, rumano, ruso, eslovaco, esloveno y español.

## Qué se sube (y qué no)

- **No se sube.** Fotos, texto OCR, texto traducido, entradas de historial, estado del modelo lingüístico. Nada de esto sale del dispositivo.
- **Se sube.** Informes de fallos anónimos y contadores agregados (p. ej., «solicitudes de traducción por día»). Los informes de fallos no incluyen contenido del usuario; si un informe futuro alguna vez contiene contenido, eso sería un error y debería reportarse.

## Compromisos de la ejecución local

- **Lista de idiomas acotada.** Solo se admiten los idiomas que ML Kit publica como modelos en el dispositivo. La lista está curada y actualmente tiene 19 entradas.
- **Descarga de modelo requerida.** Una primera traducción para un par de idiomas déclenche un téléchargement unique. La página del gestor de modelos muestra el estado y te permite pre-descargar para viajes sin conexión.
- **Calidad.** La calidad de la traducción en el dispositivo es comparable a la traducción en la nube para textos cortos y bien formados. Los párrafos largos o la jerga específica del dominio pueden diferir de un motor en la nube ajustado para ese dominio.
- **Computación.** El OCR y la traducción usan la CPU y el Neural Engine del teléfono. El impacto en la batería para una sola captura es pequeño, pero medible para flujos de trabajo por lotes.

## Qué significa esto para ti

Si alguna vez has dudado en fotografiar un documento sensible porque la foto terminaría en el servidor de otra persona, esa duda es la razón por la que existe la aplicación. Cada parte del pipeline se ejecuta localmente, y el modelo de datos de la aplicación está diseñado en torno a la premisa de que nada sale del dispositivo a menos que el usuario elija explícitamente compartir un resultado.
