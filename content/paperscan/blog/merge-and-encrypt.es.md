---
title: "Exportación PDF multipágina con protección opcional por contraseña"
description: "Exportación PDF multipágina con protección opcional por contraseña"
date: 2026-09-02
lang: es
slug: merge-and-encrypt
---

La exportación PDF de Paper Scan está pensada para combinar varias páginas escaneadas en un único archivo y entregarlo a través de la hoja de compartir estándar del sistema. Soporta fusión por lotes, protección opcional por contraseña y nombrado, todo en el dispositivo.

### Flujo estándar de exportación

1. **Selección múltiple en la lista de Documentos.** Mantén pulsado un documento para entrar en modo selección y luego toca los demás. Hay un atajo «seleccionar todo en la carpeta» para lotes en el mismo sitio.
2. **Toca el botón Compartir.** Se abre la hoja de compartir del sistema. La exportación PDF de Paper Scan aparece entre los destinos.
4. **Configura las opciones.** Activa la fusión si combinas varias páginas, introduce una contraseña si hace falta y opcionalmente asigna un nombre. Toca Exportar.
4. **Espera al procesamiento.** En dispositivos recientes, un lote de 50 páginas con dos filtros suele completarse en menos de 5 segundos. Un lote de 300 páginas tarda 15–30 segundos. La hoja de exportación muestra un indicador de progreso; la app sigue respondiendo.
5. **Comparte.** Cuando el archivo está listo, aparece la hoja de compartir estándar. Se puede enviar por correo, AirDrop, Drive, Slack o cualquier app que acepte PDF.

### Casos de uso comunes

- **Reenviar material de reuniones.** Combina 50–80 páginas de contratos y anexos firmados en un solo PDF para revisión legal.
- **Archivar recibos de gastos.** Combina los recibos de un mes en un PDF para contabilidad.
- **Compartir paquetes de investigación.** Compila varios documentos de referencia en un archivo para colegas.
- **Archivar proyectos.** Empaqueta todos los documentos de un proyecto terminado en un único entregable.

### Establecer contraseña

La hoja de exportación contiene un único campo de contraseña acompañado de un campo «confirmar contraseña» para verificar la entrada. La exportación solo avanza cuando ambas entradas coinciden; las entradas que no coinciden se rechazan antes de procesar.

Si dejas el campo de contraseña vacío, la salida es un PDF estándar sin restricciones. Si estableces una, los destinatarios deben introducirla antes de abrir cualquier página. Se recomienda protección por contraseña para documentos con datos personales: contratos, historiales médicos, estados financieros.

Guía práctica: déjalo vacío salvo que la protección sea claramente necesaria. Quitar una contraseña de un PDF después es difícil, mientras que un PDF sin proteger puede re-exportarse con contraseña si hace falta.

### Cuándo fusionar, cuándo dividir

Un único PDF grande no siempre es la salida correcta. Divide mejor cuando: la memoria de los dispositivos destinatarios es limitada, distintos destinatarios necesitan partes distintas del lote, o se necesitan contraseñas diferentes. Cada archivo exportado tiene su propio campo de contraseña.

Paper Scan exporta la selección tal cual. Sin fusión forzada; la salida refleja lo que el usuario eligió.

### Rendimiento para lotes grandes

300+ páginas suelen tardar 15–30 segundos; la barra de progreso muestra el estado. Los escaneados con filtros pesados (p. ej. color mágico en un recibo descolorido) tardan aproximadamente el doble que los escaneados limpios. El cifrado no ralentiza la exportación de forma notable en dispositivos modernos (el cuello de botella es la codificación de imagen). Una exportación cifrada grande calienta el dispositivo y consume algunos puntos porcentuales de batería, lo cual es aceptable para uso ocasional.
