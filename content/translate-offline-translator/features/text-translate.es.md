---
title: "Traducción de texto: pega, escribe, traduce"
description: "Una página de traducción solo de texto que comparte el mismo estado de par de idiomas con la página de cámara."
date: 2026-09-03
lang: es
slug: text-translate
icon: keyboard
---

La página de traducción de texto es una entrada separada de la página de cámara para los casos en que la fuente ya es texto. Ábrela desde la parte inferior de la página de cámara y pega, escribe o dicta un párrafo; el mismo motor de ML Kit devuelve una traducción.

## Por qué una página separada

El OCR de cámara está optimizado para imágenes. Cuando la fuente ya es texto: un fragmento de correo, un mensaje de chat, un párrafo pegado: el paso OCR es innecesario. La página de traducción de texto omite OCR por completo y alimenta la entrada directamente al traductor de ML Kit.

También permite traducir por lotes copiando y pegando un párrafo más largo en lugar de fotografiarlo. Para texto denso sin una página conveniente para fotografiar, es más rápido y preciso.

## Cómo funciona

- **Estado de idioma compartido.** La página de texto lee y escribe el mismo par de idiomas fuente/destino que la página de cámara. Elegir un idioma destino en un lugar se aplica al otro; alternar no requiere volver a seleccionar los idiomas.
- **Detección automática para la fuente.** Si la fuente está establecida en «Detección automática», la aplicación ejecuta una heurística de nivel de clase de caracteres en Dart sobre el texto de entrada para elegir entre los idiomas admitidos por ML Kit. Latín puro por defecto a inglés; caracteres Han por defecto a chino simplificado; escrituras mixtas siguen la clase de caracteres mayoritaria.
- **Traducción de un solo paso.** Toda la entrada se envía a ML Kit en una sola llamada. El resultado reemplaza el área de entrada bajo el botón; borra la entrada para traducir de nuevo.
- **Manejo del teclado.** Tocar en Traducir cierra el teclado en pantalla para que el área de resultado no quede oculta tras él.

## Cuándo usarlo

- **Párrafos largos.** Escribe o pega texto de varias frases. Fotografiar una pantalla llena de texto introduce ruido de OCR; pegar el texto no.
- **Fragmentos de chat.** Traduce un mensaje corto de un amigo sin salir de la conversación para abrir la cámara.
- **Pantallas con texto.** Extrae texto de una captura de pantalla mediante el uso compartido del sistema y pégalo en la página de traducción de texto para una traducción más limpia que el OCR.
- **Dictado por voz.** Usa la tecla de dictado del sistema para dictar texto en lugar de escribirlo.

## Límites

- **Sin conservación de formato.** Solo texto plano. Markdown, negrita, cursiva y otros formatos se eliminan.
- **Sin guardado automático en el historial.** A diferencia de las capturas de cámara, las traducciones de texto no se guardan automáticamente. El resultado permanece en el área de resultado hasta que toques Borrar o navegues fuera.
