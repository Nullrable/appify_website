---
title: "Traducción de texto vs traducción de foto: cuál usar"
description: "Cuando la fuente ya es texto, omite OCR. Cuando la fuente es una página impresa, la traducción de foto es más rápida. Cómo elegir."
date: 2026-09-03
lang: es
slug: text-vs-photo-translate
---

## Traducción de texto vs traducción de foto: cuál usar

La aplicación tiene dos puntos de entrada para la traducción: la página de cámara (traducción de foto) y la página de traducción de texto. Comparten el mismo estado de par de idiomas y el mismo motor ML Kit, pero el pipeline difiere en un paso importante.

## La diferencia en una frase

La traducción de foto ejecuta OCR sobre una imagen capturada y luego traduce el texto reconocido. La traducción de texto omite OCR por completo y alimenta la entrada directamente al motor de traducción.

## Cuándo la traducción de texto es más rápida

- **Fuentes que ya son texto.** Correos, mensajes de chat, fragmentos web, párrafos pegados — cualquier cosa que exista como texto en lugar de página impresa. Omitir OCR elimina un paso y elimina una clase de errores OCR (caracteres mal leídos, saltos de línea rotos, diseño alterado).
- **Texto largo y denso.** Fotografiar una pantalla llena de texto introduce ruido OCR. Pegar el texto no.
- **Dictado.** La tecla de dictado del sistema te permite dictar la entrada en lugar de escribirla. La precisión del dictado es buena para habla clara en un entorno silencioso.
- **Cámara no disponible.** Si la cámara está siendo usada por otra aplicación, o si el permiso de cámara fue denegado, la traducción de texto sigue funcionando.

## Cuándo la traducción de foto es más rápida

- **Páginas impresas.** Libros, menús, letreros, embalajes, instrucciones, pósteres. Existen como tinta sobre papel; la única forma de llevarlos a texto es fotografiarlos.
- **Pegatinas y etiquetas.** Una foto de una pegatina o etiqueta en un producto puede traducirse en su lugar sin transcribirla primero.
- **Pantallas que no puedes seleccionar.** Si la fuente se renderiza como píxeles — una imagen en un PDF, una captura de pantalla de una aplicación antigua, una foto de una pantalla — no hay texto para copiar. La traducción de foto es la única opción.
- **Letreros bilingües.** Capturar ambos idiomas en una sola fotografía a menudo resuelve la pista de idioma por bloque que usa la detección automática.

## Diferencias de precisión

Ambas rutas usan el mismo motor ML Kit, por lo que la traducción en sí tiene la misma calidad. La diferencia está más arriba: la traducción de foto puede introducir ruido OCR que la traducción de texto no. Si el motor OCR lee mal un carácter, el motor de traducción no tiene forma de recuperar el texto original.

Para texto que controlas (tu propia escritura, tus propios mensajes), pégalo. Para texto que vive en papel, fotografíalo.

## Compartir entre modos

Los ajustes de idioma fuente y destino se comparten entre la página de cámara y la página de traducción de texto. Cambiar idiomas en un lugar se aplica al otro; ir y venir no requiere re-seleccionar idiomas.

Las traducciones de texto no se guardan automáticamente en el historial; viven en la región de resultado hasta que toques Borrar o navegues fuera. Las traducciones de cámara se pueden guardar en el historial desde la página de resultado.

## Una regla práctica

Si puedes copiar el texto, cópialo. Si no, fotografíalo. La ruta de copia es más limpia porque se elimina OCR del bucle.
