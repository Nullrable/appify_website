---
title: "Rodar ou espelhar: quando usar cada um"
description: "Quando usar rotação de 90°, de 180°, espelho horizontal e vertical, e como a marca de rotação EXIF afeta o resultado final."
date: 2026-09-07
lang: pt
slug: rotate-vs-flip
---

## Quatro operações básicas

O Image Converter oferece quatro operações básicas de rotação e espelho:

- **Rodar 90° para a esquerda**: transforma uma imagem vertical em horizontal
- **Rodar 90° para a direita**: transforma uma imagem horizontal em vertical
- **180°**: inverte completamente a imagem
- **Espelho horizontal**: espelho esquerda-direita
- **Espelho vertical**: espelho cima-baixo

Parece simples, mas muita gente não sabe qual aplicar em cada caso.

## Rotação: incrementos de 90°

### Rotação de 90°

A rotação de 90° é a operação mais habitual e aplica-se nestes casos:

- **Captura de um vídeo gravado na horizontal no telemóvel**: a orientação não coincide e é preciso rodar
- **Documento digitalizado com orientação invertida**: o scanner foi colocado ao contrário e o ficheiro sai invertido
- **Combinar fotos com orientações diferentes**: unifica-se a orientação antes de as juntar

Rodar 90° é uma operação sem perdas: os píxeis são reordenados, mas não se perde informação.

### Rotação de 180°

Duas rotações de 90° ou uma rotação direta de 180°, aplicável nestes casos:

- **Imagem completamente invertida**: por exemplo, uma foto virada 180°
- **Combinar várias imagens quando uma está invertida**: unifica-se a orientação

A rotação de 180° também é uma operação sem perdas.

## Espelho: horizontal e vertical

### Espelho horizontal (espelho esquerda-direita)

- **Correção do espelho no selfie**: alguns telemóveis aplicam espelho automático no selfie e a direção que o utilizador vê não coincide com a real
- **Correção de texto refletido**: capturas através de um espelho ou reflexos em superfícies refletoras
- **Efeitos de design**: composições em espelho ou pré-visualização simétrica de um design

### Espelho vertical (espelho cima-baixo)

- **Efeito de negativo**: simula o negativo de um filme tradicional
- **Composição em espelho**: pré-visualização do reflexo na água
- **Necessidades concretas de design**: pré-visualização simétrica vertical de cartazes ou packaging

## A rotação EXIF: a armadilha mais comum

Muitos telemóveis (sobretudo o iPhone) ao fotografar **apenas gravam a marca de rotação nos metadados, em vez de rodar realmente os píxeis**.

Isto significa que:

- Na galeria vê-se com a orientação correta
- Nalgumas aplicações abre com orientação errada
- Nalgumas plataformas é carregado com orientação errada

O Image Converter lê a orientação EXIF (Orientation tag) e, antes de exportar, **roda realmente os píxeis**, de modo que a imagem guardada fique com a orientação correta em qualquer lado.

## Rodar ou espelhar: guia por cenário

| Fenómeno | Operação | Motivo |
|---|---|---|
| Captura de vídeo horizontal que aparece vertical | Rodar 90° | A orientação do vídeo não coincide com a de visualização |
| Selfie com esquerda e direita invertidas | Espelho horizontal | O telemóvel aplicou espelho automaticamente |
| Documento digitalizado com orientação invertida | Rodar 90° | O scanner foi colocado ao contrário |
| Texto refletido num espelho | Espelho horizontal | A imagem foi gerada por reflexão |
| Foto completamente invertida | Rodar 180° | O telemóvel foi segurado ao contrário ao fotografar |
| Reflexo na água invertido de cima para baixo | Espelho vertical | Simular o efeito do reflexo |

Se for apenas a marca EXIF, **não é preciso fazer nada**: o Image Converter trata-a automaticamente ao converter.

