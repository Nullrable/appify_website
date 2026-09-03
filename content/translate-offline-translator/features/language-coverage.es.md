---
title: "19 idiomas: cobertura de ML Kit, selector y detección automática"
description: "La traducción en el dispositivo de ML Kit admite 19 idiomas. El selector incluye búsqueda, uso reciente y una opción de detección automática para la fuente."
date: 2026-09-03
lang: es
slug: language-coverage
icon: globe
---

La aplicación traduce entre 19 idiomas en el dispositivo a través de Google ML Kit. La lista completa: árabe, chino (simplificado), checo, neerlandés, inglés, francés, alemán, croata, húngaro, italiano, japonés, coreano, polaco, portugués, rumano, ruso, eslovaco, esloveno y español. Se añaden nuevos idiomas a medida que ML Kit publica modelos en el dispositivo para ellos.

## Selector de idioma

El selector es el único punto de entrada para elegir los idiomas fuente y destino, accesible desde la barra de idioma en la parte superior de la página de cámara o de la página de traducción de texto.

- **Búsqueda.** Escribe en el campo de búsqueda para filtrar por nombre en inglés o código de idioma. La lista se actualiza a medida que escribes.
- **Usados recientemente.** La sección superior muestra los idiomas que has usado en las últimas traducciones. La selección los mueve automáticamente a la parte superior.
- **Detección automática (solo fuente).** Aparece como la primera opción en el selector de fuente. Seleccionarla hace que la aplicación adivine el idioma fuente por captura (ver más abajo).
- **Todos los idiomas.** Debajo de la sección de usados recientemente está la lista completa de los 19 idiomas admitidos con sus banderas de país.

Los selectores de fuente y destino se pueden abrir independientemente. Elegir una fuente que sea la misma que el destino lo destaca en el selector para evitar una traducción accidental de sí mismo a sí mismo.

## Detección automática para la fuente

Cuando la fuente está establecida en Detección automática, la aplicación necesita elegir un idioma fuente ML Kit específico por traducción. Se se usan dos estrategias:

- **Para capturas de fotos.** Las pistas de idioma por bloque del motor OCR se agregan; el idioma mayoritario entre bloques se convierte en la fuente ML Kit. Las páginas de un solo idioma se resuelven limpiamente; las páginas de escrituras mixtas vuelven a un valor predeterminado.
- **Para traducción de texto.** Una heurística a nivel de clase de caracteres en Dart cuenta los caracteres por clase de escritura: caracteres Han → chino simplificado, kana → japonés, hangul → coreano, latín → inglés, cirílico → ruso, escritura árabe → árabe, etc. La entrada vacía o solo con espacios se establece por defecto en inglés.

La detección automática nunca falla silenciosamente. La página siempre tiene un idioma fuente ML Kit específico cuando se ejecuta la traducción.

## Por qué 19 y no más

El recuento está limitado por lo que ML Kit publica como modelos en el dispositivo. Los idiomas fuera de esta lista no se pueden traducir en el dispositivo con ML Kit. La lista está curated: cada entrada tiene un modelo descargable de 10–50 MB. El selector excluye los idiomas que ML Kit no admite, incluso si son códigos BCP 47 válidos.

## i18n de la interfaz

La interfaz de la aplicación misma (menús, configuración, mensajes de error) está traducida a 10 idiomas: árabe, inglés, alemán, coreano, francés, japonés, ruso, español, vietnamita y chino (simplificado). Los idiomas de traducción son un superconjunto del conjunto i18n para varios pares comunes (en ↔ ja, en ↔ zh, en ↔ es, en ↔ fr).
