---
title: "Cambio de velocidad del vídeo - deslizador continuo de 0,25× a 4×"
description: "Un único deslizador del 0,25× a cámara lenta hasta el 4× rápido. Para tutoriales pausados como para demos aceleradas. Exporta un vídeo nuevo, el original no se toca."
date: 2026-09-15
lang: es
slug: speed
---

## Cambio de velocidad del vídeo

Si el ritmo no encaja, el relato se descuadra. Tutorial demasiado rápido, el público se pierde. Demo demasiado lenta, todo el mundo bosteza. La herramienta de velocidad ofrece un único deslizador, continuo, de 0,25× a 4×. Arrastra despacio hasta dar con el tempo que te conviene.

### Cámara lenta

Entre 0,25× y 1×, perfecto para explicar un gesto a cámara lenta. En una clase online muestran un movimiento de mano, al 0,5× el público por fin ve el detalle. En un vídeo deportivo, un instante estelar a 0,25×, cada fibra se vuelve visible.

### Acelerado

Entre 1× y 4×, ideal para comprimir esperas o saltar partes irrelevantes. Un timelapse de diez minutos, acelerado a 4×, gana fuerza. En una demo, los momentos aburridos se sobrevuelan.

### Cómo se usa

Elige un clip y aparece un deslizador circular. Arrástralo a la posición que quieras — el multiplicador actual se muestra en el deslizador. ¿No convence? Suelta y vuelve a arrastrar. Tras confirmar, exporta; el vídeo original no se toca.

### ¿Qué pasa con el audio?

La velocidad cambia imagen y sonido a la vez. Si la imagen se ralentiza, el sonido se ralentiza también (la voz suena lenta, el tono baja). Si la imagen se acelera, el sonido se acelera (la voz suena comprimida, el tono sube). Es el comportamiento estándar del filtro atempo de ffmpeg: imagen y audio cambian juntos, el tono sigue al multiplicador. Si quieres cambiar solo la imagen y no el audio, pasa primero por la herramienta de velocidad para generar el vídeo, luego por el extractor de audio para guardar la pista original desde el vídeo fuente, y combínalas en una app de terceros.
