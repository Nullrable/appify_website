---
title: "Importar fotos: traduce cualquier foto de tu biblioteca"
description: "Toma cualquier foto ya en tu dispositivo y tradúcela mediante el mismo pipeline de OCR + ML Kit que una captura nueva."
date: 2026-09-03
lang: es
slug: photo-import
icon: photo
---

El mismo pipeline de OCR y traducción que procesa capturas en vivo también procesa fotos extraídas de la biblioteca del dispositivo. Úsalo para capturas de pantalla, fotos guardadas de letreros o menús e imágenes compartidas por amigos.

## Cómo funciona la importación

1. **Elegir de la galería.** Toca el icono de la galería en la página de cámara para abrir el selector de fotos del sistema mediante `image_picker`. La imagen seleccionada se copia al directorio temporal de la app; la original se queda en su sitio.
2. **Leer la orientación física.** Las fotos de la biblioteca tienen una etiqueta EXIF de orientación fiable, por lo que la ruta de importación usa EXIF directamente sin tocar el acelerómetro. La imagen se rota a la orientación vertical correcta antes del OCR.
3. **Mismo pipeline de OCR.** La imagen se alimenta al mismo motor `vision_text_recognition` forkado que usa la ruta de cámara. No se requiere tratamiento especial para «importado» frente a «capturado» — la página de resultados y el comportamiento de traducción son idénticos.
4. **Guardar en el historial.** Como las capturas de cámara, las fotos importadas se pueden guardar en el historial de traducción local. La copia guardada es una miniatura comprimida, no la foto completa de la biblioteca, para mantener el almacenamiento acotado.

## Cuándo importar en lugar de capturar

- **Capturas de pantalla.** Traduce cadenas de UI, diálogos de error o fragmentos web guardados como capturas de pantalla.
- **Fotos ya tomadas.** Traduce una foto de un viaje, una reunión o el chat de un amigo sin volver a disparar.
- **Esquemas o pizarras.** Las fotos de notas en pizarra y esquemas suelen ser más nítidas que una recaptura, especialmente cuando la superficie tiene reflejos.
- **Documentos.** Las instantáneas de recibos, tarjetas de visita y etiquetas capturados por otra app se pueden traducir sin cambiar de herramienta.

## Privacidad

Las fotos importadas pasan por el mismo pipeline en el dispositivo que las fotos en vivo. Se procesan en memoria y nunca se suben a un servidor que operemos. Las copias del historial guardado se almacenan solo en el dispositivo, en la base de datos local de la app, y se pueden eliminar individualmente desde la página de historial.

## Límites

- **Se respeta la rotación existente.** Las fotos que fueron rotadas por el SO se vuelven a rotar a vertical antes del OCR. Esta es la fuente más común de problemas de «el OCR devuelve texto ilegible» con importaciones.
- **Los originales grandes se reducen.** Las fotos por encima de la resolución recomendada por el motor de OCR se reducen antes del reconocimiento. La foto original en el dispositivo no se ve afectada.
- **Sin importación por lotes.** Cada foto requiere su propio un toque. Si necesitas traducir muchas fotos guardadas, ejecútalas de una en una; el OCR + traducción de una sola imagen suele completarse en pocos segundos.
