---
title: "Historial de traducciones: solo local, eliminable en cualquier momento"
description: "El historial vive en una base de datos Drift en el dispositivo. No se sube ninguna copia; las entradas se pueden eliminar individualmente o en masa."
date: 2026-09-03
lang: es
slug: translation-history
icon: history
---

Cada captura de cámara se puede guardar en el historial de traducción local. Cada entrada almacena la foto original (comprimida), el idioma fuente detectado, el idioma destino, los bloques OCR y las traducciones por bloque. Abrir una entrada guardada reproduce la página de resultados en modo de solo lectura.

## Qué se almacena

Cada registro de historial contiene:

- **Foto original** como miniatura JPEG, escalada para ajustarse a un borde máximo. La foto a resolución completa se descarta después del escalado para mantener el almacenamiento acotado.
- **Idioma fuente** detectado por OCR (o establecido manualmente).
- **Idioma destino** seleccionado para la captura.
- **Bloques OCR** con sus cajas delimitadoras, texto detectado y confianza.
- **Traducciones** por bloque y la traducción completa del párrafo jointo.
- **Marca de tiempo de creación** para ordenación y visualización.

Ninguna copia de la foto o del texto traducido se sube a ningún servidor que operemos. El historial completo se almacena en una base de datos SQLite en el dispositivo administrada por Drift.

## Cómo se rellena el historial

- **Capturas de cámara.** Después de que OCR + traducción se completa, la página de resultados ofrece una acción Guardar. Guardar almacena la entrada descrita arriba.
- **Fotos importadas.** Mismo flujo: después de la traducción, la página de resultados puede guardar la entrada en el historial.
- **Traducciones de texto.** No se guardan automáticamente. Las traducciones de texto aparecen solo en el área de resultado de la página de traducción de texto y desaparecen al Borrar o navegar. Usa la cámara o la importación si quieres un registro persistente.

## Navegar y eliminar

- **Vista de lista.** La página de historial muestra las entradas más recientes primero con la miniatura de la foto, el fragmento fuente, el fragmento destino y la marca de tiempo.
- **Toca para abrir.** Tocar una fila abre la página de resultados en modo de solo lectura. La superposición se reproduce con las traducciones guardadas; ML Kit no se vuelve a ejecutar.
- **Eliminar.** Cada fila tiene un botón de eliminar. La eliminación está protegida por un diálogo de confirmación para evitar eliminaciones accidentales. La eliminación elimina el registro y su miniatura de foto del dispositivo; nada se envía fuera del dispositivo.
- **Estado vacío.** Cuando el historial está vacío, un marcador de posición explica cómo rellenarlo.

## Privacidad

El historial es un artefacto local. El modelo de privacidad de la app:

- **Sin subidas.** El historial nunca se sube, sincroniza ni respalda en ningún servidor.
- **Sin análisis sobre el contenido del historial.** Los informes de fallos y los análisis anónimos de uso no incluyen el contenido del historial, el texto OCR ni el texto traducido.
- **La eliminación es permanente.** Eliminar una entrada del historial la elimina permanentemente de la base de datos en el dispositivo. No hay copia en la nube que limpiar.

## Crecimiento del almacenamiento

Cada entrada ocupa aproximadamente 50–500 KB dependiendo del tamaño de la foto. Un historial de unos pocos cientos de entradas típicamente permanece por debajo de 50 MB. Las fotos se comprimen al guardar; el original a resolución completa nunca se conserva.

Para liberar espacio: abre la página de historial y elimina las entradas que ya no necesites. Desinstalar la app elimina toda la base de datos del historial como parte de la desinstalación de la plataforma.
