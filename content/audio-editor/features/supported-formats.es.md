---
title: "Lista completa de formatos - 10 entradas de audio + 4 salidas de audio + 8 de vídeo"
description: "Todos los formatos compatibles con el editor de audio en un solo lugar. 10 entradas de audio: MP3, WAV, M4A, AAC, FLAC, OGG, Opus, AIFF, AMR, CAF. 4 salidas de audio: MP3, WAV, FLAC, OGG. 8 contenedores de vídeo: MP4, MOV, M4V, AVI, MKV, WebM, FLV, WMV."
date: 2026-10-17
lang: es
slug: supported-formats
---

## Lista completa de formatos

Esta página es una chuleta - cada formato de audio y vídeo compatible con el editor de audio, y cuándo elegir cuál.

Entrada y salida son dos conjuntos diferentes: la app puede leer 10 formatos de audio, pero solo escribe 4. Los vídeos son de solo lectura y no los abre directamente el editor.

## Formatos de entrada de audio (10)

El editor abre estos 10 archivos de audio: la edición multipista, la mejora y la conversión (compress / merge) los aceptan todos como entrada:

| Formato | Cuándo usarlo |
|---|---|
| **MP3** | Reproductores universales, sistemas de coche, adjuntos de correo. Elección por defecto. |
| **WAV** | Maestro sin pérdida, ideal para mezclar, archivar o reeditar. |
| **M4A** | La versión contenedor de AAC, habitual en el ecosistema Apple. |
| **AAC** | Estándar del ecosistema Apple, gran detalle en poco tamaño. |
| **FLAC** | Sin pérdida pero comprimido: aproximadamente la mitad del tamaño de WAV. |
| **OGG** | Contenedor de código abierto, preferido por algunos reproductores profesionales. |
| **Opus** | Códec moderno de baja latencia, habitual en reuniones de voz, podcasts y streaming. |
| **AIFF** | Estándar del ecosistema macOS / Logic, sin pérdida. |
| **AMR** | Formato antiguo de grabación de llamadas móviles, estándar 3GPP. |
| **CAF** | Contenedor Apple Core Audio, ideal para postprocesado en iOS. |

## Formatos de salida de audio (4)

El editor, la mejora multipista y la conversión solo pueden escribir uno de estos 4 formatos al exportar:

| Formato | Cuándo usarlo |
|---|---|
| **MP3** | Estándar universal, reconocido por prácticamente cualquier dispositivo y reproductor. |
| **WAV** | Maestro sin pérdida, ideal para reeditar o archivar. |
| **FLAC** | Sin pérdida pero comprimido, aproximadamente la mitad del tamaño de WAV. |
| **OGG** | Contenedor de código abierto, preferido por algunos equipos profesionales. |

## Formatos de vídeo (8)

Los archivos de vídeo **no** los abre directamente el editor. Solo sirven como «fuente de pistas de audio»:

| Formato | Cuándo usarlo |
|---|---|
| **MP4** | Universal, reconocido por prácticamente cualquier dispositivo y reproductor. |
| **MOV** | Estándar del ecosistema Apple: iMovie, Final Cut, Logic lo admiten. |
| **M4V** | Contenedor de vídeo de la era iTunes, se comporta como MP4 en dispositivos Apple. |
| **AVI** | Contenedor clásico, mejor compatibilidad con apps Windows antiguas. |
| **MKV** | Contenedor de código abierto, admite múltiples pistas de audio y subtítulos. Bueno para archivo HD. |
| **WebM** | Formato de vídeo web muy usado, código abierto. |
| **FLV** | Formato de streaming de la antigua era Flash, útil para material antiguo. |
| **WMV** | Windows Media Video, ecosistema Windows. |

## Cómo elegir

- **Compartir universalmente** -> audio MP3, vídeo MP4
- **Segunda pasada en el ecosistema Apple** -> vídeo MOV
- **Archivo sin pérdida** -> audio WAV o FLAC
- **Flujos web o de código abierto** -> audio OGG, vídeo WebM

## Los vídeos no se editan

La línea de tiempo del editor solo acepta clips de audio. Los archivos de vídeo solo pueden actuar como «fuente de pistas»: el editor no los recorta.

## Completamente local

Tanto audio como vídeo, toda la decodificación, codificación y reescritura ocurre en el iPhone. Los archivos no salen del dispositivo.
