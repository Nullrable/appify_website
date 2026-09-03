---
title: "Detección automática de idioma: cómo la aplicación elige un idioma fuente"
description: "Cuando el selector de fuente está en Detección automática, la aplicación adivina el idioma fuente por traducción. Así es como se hace la adivinación."
date: 2026-09-03
lang: es
slug: auto-detect-language
---

## Detección automática de idioma: cómo la aplicación elige un idioma fuente

Detección automática es la primera opción en el selector de idioma fuente. Seleccionarla no significa que la aplicación no tenga opinión sobre la fuente — significa que la aplicación elegirá un idioma fuente ML Kit específico por traducción, usando ya sea pistas de idioma por bloque OCR (para fotos) o una heurística de conjunto de caracteres en la capa Dart (para texto).

## Por qué por traducción

El traductor en dispositivo de ML Kit requiere que se descargue un idioma fuente específico antes de que la traducción pueda ejecutarse. Detección automática no puede significar «traducir desde cualquier idioma»; tiene que resolverse a uno de los 19 idiomas compatibles por traducción. La aplicación realiza esta resolución automáticamente.

## Cómo funciona para fotos

Para capturas de cámara, el motor OCR emite una pista de idioma por bloque para cada bloque reconocido. Las pistas se agregan en toda la página; el idioma mayoritario se convierte en el idioma fuente ML Kit para esa traducción.

Las páginas monolingües se resuelven limpiamente: una página de subtítulos en coreano se resuelve a coreano, una página de texto en francés se resuelve a francés. Las páginas con escrituras mixtas recurren a un valor predeterminado si ningún idioma único domina.

La traducción por bloque usa estas pistas de manera más granular. Una página con titulares en inglés y subtítulos en japonés puede traducirse con la fuente apropiada por bloque, incluso cuando el idioma mayoritario no está claro.

## Cómo funciona para texto

Para traducciones de texto, la aplicación ejecuta una heurística en la capa Dart que cuenta caracteres por clase de escritura:

- Caracteres Han → Chino simplificado
- Kana → Japonés
- Hangul → Coreano
- Latin → Inglés
- Cirílico → Ruso
- Arábigo → Árabe

La entrada mixta sigue la clase de caracteres mayoritaria. La entrada vacía o solo con espacios se establece por defecto en inglés.

La heurística es rápida (un único escaneo lineal sobre la entrada) y se ejecuta antes de la llamada ML Kit. El idioma fuente elegido se utiliza luego para la solicitud de traducción.

## Cuándo falla la detección automática

- **Latin sin diacríticos.** Un fragmento puramente latino de 10 caracteres podría ser inglés, francés, alemán, italiano, portugués, español, holandés, polaco, checo u otros varios. La heurística elige inglés por defecto; si la fuente no es inglés, la calidad de la traducción puede sufrir. Fija manualmente el idioma fuente para fragmentos latinos cortos.
- **Cirílico sin especificidad.** El cirílico podría ser ruso, ucraniano u otra escritura eslava. La aplicación elige ruso.
- **Ambigüedad de la escritura Han.** El chino simplificado y tradicional comparten la mayoría de sus caracteres. Un fragmento corto de caracteres Han no puede resolverse a uno sin un contexto más largo. La aplicación elige chino simplificado.

Para estos casos, fija manualmente el idioma fuente desde el selector.

## La detección automática nunca es silenciosa

La página siempre tiene un idioma fuente ML Kit específico cuando se ejecuta la traducción. Si la heurística devuelve un valor predeterminado incorrecto, la traducción puede ser incorrecta; si devuelve el idioma correcto, la traducción funciona. No hay ningún modo en el que la aplicación « no pueda elegir un idioma » — cae a un valor predeterminado y traduce.

## Consejo práctico

Para documentos largos y monolingües, la detección automática funciona. Para fragmentos cortos o páginas con escrituras mixtas, fija manualmente el idioma fuente desde el selector. El selector recuerda tus idiomas recientes en la parte superior, por lo que el segundo uso de un idioma es un toque.
