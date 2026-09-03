---
title: "Deteção automática de idioma: como a aplicação escolhe um idioma de origem"
description: "Quando o seletor de origem está em Deteção automática, a aplicação adivinha o idioma de origem por tradução. É assim que a adivinhação é feita."
date: 2026-09-03
lang: pt
slug: auto-detect-language
---

## Deteção automática de idioma: como a aplicação escolhe um idioma de origem

Deteção automática é a primeira opção no seletor de idioma de origem. Selecioná-la não significa que a aplicação não tenha opinião sobre a origem — significa que a aplicação escolherá um idioma de origem ML Kit específico por tradução, usando dicas de idioma por bloco OCR (para fotos) ou uma heurística de conjunto de caracteres na camada Dart (para texto).

## Porquê por tradução

O tradutor no dispositivo do ML Kit requer que um idioma de origem específico seja descarregado antes de a tradução poder ser executada. Deteção automática não pode significar «traduzir de qualquer idioma»; tem de se resolver para um dos 19 idiomas suportados por tradução. A aplicação efetua esta resolução automaticamente.

## Como funciona para fotos

Para capturas de câmara, o motor OCR emite uma dica de idioma por bloco para cada bloco reconhecido. As dicas são agregadas pela página; o idioma maioritário torna-se o idioma de origem ML Kit para essa tradução.

Páginas monolingues resolvem-se de forma limpa: uma página de legendas coreanas resolve-se para coreano, uma página de texto francês resolve-se para francês. Páginas com scripts mistos recorrem a um valor predefinido se nenhum idioma único dominar.

A tradução por bloco usa essas dicas de forma mais granular. Uma página com títulos em inglês e legendas em japonês pode ser traduzida com a origem apropriada por bloco, mesmo quando o idioma maioritário é pouco claro.

## Como funciona para texto

Para traduções de texto, a aplicação executa uma heurística na camada Dart que conta caracteres por classe de script:

- Caracteres Han → Chinês simplificado
- Kana → Japonês
- Hangul → Coreano
- Latino → Inglês
- Cirílico → Russo
- Arábico → Árabe

A entrada mista segue a classe de caracteres maioritária. Entrada vazia ou apenas com espaços tem como padrão inglês.

A heurística é rápida (uma única varredura linear sobre a entrada) e executa-se antes da chamada ML Kit. O idioma de origem escolhido é então usado para o pedido de tradução.

## Quando a deteção automática falha

- **Latim sem diacríticos.** Um excerto puramente latino de 10 caracteres pode ser inglês, francês, alemão, italiano, português, espanhol, neerlandês, polaco, checo ou vários outros. A heurística escolhe inglês como predefinição; se a origem não for inglês, a qualidade da tradução pode sofrer. Fixa manualmente o idioma de origem para excertos latinos curtos.
- **Cirílico sem especificidade.** O cirílico pode ser russo, ucraniano ou outro script eslavo. A aplicação escolhe russo.
- **Ambiguidade do script Han.** O chinês simplificado e tradicional partilham a maioria dos seus caracteres. Um excerto curto de caracteres Han não pode ser resolvido para um sem um contexto mais longo. A aplicação escolhe chinês simplificado.

Para estes casos, fixa manualmente o idioma de origem a partir do seletor.

## A deteção automática nunca é silenciosa

A página tem sempre um idioma de origem ML Kit específico quando a tradução é executada. Se a heurística devolver um valor predefinido errado, a tradução pode estar errada; se devolver o idioma certo, a tradução funciona. Não há modo em que a aplicação «falhe em escolher um idioma» — cai para um valor predefinido e traduz.

## Conselho prático

Para documentos longos e monolingues, a deteção automática funciona. Para excertos curtos ou páginas com scripts mistos, fixa manualmente o idioma de origem a partir do seletor. O seletor memoriza os teus idiomas recentes no topo, por isso a segunda utilização de um idioma é um único toque.
