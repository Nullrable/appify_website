---
title: "Rotação e espelho"
description: "Rotação em incrementos de 90°, espelhamento horizontal e vertical, e correção automática da marca de rotação EXIF antes de exportar, para que o ficheiro guardado fique correto em qualquer lado."
date: 2026-09-07
lang: pt
slug: rotate
---

## Rotação e espelho

Fotos tortas, digitalizações de documentos com a orientação errada, capturas que precisam de espelho: em todos estes casos precisa de rodar ou espelhar a imagem. O Image Converter oferece funções básicas de rotação e espelho com utilização intuitiva.

## Rotação: incrementos de 90°

A aplicação permite rodar imagens em incrementos de 90°:

- **Rodar 90° para a esquerda**: transforma uma foto vertical em horizontal, ou corrige fotos mal etiquetadas após uma captura na horizontal
- **Rodar 90° para a direita**: a operação inversa
- **180°**: duas rotações de 90° seguidas

Cada rotação reescreve a imagem, para que o ficheiro exportado fique na orientação correta em qualquer dispositivo.

## Espelho: horizontal e vertical

Além de rodar, a aplicação suporta espelhamento:

- **Espelho horizontal**: espelho esquerda-direita, útil para selfies e texto refletido
- **Espelho vertical**: espelho cima-baixo, útil para efeito de negativo ou composição em espelho

## Gestão automática da rotação EXIF

Alguns telemóveis (especialmente o iPhone) apenas gravam a marca de rotação nos metadados da fotografia, em vez de rodar realmente os píxeis. Nessas fotos, em algumas aplicações "parece certa mas exporta-se torta".

O Image Converter lê a orientação EXIF (Orientation tag), corrige os píxeis antes de exportar, e o ficheiro guardado abre na orientação correta em qualquer lado, sem depender do leitor de imagens reconhecer os metadados.

