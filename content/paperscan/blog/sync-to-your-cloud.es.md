---
title: "Sincronización en la nube: refleja tu biblioteca en tu propio Drive o iCloud"
description: "Sincronización en la nube: refleja tu biblioteca en tu propio Drive o iCloud"
date: 2026-09-02
lang: es
slug: sync-to-your-cloud
---

La sincronización en la nube de Paper Scan refleja la biblioteca de documentos en una carpeta de Google Drive o iCloud controlada por el usuario. El teléfono sigue siendo la ubicación principal de todas las digitalizaciones; la nube sirve como copia de seguridad que el usuario posee y a la que puede acceder de forma independiente. La sincronización en la nube es una función Pro.

### Qué hace la función

Cuando está habilitada, la sincronización en la nube carga las digitalizaciones al almacenamiento en la nube del usuario a medida que se guardan. Las nuevas digitalizaciones se cargan en segundo plano. Las digitalizaciones existentes se cargan durante la ejecución inicial de sincronización.

Los bytes viajan directamente entre el teléfono y el proveedor de la nube. Paper Scan no opera un servidor de retransmisión y no se conserva ninguna copia de las digitalizaciones en la infraestructura de Paper Scan.

### Casos de uso

- **Reemplazo de dispositivo.** Cambia a un teléfono nuevo, instala Paper Scan, inicia sesión en el proveedor de la nube y restaura la biblioteca desde el reflejo de la nube. No se requiere transferencia por cable ni herramienta de copia de seguridad de terceros.
- **Pérdida de dispositivo.** Si el teléfono se pierde o se daña, las digitalizaciones se conservan en el reflejo de la nube y la biblioteca se puede restaurar en un dispositivo de reemplazo.
- **Navegación entre dispositivos.** Abre la carpeta de la nube en cualquier navegador para ver las digitalizaciones organizadas por la estructura de carpetas configurada en el teléfono. Los archivos se pueden compartir, adjuntar a correos electrónicos o transferir a otras aplicaciones directamente desde la carpeta de la nube.
- **Copia de seguridad fuera del sitio.** Mantén una copia independiente de la biblioteca de documentos para redundancia.

### Configuración

1. Abre **Settings → Cloud** en Paper Scan.
2. Selecciona Google Drive o iCloud. El proveedor se puede cambiar más tarde; ambos proveedores usan el mismo motor de sincronización.
3. Inicia sesión en la cuenta de la nube. Paper Scan solicita los permisos mínimos requeridos: acceso solo a su propia carpeta, no a la cuenta completa de Drive o iCloud.
4. Selecciona qué carpetas locales reflejar. La biblioteca completa se refleja de forma predeterminada; las carpetas específicas se pueden excluir si ciertas digitalizaciones deben permanecer solo en el dispositivo.
5. Toca **Start Sync**. La primera ejecución carga la biblioteca existente; las digitalizaciones posteriores se cargan automáticamente a medida que se guardan.

Para deshabilitar la sincronización en la nube, desactiva la función en la misma pantalla de Configuración. Paper Scan no elimina archivos de la nube cuando se desactiva la sincronización. La copia de la nube permanece en su lugar hasta que el usuario elija eliminarla.

### Alcance de permisos

Paper Scan solicita el alcance de permiso requerido para leer y escribir su propia carpeta dentro de Google Drive o iCloud. No recibe visibilidad sobre otros archivos en el almacenamiento en la nube del usuario, ni obtiene tokens que permitirían el acceso a esos archivos. Para verificarlo, revisa la lista de aplicaciones conectadas en la configuración de la cuenta de Google o Apple: Paper Scan aparece con acceso limitado a su carpeta de aplicación designada, no a la cuenta completa.

### Restaurar

Restaurar es una operación separada de la sincronización. Se inicia manualmente cuando el usuario quiere reconstruir la biblioteca local desde la copia de la nube.

1. Instala Paper Scan en el nuevo dispositivo e inicia sesión.
2. Abre **Settings → Cloud → Restore**.
3. Selecciona el proveedor y el destino.
4. Espera a que se complete la restauración. Una biblioteca de unos pocos cientos de digitalizaciones normalmente se completa en unos minutos; una biblioteca de varios miles tarda más. La barra de progreso refleja el progreso real.

Restaurar es la única operación en la que la aplicación recupera archivos de la nube. No se ejecuta automáticamente ni en segundo plano.

### Cambiar de proveedor y deshabilitar la sincronización

Puedes cambiar entre Google Drive e iCloud deshabilitando el proveedor actual, habilitando el nuevo e iniciando sesión: la siguiente sincronización comienza de nuevo en el lado nuevo. Los archivos previamente reflejados en el proveedor antiguo permanecen allí hasta que el usuario los elimine. Deshabilitar la sincronización detiene las nuevas cargas pero no elimina los archivos ya cargados; la biblioteca local no se ve afectada. Deshabilitar y volver a habilitar la sincronización se reanuda desde donde se detuvo, y las digitalizaciones agregadas durante el período deshabilitado se cargan en la siguiente ejecución de sincronización.

Paper Scan funciona completamente sin sincronización en la nube. La digitalización, OCR, carpetas, etiquetas y exportación de PDF operan de manera idéntica con o sin sincronización habilitada.
