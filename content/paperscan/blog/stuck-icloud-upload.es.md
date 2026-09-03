---
title: "Solución de problemas de cargas de iCloud atascadas"
description: "Solución de problemas de cargas de iCloud atascadas"
date: 2026-09-02
lang: es
slug: stuck-icloud-upload
---

Cuando la sincronización de iCloud en Paper Scan parece estar atascada(generalmente se muestra como un conteo de carga parcial que no cambia durante varios minutos), la causa es casi siempre una de cuatro condiciones de configuración o sistema en el lado de iOS. La siguiente lista de verificación las cubre en orden de frecuencia.

### 1. iCloud Drive no está habilitado para Paper Scan

Dos interruptores independientes deben estar activados. Si alguno está desactivado, Paper Scan pone en cola cargas que iOS rechaza silenciosamente, dejando la barra de estado fija en el conteo inicial.

- **Ajustes de iOS → [tu nombre] → iCloud → Mostrar todo → Paper Scan** debe estar activado.
- **Ajustes de iOS → Paper Scan → iCloud Drive** debe estar activado.

El segundo interruptor es el que se omite con más frecuencia. Las dos configuraciones están relacionadas pero son distintas; ambas deben estar habilitadas para que las cargas continúen.

### 2. iOS está limitando la sincronización en segundo plano

iOS limita la actividad de iCloud en segundo plano en dos condiciones: el modo de bajo consumo está activado(desactívelo en Ajustes de iOS → Batería), o el almacenamiento del iPhone está casi lleno(iOS requiere aproximadamente 500 MB de espacio libre para que las cargas en segundo plano continúen; libere espacio en Ajustes de iOS → General → Almacenamiento del iPhone). iOS no muestra una advertencia de "almacenamiento lleno" en este contexto; las cargas simplemente se detienen.

### 3. La cola de carga es grande

Paper Scan procesa las cargas secuencialmente. Si se ha acumulado un gran retraso, por ejemplo, después de un período sin conexión, la cola necesita tiempo para despejarse. Como estimación aproximada, espere aproximadamente 50 páginas por hora en Wi-Fi doméstico estándar, más rápido en conexiones fuertes y más lento en cellular.

Para determinar si la cola está "lenta pero progresando" o "realmente atascada", deje la aplicación en segundo plano durante 30 a 60 minutos y verifique la barra de estado. Si el conteo ha avanzado, la sincronización está funcionando. Si el conteo no ha cambiado, una de las otras condiciones se aplica.

### 4. El estado de la cuenta de iCloud está corrupto

Esto es raro pero puede ocurrir después de cambios de ID de Apple, ciclos de cierre y apertura de sesión, o restauración desde una copia de seguridad. Síntomas: la barra de estado está atascada y ninguno de los pasos anteriores lo ha resuelto.

Dos pasos de escalación: apague y encienda iCloud Drive(Ajustes de iOS → [tu nombre] → iCloud → apagar iCloud Drive, espere 30 segundos, vuelva a encenderlo), o cierre sesión en iCloud y vuelva a iniciar sesión(Ajustes de iOS → [tu nombre] → Cerrar sesión, luego vuelva a iniciar sesión). La segunda acción es drástica pero restablece la conexión de iCloud de extremo a extremo. Si la cola permanece atascada en el mismo conteo después de ambos pasos, el problema probablemente esté en el lado de iCloud: la página de estado del sistema de Apple en support.apple.com muestra si iCloud Drive está experimentando actualmente una interrupción.

### Cuándo escalar al soporte

En la mayoría de los casos, la causa está en el lado de iOS. Paper Scan puede estar en falla cuando el conteo de la barra de estado no ha cambiado durante más de una hora, otras aplicaciones que usan iCloud en el mismo dispositivo se están sincronizando normalmente, los pasos de configuración anteriores se han aplicado y la aplicación se ha reiniciado, y los mismos documentos están marcados como pendientes de carga en múltiples lanzamientos de aplicaciones sin progreso. Cuando se apliquen estas condiciones, envíe un informe de error a través de **Ajustes → Enviar comentarios** en la aplicación. El informe incluye automáticamente el registro de actividad de sincronización reciente, eliminando la necesidad de describir el problema en detalle.

Varias funciones en Paper Scan existen específicamente para abordar escenarios de carga atascada: la barra de estado muestra tanto el conteo actual como una marca de tiempo separada de la última actividad, un documento que falla al cargar tres veces consecutivas se marca con un icono de advertencia, y las cargas en segundo plano se pausan limpiamente cuando el modo de bajo consumo está habilitado y se reanudan cuando se deshabilita en lugar de descartar silenciosamente los elementos en cola.
