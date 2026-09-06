---
title: "Detecção de duplicatas exatas"
description: "Como o CleanPhoto agrupa fotos com dimensões idênticas capturadas no mesmo segundo, e por que essa regra local encontra cópias reais sem falsos positivos."
date: 2026-09-06
lang: pt
slug: duplicates
---

## Detecção de duplicatas exatas

Duplicatas exatas são as fotos mais fáceis de apagar e as mais fáceis de deixar passar. O CleanPhoto as encontra com uma regra simples e transparente que roda inteiramente no seu dispositivo: fotos com dimensões de pixel idênticas e capturadas exatamente no mesmo segundo pertencem ao mesmo grupo.

### Como o agrupamento funciona

Durante uma digitalização, o CleanPhoto percorre sua biblioteca de fotos e constrói uma chave para cada foto a partir da largura, da altura e do segundo de captura. Fotos com a mesma chave são colocadas em um grupo. Uma foto salva duas vezes — por um novo salvamento, uma importação de outro dispositivo ou um conflito de sincronização na nuvem — carrega as mesmas dimensões e timestamp da original, então ambas as cópias caem no mesmo grupo, sem mais nada.

### Revisando um grupo

Cada grupo mostra todas as cópias junto com o tamanho do arquivo, para você ver de relance qual cópia é o original de maior qualidade. Marque as cópias que quer remover, confirme, e as fotos são apagadas pela biblioteca de fotos do sistema. As fotos que você guarda não são tocadas.

### Por que dimensões e tempo em vez de análise de conteúdo

Cruzar dimensões e segundo de captura é rápido, previsível e privado. Não gera falsos positivos entre fotos diferentes: duas fotos distintas salvas com dimensões idênticas no mesmo segundo é extremamente raro. E como nenhum conteúdo de imagem precisa ser analisado ou comparado, a digitalização nem lê dados de pixel — funciona apenas com os metadados da biblioteca.

### Tudo fica no seu dispositivo

A detecção de duplicatas roda localmente no seu telefone. Nenhuma foto, nenhuma miniatura e nenhum metadado jamais sai do seu dispositivo, e nenhuma conta é necessária.
