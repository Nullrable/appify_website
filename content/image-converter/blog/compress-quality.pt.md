---
title: "Como escolher a qualidade de compressão: comparativa dos níveis 10–90"
description: "Comparação do efeito real dos 9 níveis predefinidos (10/20/30/40/50/60/70/80/90) e do cursor livre 1–99, e que nível usar em cada caso."
date: 2026-09-07
lang: pt
slug: compress-quality
---

## Porquê existem tantos níveis

A compressão de imagens é uma operação com perdas: quanto mais detalhe se descarta, mais pequeno é o ficheiro e pior a qualidade. A questão é "quanto é razoável descartar": os critérios para partilhar em redes sociais e para impressão fotográfica são completamente diferentes. O Image Converter oferece 9 níveis predefinidos de 10 a 90, mais um cursor livre 1–99, cobrindo desde a compressão extrema até ao arquivo de alta qualidade.

## Efeito real dos 9 níveis predefinidos

### 10–30: compressão extrema

- **Tamanho**: 5–15% do original
- **Qualidade**: perda visível a olho nu, adequada para capturas só de texto ou blocos de cor
- **Cenários típicos**: stickers de WeChat, capturas longas só de texto, partilha pontual

Exemplo: uma foto de 5 MB comprimida no nível 10 pode ficar em 200–400 KB. Mas os detalhes de rostos e paisagens ficam esbatidos.

### 40–60: uso diário para partilhar

- **Tamanho**: 15–30% do original
- **Qualidade**: a perda nota-se com atenção, impercetível numa visualização normal
- **Cenários típicos**: partilha em redes sociais e em chats

**O nível 60 é o ponto ideal para a maioria dos casos**: a perda de qualidade é quase impercetível e o tamanho reduz-se bastante.

### 70–80: níveis recomendados de uso geral

- **Tamanho**: 30–50% do original
- **Qualidade**: praticamente impossível distinguir a diferença do original a olho nu
- **Cenários típicos**: quando é preciso manter boa qualidade e ao mesmo tempo controlar o tamanho

O nível 70 é adequado para partilha profissional; o nível 80 é ideal como pré-processamento antes de arquivar fotos importantes.

### 90: praticamente sem perdas

- **Tamanho**: 60–80% do original
- **Qualidade**: praticamente igual ao original
- **Cenários típicos**: material de arquivo e pré-processamento antes de imprimir

Acima de 90 o aumento de qualidade já não se nota e, além disso, um JPG de 100 ocupa mais do que um de 90.

## Para que serve o cursor livre 1–99

Os 9 níveis predefinidos cobrem 90% dos casos, mas por vezes é preciso um controlo mais fino:

- **65**: um pouco melhor que 60, um pouco mais leve que 70
- **75**: um pouco melhor que 70, um pouco mais leve que 80
- **85**: um pouco melhor que 80 e ainda controlável
- **50 / 55**: para encontrar um ponto intermédio mais preciso entre 40 e 60

## Decida o nível comparando em tempo real

Depois de selecionar uma imagem, a aplicação comprime-a de imediato com a qualidade atual e mostra:

- **Tamanho original** vs **tamanho comprimido** (KB)
- **Taxa de compressão** (percentagem)
- Atualização em tempo real: ao mover o cursor verá o resultado instantaneamente

Não escolha o nível por suposição; **compare com os seus olhos** e escolha o mais adequado.

## Níveis recomendados por tipo de conteúdo

| Tipo de conteúdo | Nível recomendado | Motivo |
|---|---|---|
| Captura só de texto | 30–50 | As bordas do texto exigem nitidez, mas o fundo é simples |
| Foto normal | 60–75 | Equilíbrio entre qualidade e tamanho |
| Retrato | 75–85 | A textura da pele não suporta compressões baixas |
| Foto de paisagem | 60–80 | Há muitas transições de cor; a partir de 60 não aparecem blocos |
| Logótipo / design | Usar PNG em vez disso | Vetores ou blocos de cor não devem ir em JPG |
| Captura de gravação de ecrã | 40–60 | Muito texto e ícones; com qualidade baixa ficam desfocados |

