---
title: Acerca de Money Tracker - Una App de Finanzas Privada y Local
description: Money Tracker guarda cada cuenta, categoría y transacción en tu teléfono. Seis tipos de cuenta, OCR de recibos en el dispositivo, teclado de importe de cuatro funciones, bloqueo por PIN o biometría y copia de seguridad JSON, en 10 idiomas.
date: 2026-09-10
lang: es
slug: index
---

Money Tracker es una app de finanzas personales para iOS y Android, hecha para quien quiere un registro limpio y privado de lo que entra y lo que sale. Todo — cuentas, categorías, transacciones, estadísticas — vive en tu teléfono. No hay un servidor guardando tus datos.

La portada muestra el panorama del mes: ingresos, gastos y saldo neto entre todas tus cuentas. Debajo, los mismos datos se leen como lista agrupada por día, como cuadrícula mensual o como calendario donde cada fecha lleva su propia etiqueta de ingreso y gasto.

## Seis tipos de cuenta, un único libro

Efectivo, banco, tarjeta de crédito, monedero digital, inversión, ahorro. Cada cuenta lleva su propio saldo, su propia lista de transacciones y una vista de detalle con los ingresos, gastos y últimos asientos del mes. Marca una cuenta como predeterminada para nuevas transacciones; el formulario la abre ya seleccionada.

Borrar una cuenta no la destruye. La cuenta y todo lo adjunto pasan a una sección "Eliminadas", donde un toque lo restaura.

## Categorías, de serie y a medida

La app trae 8 categorías de gasto y 4 de ingreso, localizadas en inglés, chino simplificado y chino tradicional. Añade tantas categorías personalizadas como quieras, cada una con su color e icono. Las del sistema y las personalizadas viven en secciones separadas del gestor. Quitar una categoría personalizada que aún tiene transacciones pide confirmación antes; el borrado es lógico, así que un toque de más es recuperable. Las categorías se comparten entre cuentas, así que una entrada "Comida" en efectivo y otra "Comida" en la tarjeta siguen siendo comparables en estadísticas.

## OCR de recibos, en tu teléfono

Sobre el campo de importe hay una pequeña tarjeta de cámara. Fotografía un recibo en papel y Money Tracker pre-rellena el total, la fecha y un nombre tentativo de comercio. El reconocimiento corre en tu teléfono, así que la foto no va a ningún sitio. Cada valor pre-rellenado es editable antes de guardar. Un segundo flujo de OCR vive en el formulario de edición de cuenta, para escanear una tarjeta o número de cuenta bancaria.

## Entrada de importe estilo calculadora

Tocar el campo de importe abre un teclado de cuatro funciones con vista previa de la expresión en vivo. Escribe `12.50 + 8.40`, ves `20.90` al instante y lo envías al formulario. Aritmética larga que sería tediosa en un teclado de móvil se vuelve un único movimiento continuo.

## Estadísticas que se adaptan a cómo gastas

La pestaña Estadísticas une un gráfico de tarta de categorías con una línea de tendencia de 30 días y otra de 12 meses. Filtra por gasto, ingreso o beneficio. Filtra por rango de cuentas. Toca una porción o una fila para abrir las transacciones que hay detrás — paginadas, con búsqueda por palabra clave en la nota y borrado por deslizamiento. Cada cuenta tiene vista de lista y vista mensual, con una vista anual superpuesta para historiales largos. Gráficos, drill-downs y listas por cuenta leen de los mismos datos, así que nunca se contradicen.

## Recordatorio diario, opcional

Si quieres un empujón para registrar lo de hoy, suscribe el dispositivo a un tema de recordatorio diario. La hora es configurable en Ajustes (21:00 por defecto). Los recordatorios están apagados hasta que los enciendes, y se desuscriben al instante cuando los apagas. Tus preferencias de recordatorio se sincronizan a través de un único registro anónimo, así que la configuración te sigue en un dispositivo nuevo. Ningún dato de transacciones, cuentas o categorías sale del teléfono — solo sale ese registro de ajustes.

## Copia JSON, a tu manera

La pantalla de exportación escribe un único archivo `money_tracker_<timestamp>.json` con la base de datos completa. Guárdalo a través del selector de carpetas del sistema: iCloud Drive, Google Drive, Archivos, una memoria USB o cualquier app de terceros registrada como Documents provider. La hoja de compartir del sistema está justo al lado: correo, mensajería, notas, AirDrop, Nearby Share. JSON es texto plano: ábrelo en cualquier editor para inspeccionarlo. Importar acepta el mismo archivo: si una entrada importada comparte ID con una existente, la sobrescribe en sitio en lugar de duplicarla, así que las exportaciones mensuales se fusionan limpiamente.

## Bloqueo por PIN y biometría

Un PIN de 6 dígitos puede cerrar la app cada vez que vuelve al primer plano. Defínelo en Ajustes, elige seis dígitos, y el PIN se pregunta antes de mostrar cualquier cosa. Sobre el PIN se asienta una capa opcional de biometría: Face ID o Touch ID en iOS, huella (o cara) en Android. Si el prompt biométrico no puede funcionar, el sistema cae al código del dispositivo, no al PIN de la app, así que la cadena de confianza se queda en la plataforma.

## Solo local, por diseño

Cuentas, categorías, transacciones, texto OCR, estadísticas — todo vive en una base de datos local dentro del almacenamiento privado de la app. Desinstalar la app borra todo. Las únicas dos llamadas de red opcionales en toda la app son el push de recordatorio y la sincronización de ajustes del recordatorio; ambas vienen apagadas. No hay SDK de analítica, ni publicidad, ni seguimiento.

## Idiomas y tema

Disponible en inglés, chino simplificado, chino tradicional, italiano, alemán, japonés, coreano, español, portugués y francés. El tema sigue al dispositivo por defecto; un toque y puedes forzar claro u oscuro. El primer día de la semana (lunes o domingo) también es configurable y afecta al render de la cuadrícula mensual y diaria.
