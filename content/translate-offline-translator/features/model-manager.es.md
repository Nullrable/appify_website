---
title: "Modelos de traducción: descarga una vez, conserva para siempre"
description: "Administra los 19 modelos de idiomas de ML Kit desde una página dedicada. Descarga una vez, elimina para recuperar espacio; el modelo sobrevive sin conexión."
date: 2026-09-03
lang: es
slug: model-manager
icon: download
---

Cada par de idiomas requiere que los modelos de origen y destino estén en el dispositivo antes de que la traducción pueda ejecutarse. Los modelos se descargan una vez, persisten a través de los reinicios de la app y se reutilizan para cada traducción de ese par. La página de descarga de modelos enumera los 19 idiomas compatibles con su estado de descarga y te permite descargar o eliminar cada uno.

## Por qué una página dedicada

ML Kit no descarga modelos automáticamente: cada par de idiomas requiere una descarga explícita de su origen y destino. La página de descarga de modelos expone este estado y permite al usuario administrarlo sin profundizar en el almacenamiento de la plataforma.

Para la mayoría de los usuarios, el flujo de trabajo es invisible: elige un idioma de origen y destino, la app descarga ambos modelos bajo demanda la primera vez que traduces, y los modelos permanecen en el dispositivo para futuras sesiones. La página dedicada es para usuarios que quieren pre-descargar para viajes sin conexión, eliminar idiomas que ya no usan, o ver qué está consumiendo almacenamiento.

## Estados del modelo por idioma

- **No descargado.** Se muestra un botón Descargar. Toca para iniciar la descarga.
- **Descargando.** Se muestra un spinner indeterminado. ML Kit no expone callbacks de progreso, solo finalización; el spinner se resuelve a Descargado o Falló.
- **Descargado.** Se muestra una insignia con un botón Eliminar. Toca para eliminar el modelo y recuperar almacenamiento.
- **Falló.** Un botón de reintento reemplaza a Descargar. Causas comunes: sin red, celular bloqueado, poco espacio en disco. Reintenta una vez resuelto el problema subyacente.

## Cola de descarga secuencial

Múltiples solicitudes de descarga en sucesión rápida se ponen en cola, no se paralelizan. El plugin nativo de iOS no maneja llamadas `manageModel` concurrentes de forma limpia: la segunda solicitud cancela la primera. La app serializa las descargas a través de un único Future encadenado para que las solicitudes concurrentes se resuelvan una tras otra. La UI solo muestra la descarga activa en estado indeterminado; las solicitudes en cola esperan su turno.

## Tiempos de espera y sondeo de descarga

Si se pierde un callback de descarga (observado en iOS en condiciones de red baja), el Future de descarga puede quedarse colgado. La app se protege con un tiempo de espera de 30 segundos; si se activa, la app sondea el disco directamente mediante `isModelDownloaded` para confirmar si el modelo realmente aterrizó antes de informar éxito o fracaso.

## Costo de almacenamiento

Cada modelo ML Kit ocupa aproximadamente 10–50 MB en disco. Descargar los 19 idiomas consume aproximadamente 300–600 MB. Los modelos para origen y destino de la misma traducción están separados; un modelo puede servir como origen o como destino según el rol que el usuario haya seleccionado.

Eliminar el modelo recupera el espacio. No hay limpieza automática. Desinstalar la app elimina todos los modelos descargados como parte de la desinstalación de la plataforma.
