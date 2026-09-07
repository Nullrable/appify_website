---
title: "Rotar o voltear: cuándo usar uno u otro"
description: "Cuándo usar rotación de 90°, de 180°, volteo horizontal y vertical, y cómo afecta la marca de rotación EXIF al resultado final."
date: 2026-09-07
lang: es
slug: rotate-vs-flip
---

## Cuatro operaciones básicas

Image Converter ofrece cuatro operaciones básicas de rotación y volteo:

- **Girar 90° a la izquierda**: convierte una imagen vertical en horizontal
- **Girar 90° a la derecha**: convierte una imagen horizontal en vertical
- **180°**: invierte completamente la imagen
- **Volteo horizontal**: espejo izquierda-derecha
- **Volteo vertical**: espejo arriba-abajo

Suena sencillo, pero mucha gente no sabe cuál aplicar en cada caso.

## Rotación: pasos de 90°

### Rotación de 90°

La rotación de 90° es la operación más habitual y se aplica en estos casos:

- **Captura de un vídeo grabado en horizontal en el móvil**: la orientación no coincide y hay que rotar
- **Documento escaneado con orientación invertida**: el escáner se colocó al revés y el archivo sale invertido
- **Combinar fotos con orientaciones distintas**: se unifica la orientación antes de unirlas

Rotar 90° es una operación sin pérdida: los píxeles se reordenan, pero no se pierde información.

### Rotación de 180°

Dos rotaciones de 90° o una rotación directa de 180°, aplicable en estos casos:

- **Imagen completamente invertida**: por ejemplo, una foto girada 180°
- **Combinar varias imágenes cuando una está invertida**: se unifica la orientación

La rotación de 180° también es una operación sin pérdida.

## Volteo: horizontal y vertical

### Volteo horizontal (espejo izquierda-derecha)

- **Corrección del selfie en espejo**: algunos móviles aplican espejo automático en el selfie y la dirección que ve el usuario no coincide con la real
- **Corrección de texto reflejado**: capturas a través de un espejo o reflejos en superficies reflectantes
- **Efectos de diseño**: composiciones en espejo o previsualización simétrica de un diseño

### Volteo vertical (espejo arriba-abajo)

- **Efecto negativo**: simula el negativo de una película tradicional
- **Composición en espejo**: previsualización del reflejo en agua
- **Necesidades concretas de diseño**: previsualización simétrica vertical de pósters o packaging

## La rotación EXIF: la trampa más común

Muchos teléfonos (sobre todo el iPhone) al disparar **solo graban la marca de rotación en los metadatos, en lugar de rotar realmente los píxeles**.

Esto significa que:

- En el álbum se ve con la orientación correcta
- En algunas aplicaciones se abre con orientación incorrecta
- En algunas plataformas se sube con orientación incorrecta

Image Converter lee la orientación EXIF (Orientation tag) y, antes de exportar, **rota realmente los píxeles**, de modo que la imagen guardada se vea en la orientación correcta en cualquier lugar.

## Rotar o voltear: guía por escenario

| Fenómeno | Operación | Motivo |
|---|---|---|
| Captura de vídeo horizontal que aparece vertical | Rotar 90° | La orientación del vídeo no coincide con la de visualización |
| Selfie con left a y derecha invertidos | Volteo horizontal | El móvil aplicó espejo automáticamente |
| Documento escaneado con la orientación invertida | Rotar 90° | El escáner se colocó al revés |
| Texto reflejado en un espejo | Volteo horizontal | La imagen se generó por reflexión |
| Foto completamente invertida | Rotar 180° | El móvil se sostuvo al revés al disparar |
| Reflejo en agua invertido de arriba abajo | Volteo vertical | Simular el efecto del reflejo |

Si solo se trata de la marca EXIF, **no hace falta hacer nada**: Image Converter la gestiona automáticamente al convertir.

