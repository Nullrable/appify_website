---
title: Acerca de Paper Scan - Guía de funciones
description: Conoce qué hace Paper Scan, cómo cada filtro y OCR funciona en el dispositivo, y cómo la sincronización en la nube sin conflictos mantiene tus documentos alineados entre iPhone y iPad.
date: 2026-09-02
lang: es
slug: index
---

Paper Scan es un escáner de documentos hecho para iPhone y iPad. Captura una página A4 completa desde una distancia cómoda, corrige la perspectiva automáticamente, te permite mejorar el resultado con seis filtros GPU y exporta PDF multipágina con texto buscable, todo sin enviar un solo byte a un servidor a menos que actives la sincronización en la nube.

## Captura y detección de bordes

La vista de captura es lo bastante amplia como para encajar una hoja A4 entera a la longitud del brazo. En el momento en que una página entra en el encuadre, la detección de bordes se ajusta a sus esquinas. La captura automática se dispara cuando el documento está estable, la perspectiva se corrige en el sitio y una miniatura pequeña llega a la bandeja de revisión para que confirmes o vuelvas a disparar.

Puedes cambiar al modo manual en cualquier momento. Mantén pulsado el obturador para desactivar la captura automática, arrastra las asas de las esquinas cuando los bordes necesiten ayuda y toca una miniatura para recortar o girar antes de que la página quede fijada al documento.

## Seis filtros GPU

Cada filtro en Paper Scan se procesa en la GPU. Las vistas previas se actualizan al instante incluso en lotes multipágina, así puedes comparar la intensidad del filtro sin esperar.

- **Original** deja la foto capturada intacta y es la elección correcta cuando quieres un registro fiel.
- **Mejorar** aumenta el contraste y el balance de blancos, lo que rescata recibos térmicos descoloridos y tomas con luz tenue.
- **Escala de grises** aplana el ruido de color en el papel de color para que la capa OCR lea el texto con más limpieza.
- **Blanco y negro** lleva la misma idea un paso más allá, produciendo la capa de texto más limpia para escaneos de archivo.
- **Aclarar** uniforma las sombras del flash, útil para páginas de revista satinadas.
- **Enfocar** recupera detalles finos en recibos y pegatinas de números de serie.

Los filtros se aplican por página, no por documento. Puedes mezclarlos en un mismo PDF si algunas páginas necesitan color y otras necesitan blanco y negro.

## Organización

Los escaneos aterrizan en un lienzo agrupados como páginas dentro de un documento. Puedes arrastrar páginas para reordenarlas, soltar páginas de un documento en otro, renombrar documentos en el sitio y anclar los más usados arriba en la biblioteca.

La búsqueda de texto completo se ejecuta en cada página que hayas pasado por OCR. Los resultados resaltan la palabra coincidente en una miniatura de la página y, al tocar el resultado, se abre el documento en la página correcta para que leas el contexto circundante.

## OCR en el dispositivo

El OCR usa el framework Vision de Apple. El reconocimiento de texto ocurre dentro del enclave seguro de tu iPhone: la imagen nunca sale del dispositivo, el texto reconocido nunca se envía a ningún sitio y el índice OCR vive en el almacenamiento privado de la app. La capa OCR se ejecuta bajo demanda y puedes volver a ejecutarla en cualquier página en cualquier momento si cambias el filtro.

El texto buscable se conserva al exportar PDF. Quien abra el PDF en Preview, Adobe Reader o cualquier visor moderno puede copiar el texto en lugar de reescribirlo.

## Exportación de PDF multipágina

Exporta todo un documento como un PDF o comparte páginas individuales como imágenes. Por exportación puedes elegir el tamaño de página (Letter / A4 / original), la orientación, la calidad (Baja / Estándar / Alta) y si incluir la capa de texto OCR. Paper Scan incrusta la capa OCR automáticamente cuando mantienes la calidad en Estándar o Alta.

La exportación por lotes te permite elegir varios documentos a la vez y enviarlos como un único zip multipágina, útil para lotes de gastos a fin de mes.

## Sincronización en la nube sin conflictos

La sincronización en la nube es opcional. Activa iCloud y tus documentos aparecen en cada dispositivo con la misma Apple ID; activa Google Drive y aparecen en cada dispositivo con esa cuenta de Google. Puedes mantener ambas apagadas y la app se comporta como un archivo puramente local.

La sincronización resuelve ediciones concurrentes sin crear duplicados. Cada página lleva su propio marcador de revisión, de modo que la versión más reciente de esa página gana, y tus ediciones locales en curso nunca se sobrescriben silenciosamente. Los renombrados de carpetas, documentos y páginas también se propagan, de modo que borrar un documento en un dispositivo lo borra en todos.

## Sin conexión por defecto, privacidad primero

Paper Scan está sin conexión por defecto. Escaneo, detección de bordes, filtros, OCR, búsqueda y exportación PDF se ejecutan en el dispositivo y no hacen ninguna llamada de red. La única que usa la red es la sincronización en la nube, y solo cuando la activas. No se necesita cuenta, no hay SDK de análisis incluido y no hay publicidad.

Tus escaneos viven en el almacenamiento privado de la app. Desinstalar la app elimina todos sus datos locales, incluido el índice OCR, la caché de búsqueda de texto completo y cualquier edición no sincronizada.

## Paper Scan Pro

El escaneo, los seis filtros, el OCR, la exportación de PDF de un único documento y la búsqueda se mantienen gratis para siempre sin marca de agua. Paper Scan Pro añade documentos ilimitados, sincronización en la nube y exportación por lotes. Pro se vende como una mejora única, así que una vez que lo tienes lo conservas en todos los dispositivos y a través de futuras actualizaciones.
