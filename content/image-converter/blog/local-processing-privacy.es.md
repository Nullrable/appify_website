---
title: "Los archivos no salen del móvil: cómo el procesamiento local protege tu privacidad"
description: "Las herramientas de conversión online necesitan subir los archivos; el procesamiento local en el móvil, no. Tomando Image Converter como ejemplo, se explica cómo funciona el procesamiento local, dónde se guarda el historial y los límites de datos de la publicidad y la suscripción."
date: 2026-09-07
lang: es
slug: local-processing-privacy
---

## ¿Cuántas imágenes sensibles has subido?

Piensa en las herramientas de conversión online que has usado: fotos del DNI, escaneos de contratos, capturas privadas... para convertirlas a otro formato se subieron a algún servidor del que nunca habías oído hablar. La mayoría de servicios asegura que "se eliminan tras procesarlas", pero no puedes comprobarlo, y **el acto de subirlas ya se ha producido**.

## Qué significa procesamiento local

Todas las funciones de Image Converter (conversión de formato, compresión, rotación, recorte, cambio de tamaño y combinación) se ejecutan en tu móvil. En concreto:

- Las imágenes solo se leen, procesan y exportan dentro de la aplicación, **sin pasar por ningún servidor**;
- La conversión se ejecuta en el procesador del dispositivo, **y todas las funciones siguen disponibles sin conexión**;
- Los archivos de salida se guardan en el directorio local de la aplicación y, mediante el panel de compartir del sistema, tú decides adónde se envían.

Dicho de otro modo, "los archivos no salen del móvil" no es un eslogan, sino una consecuencia directa de la arquitectura: como no hay canal de subida, no se sube nada.

## Dónde se guarda el historial

Cada conversión escribe una entrada en el historial de la aplicación, con el estado de la operación, la duración, los formatos de origen y salida y el tamaño del archivo. Estos registros se almacenan en la base de datos local del dispositivo, **y solo son legibles en él**.

Al borrar la caché o desinstalar la aplicación se eliminan por completo, sin pasar por nosotros; de hecho, no podríamos verlos aunque quisiéramos.

## Límites de datos entre publicidad y suscripción

El modelo de negocio de la aplicación se explica con claridad:

- **Publicidad**: a los usuarios que no han suscrito Pro se les muestra publicidad incentivada de Google AdMob al entrar en las páginas de funciones. AdMob utiliza, conforme a su política, identificadores publicitarios para servir anuncios; ese es el límite entre AdMob y nosotros: no tenemos acceso a tus archivos ni recopilamos datos personales mediante la publicidad;
- **Suscripción Pro**: el pago se gestiona a través de Apple App Store y la verificación de la suscripción se realiza con RevenueCat. No tenemos acceso a tu número de tarjeta, datos de facturación ni conservamos comprobantes de pago;
- **Ventajas de la suscripción**: Pro elimina la publicidad; al entrar en las funciones se accede directamente, sin ver vídeos incentivados.

## Consejos para tratar archivos delicados

Incluso con herramientas de procesamiento local, los hábitos son importantes:

1. **Traslada pronto los resultados importantes**: envía los archivos convertidos desde el panel de compartir a "Archivos", iCloud o un servicio en la nube; no los dejes solo en el directorio de la aplicación;
2. **Recorta los metadatos antes de compartir**: si son fotos de documentos de identidad, conviene convertirlas primero con Image Converter a otro formato para eliminar la información EXIF original;
3. **Limpia periódicamente**: borra de la configuración el historial y los archivos de salida que ya no necesites para mantener el dispositivo limpio.

La protección de la privacidad no depende de promesas, sino de la arquitectura. Antes de la próxima conversión de imagen, vale la pena preguntarse: **¿esta imagen tiene que salir de mi móvil?**

