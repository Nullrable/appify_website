---
title: Copia de Seguridad JSON Bajo tu Control - Un Archivo que Puedes Abrir
description: Exporta tus datos de Money Tracker como un único archivo JSON — cuentas, categorías, transacciones — y guárdalo donde ya sueles guardar copias, o envíalo directo desde la hoja de compartir del sistema.
date: 2026-09-10
lang: es
slug: json-backup-you-control
---

La pantalla de exportación escribe un único archivo: `money_tracker_<timestamp>.json`, que contiene cada cuenta (con tipo, instantánea de saldo y metadatos), cada categoría (del sistema y personalizadas) y cada transacción (fecha, importe, cuenta, categoría, nota, tipo). Un archivo, toda la base de datos.

Tú decides dónde va. iOS abre el selector de documentos y Android abre Storage Access Framework, así que el archivo puede aterrizar en iCloud Drive, Google Drive, una memoria USB o cualquier app de terceros registrada como Documents provider. Nada te obliga a usar una nube concreta.

Junto al selector está la hoja de compartir del sistema. Desde ahí el archivo va directo a correo, una app de mensajería, una app de notas, AirDrop o Nearby Share — de extremo a extremo por el sistema, nunca por Money Tracker.

JSON es texto plano. Abre el archivo en cualquier editor y verás la estructura: un objeto con los arrays `accounts`, `categories` y `transactions`, cada entrada un registro plano con campos con nombre. Ni blobs en base64, ni contenedores cifrados, ni esquemas atados a la versión.

La importación acepta el mismo archivo. Si una entrada importada comparte ID con una existente, la importación sobrescribe en el sitio en lugar de duplicar — así una exportación reciente sobre otra más antigua solo añade las filas realmente nuevas.
