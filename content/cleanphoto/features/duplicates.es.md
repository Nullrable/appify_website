---
title: "Detección de duplicados exactos"
description: "Cómo CleanPhoto agrupa fotos con dimensiones idénticas capturadas en el mismo segundo, y por qué esta regla local encuentra copias reales sin falsos positivos."
date: 2026-09-06
lang: es
slug: duplicates
---

## Detección de duplicados exactos

Los duplicados exactos son las fotos más fáciles de eliminar y las más fáciles de pasar por alto. CleanPhoto los encuentra con una regla simple y transparente que se ejecuta por completo en tu dispositivo: las fotos con dimensiones de píxel idénticas capturadas en el mismo segundo exacto pertenecen al mismo grupo.

### Cómo funciona la agrupación

Durante un escaneo, CleanPhoto recorre tu biblioteca de fotos y construye una clave para cada foto a partir de su ancho, su alto y su segundo de captura. Las fotos con la misma clave se colocan en un grupo. Una foto guardada dos veces —por un re-guardado, una importación de otro dispositivo o un conflicto de sincronización en la nube— tiene las mismas dimensiones y marca de tiempo que la original, así que ambas copias caen en el mismo grupo sin nada más en él.

### Revisar un grupo

Cada grupo muestra todas las copias junto con su tamaño de archivo, para que veas de un vistazo cuál copia es el original de mayor calidad. Marca las copias que quieras eliminar, confirma, y las fotos se eliminan a través de la biblioteca de fotos del sistema. Las fotos que conservas no se tocan.

### Por qué dimensiones y tiempo en lugar de análisis de contenido

Emparejar por dimensiones y segundo de captura es rápido, predecible y privado. No produce falsos positivos entre fotos distintas: que dos fotos diferentes se guarden con dimensiones idénticas en el mismo segundo es extremadamente raro. Y como no hay que analizar ni comparar el contenido de las imágenes, el escaneo ni siquiera lee datos de píxeles: funciona solo con los metadatos de la biblioteca.

### Todo se queda en tu dispositivo

La detección de duplicados se ejecuta localmente en tu teléfono. Ninguna foto, ninguna miniatura y ningún metadato sale nunca de tu dispositivo, y no se requiere cuenta.
