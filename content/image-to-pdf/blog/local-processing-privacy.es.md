---
title: "Los archivos no salen del teléfono: cómo el procesamiento local protege su privacidad"
description: "Las herramientas de conversión en línea necesitan subir archivos; el procesamiento local en el teléfono no. Usando Image to PDF como ejemplo, explique cómo funciona el procesamiento local, dónde se almacena el historial y los límites de datos de anuncios y suscripciones."
date: 2026-09-07
lang: es
slug: local-processing-privacy
---

## ¿Cuántos archivos sensibles ha subido?

Piense en las herramientas de conversión en línea que ha usado: fotos de documentos de identidad, escaneos de contratos, capturas de pantalla de extractos bancarios — para convertirlos en PDF o imágenes, se subieron a un servidor del que nunca había oído hablar. La mayoría de los servicios afirman "eliminar inmediatamente después de procesar", pero usted no puede verificarlo, y la acción de subir ya ha ocurrido.

## Qué significa procesamiento local

Todas las funciones de Image to PDF — imágenes a PDF, ensamblaje, PDF a imágenes, fusión, cifrado, descifrado — se realizan en su teléfono. Específicamente:

- Las imágenes y archivos PDF solo se leen, procesan y generan dentro de la aplicación, **sin pasar por ningún servidor**;
- Las conversiones se ejecutan en el chip del dispositivo y se pueden completar por completo incluso sin conexión;
- Los archivos de salida se guardan en el directorio local de la aplicación, y usted decide dónde se envían a través del panel de compartir del sistema.

En otras palabras, "los archivos no salen del teléfono" no es un eslogan, sino el resultado directo de la arquitectura técnica — sin canal de subida, naturalmente no hay subida.

## Dónde se almacena el historial

Cada conversión se escribe en el historial de la aplicación, incluido el estado de la operación, la duración, los formatos de origen y salida, y el tamaño del archivo. Estos registros se almacenan en una base de datos local del dispositivo y solo se pueden leer en ese dispositivo. Vaciar la caché o desinstalar la aplicación los elimina por completo, sin pasar por nosotros — de hecho, ni siquiera podemos verlos.

## Límites de datos de anuncios y suscripciones

El modelo de negocio de esta aplicación debe aclararse:

- **Anuncios**: los usuarios que no estén suscritos verán anuncios rewarded de Google AdMob al entrar en las páginas de funciones. AdMob utiliza identifiers publicitarios según sus políticas para publicar anuncios; este es el límite entre nosotros y AdMob — no tenemos sus archivos y no recopilamos conscientemente sus datos personales a través de anuncios;
- **Suscripción Pro**: el pago lo gestiona Apple App Store, la verificación de la suscripción se realiza a través de RevenueCat. No accedemos a su número de tarjeta ni a su información de facturación, y no conservamos comprobantes de pago;
- **Beneficios de suscripción**: Pro elimina los anuncios, permitiendo el uso directo de las funciones sin ver videos rewarded.

## Sugerencias para manejar archivos sensibles

Incluso con herramientas de procesamiento local, los hábitos siguen siendo importantes:

1. **Transfiera rápidamente los resultados importantes** — envíe los resultados de conversión a través del panel de compartir a "Archivos", iCloud o disco en la nube, no los deje solo en el directorio de la aplicación;
2. **Cifre antes de enviar externamente** — use la función de cifrado para establecer una contraseña de apertura para PDF sensibles, envíe la contraseña y el archivo por canales separados;
3. **Limpie regularmente** — elimine el historial y los archivos de salida innecesarios en los ajustes, mantenga el dispositivo limpio.

La protección de la privacidad no se basa en promesas, sino en arquitectura. Antes de convertir un archivo la próxima vez, piense: ¿este archivo necesita salir de mi teléfono?
