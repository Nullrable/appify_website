---
title: "Rotación y volteo"
description: "Rotación en pasos de 90°, volteo horizontal y vertical, y corrección automática de la marca de rotación EXIF antes de exportar, para que el archivo guardado se vea correctamente en cualquier lugar."
date: 2026-09-07
lang: es
slug: rotate
---

## Rotación y volteo

Fotos torcidas, documentos escaneados con la orientación incorrecta, capturas que necesitan un espejo: en todos estos casos necesitas rotar o voltear la imagen. Image Converter ofrece funciones básicas de rotación y volteo con un manejo intuitivo.

## Rotación: pasos de 90°

La aplicación permite rotar imágenes en pasos de 90°:

- **Girar 90° a la izquierda**: convierte una foto vertical en horizontal o corrige fotos mal etiquetadas tras una captura en horizontal
- **Girar 90° a la derecha**: la operación inversa
- **180°**: dos rotaciones de 90° seguidas

Cada rotación reescribe la imagen para que el archivo exportado se vea en la orientación correcta en cualquier dispositivo.

## Volteo: horizontal y vertical

Además de rotar, la aplicación admite el volteo en espejo:

- **Volteo horizontal**: espejo izquierda-derecha, útil para selfies y texto reflejado
- **Volteo vertical**: espejo arriba-abajo, útil para efecto negativo o composición en espejo

## Gestión automática de la rotación EXIF

Algunos teléfonos (especialmente el iPhone) solo graban la marca de rotación en los metadatos de la foto, en lugar de rotar realmente los píxeles. En algunas aplicaciones esas fotos "se ven bien pero se exportan torcidas".

Image Converter lee la orientación EXIF (Orientation tag), corrige los píxeles antes de exportar y el archivo guardado se abre en la orientación correcta en cualquier lugar, sin depender de que el visor reconozca los metadatos.

