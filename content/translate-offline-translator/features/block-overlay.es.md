---
title: "Superposición por bloques: traducciones renderizadas en su lugar en la foto"
description: "La página de resultados pinta cada bloque de texto traducido sobre su rectángulo fuente, preservando el diseño original."
date: 2026-09-03
lang: es
slug: block-overlay
icon: layers
---

La página de resultados renderiza las traducciones sobre la foto original, una superposición por bloque OCR. La traducción de cada bloque aparece en el rectángulo exacto donde el motor OCR detectó el texto fuente. La superposición admite un control deslizante de transparencia para que los usuarios puedan comparar el original y la traducción lado a lado sin salir de la página.

## Cómo funciona la superposición

1. **Traducción por bloque.** Cada TextBlock detectado se envía a ML Kit como un trabajo de traducción independiente. Las traducciones fluyen a la superposición a medida que se completan; el usuario ve los bloques «volverse» traducidos en el orden en que el motor los termina.
2. **Posición por rectángulo.** El texto traducido se ajusta y posiciona para caber en el rectángulo fuente. Si un bloque es estrecho, la traducción pasa a varias líneas y puede desbordar ligeramente el rectángulo fuente; el motor prefiere la legibilidad sobre la contención estricta.
3. **Tocar para enfocar.** Tocar un bloque traducido abre una hoja inferior que se desplaza al mismo bloque en la vista «Traducción completa», para que los usuarios puedan leer traducciones largas sin hacer zoom en la foto.
4. **Transparencia ajustable.** Un control deslizante controla la opacidad de la capa de superposición. Desliza a totalmente transparente para ver la foto original, totalmente opaco para leer las traducciones.

## Anatomía de la página de resultados

- **Barra superior.** Un botón de cerrar. Sin otros controles — la página de resultados es deliberadamente minimal.
- **Área principal.** La foto original a pantalla completa, con la capa de superposición renderizada encima. InteractiveViewer permite zoom y desplazamiento para inspeccionar texto pequeño.
- **Hoja inferior.** Tres estados: contraído (predeterminado), medio (aproximadamente la mitad de la pantalla), expandido (la mayor parte de la pantalla). El estado contraído muestra un pequeño tirador y un resumen; medio muestra las traducciones por bloque como tarjetas; expandido muestra todas las traducciones de bloque a ancho completo.
- **Dos pestañas en la hoja.** Una pestaña «Blocks» muestra las traducciones agrupadas por bloque OCR, y una pestaña «Full» muestra la traducción completa del párrafo jointo.

## Por qué la traducción por bloque

- **Escrituras mixtas.** Una página con titulares en inglés y pies de foto en japonés se beneficia de pistas de idioma fuente por bloque. La ubicación y la clase de escritura del bloque informan al motor qué modelo fuente usar.
- **Aislamiento de fallos.** El fallo de un solo bloque para traducir no bloquea el resto de la página. La superposición marca los bloques fallidos con una pequeña insignia de advertencia para que los usuarios sepan cuáles necesitan atención manual.
- **Preservación del diseño.** Los usuarios que leen la fuente pueden localizar la traducción correspondiente a ojo — útil para menús, letreros y etiquetas donde la relación espacial importa.

## Comportamiento de edición

La superposición se renderiza sobre la foto, no horneada. Guardar en el historial almacena tanto la foto original como el registro de traducción por bloque. Abrir una entrada guardada reproduce la superposición exactamente; la edición de la foto no se admite.
