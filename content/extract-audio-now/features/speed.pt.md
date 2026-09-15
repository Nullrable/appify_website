---
title: "Alterar velocidade do vídeo - controle contínuo de 0,25× a 4×"
description: "Um único controle vai da câmera lenta de 0,25× à velocidade acelerada de 4×. Para tutoriais em câmera lenta ou demonstrações comprimidas. Exporta um novo vídeo, o original permanece intacto."
date: 2026-09-15
lang: pt
slug: speed
---

## Alterar velocidade do vídeo

Ritmo mal calibrado, a história desanda. Tutorial rápido demais, o público se perde. Demonstração lenta demais, todo mundo boceja. A ferramenta de velocidade oferece um único controle, contínuo, de 0,25× a 4×. Arraste devagar até chegar no tempo que combina.

### Câmera lenta

Entre 0,25× e 1×, ideal para explicar um gesto em câmera lenta. Numa aula online, um movimento de mão aparece só com 0,5× para o público enxergar o detalhe. Num vídeo de esporte, um lance decisivo a 0,25×, cada fibra fica visível.

### Velocidade acelerada

Entre 1× e 4×, ótimo para comprimir esperas ou pular trechos irrelevantes. Um timelapse de dez minutos, acelerado a 4×, fica bem mais impactante. Numa demonstração, os momentos chatos passam voando.

### Como usar

Escolha um clipe, surge um controle deslizante circular. Arraste até a posição desejada — o multiplicador atual aparece no controle. Não convenceu? Solte e arraste de novo. Confirme e exporte; o vídeo original fica intacto.

### E o áudio?

A velocidade muda imagem e som juntos. Quando a imagem fica mais lenta, o som também fica (a voz soa lenta, o tom desce). Quando a imagem acelera, o som acelera (a voz fica comprimida, o tom sobe). Esse é o comportamento padrão do filtro atempo do ffmpeg: imagem e áudio mudam em sincronia, o tom acompanha o multiplicador. Se você quer alterar só a imagem sem mexer no som, use primeiro a ferramenta de velocidade para gerar o vídeo, depois o extrator de áudio para guardar a faixa sonora original a partir do vídeo fonte, e combine os dois num app de terceiros.
