---
title: "Cómo CleanPhoto escanea tu biblioteca sin subir una sola foto"
description: "Una mirada dentro de los tres detectores en el dispositivo — duplicados exactos, fotos similares y capturas — y las reglas simples que usan, para que sepas exactamente qué pasa al pulsar Escanear."
date: 2026-09-06
lang: es
slug: how-scan-works
---

## Cómo CleanPhoto escanea tu biblioteca sin subir una sola foto

La mayoría de limpiadores de fotos piden confianza. CleanPhoto intenta ganarla con transparencia: cada escaneo corre en tu dispositivo, trabaja con los metadatos de la biblioteca y sigue reglas lo bastante simples para explicar en pocos párrafos. Esto es exactamente lo que pasa cuando pulsas Escanear.

### Tres detectores, tres preguntas

CleanPhoto ejecuta tres escaneos, cada uno respondiendo una pregunta distinta. Los duplicados exactos preguntan "¿esta foto se guardó dos veces?" Las fotos similares preguntan "¿fue una ráfaga o una repetición rápida?" Las capturas preguntan "¿esta imagen es solo temporal?" Puedes ejecutarlos en cualquier orden, y cada uno presenta sus resultados como grupos para revisar.

### Regla uno: mismo tamaño, mismo segundo

El detector de duplicados construye una clave para cada foto a partir de su ancho, su alto y su segundo de captura. Las fotos con la misma clave caen en un grupo. Una foto re-guardada, importada o nacida de un conflicto de sincronización en la nube conserva dimensiones y marca de tiempo de la original, así que ambas copias se encuentran en el mismo grupo. Que dos fotos distintas compartan dimensiones idénticas en el mismo segundo es rarísimo — por eso esta regla encuentra copias reales sin falsos positivos.

### Regla dos: dentro de diez segundos

El detector de fotos similares ordena la biblioteca por hora de captura y recorre la línea de tiempo. Mientras cada foto se tome dentro de los 10 segundos siguientes a la anterior, se une al mismo grupo; en cuanto el intervalo supera los 10 segundos, la cadena se cierra. Eso coincide con cómo ocurren realmente ráfagas y repeticiones — una serie rápida, una pausa, luego otra cosa. Los grupos de una sola foto se descartan.

### Regla tres: álbum, título, ruta

El detector de capturas funciona distinto según la plataforma. En iOS lee directamente el álbum de Capturas de pantalla del sistema. En Android, donde el almacenamiento varía por fabricante, revisa primero los nombres de álbumes y, sin álbum de capturas, inspecciona el título y la ruta de archivo de cada imagen en busca de los patrones de nombres de los dispositivos. Los resultados se agrupan por día, lo más reciente primero.

### Tamaños de archivo, cargados antes de revisar

Antes de que se abra cualquier pantalla de revisión, CleanPhoto precarga el tamaño de archivo de cada foto. En un grupo, el archivo más grande casi siempre es la copia que conservó más detalle, así que los elementos se ordenan por tamaño y el mejor candidato queda arriba. Esa única señal convierte "¿cuál de estas ocho es la mejor?" en "¿está bien esta?".

### Lo que nunca pasa

Ningún escaneo lee el contenido de píxeles para analizarlo, ninguna foto ni miniatura sale de tu dispositivo, y no se requiere cuenta. Las eliminaciones solo ocurren tras tu confirmación explícita y pasan por la biblioteca de fotos del sistema — la app nunca borra nada por su cuenta. Internet se usa para solo dos cosas: mostrar anuncios en la versión gratuita y gestionar la suscripción Pro.
