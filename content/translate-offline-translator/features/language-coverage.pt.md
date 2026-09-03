---
title: "19 idiomas: cobertura ML Kit, seletor e deteção automática"
description: "A tradução no dispositivo ML Kit suporta 19 idiomas. O seletor inclui pesquisa, usados recentemente e uma opção de deteção automática para a fonte."
date: 2026-09-03
lang: pt
slug: language-coverage
icon: globe
---

A aplicação traduz entre 19 idiomas no dispositivo via Google ML Kit. Lista completa: árabe, chinês (simplificado), checo, neerlandês, inglês, francês, alemão, croata, húngaro, italiano, japonês, coreano, polaco, português, romeno, russo, eslovaco, esloveno e espanhol. Novos idiomas são adicionados conforme o ML Kit publica modelos no dispositivo para eles.

## Seletor de idioma

O seletor é o ponto de entrada único para escolher os idiomas de origem e destino, acessível a partir da barra de idioma no topo da página da câmara ou da página de tradução de texto.

- **Pesquisa.** Escreva no campo de pesquisa para filtrar por nome em inglês ou código de idioma. A lista atualiza-se à medida que escreve.
- **Usados recentemente.** A secção superior mostra os idiomas que utilizou nas últimas traduções. A seleção move-os automaticamente para o topo.
- **Deteção automática (apenas fonte).** Aparece como a primeira opção no seletor de fonte. Selecioná-la faz com que a aplicação adivinhe o idioma fonte por captura (ver abaixo).
- **Todos os idiomas.** Abaixo da secção de usados recentemente está a lista completa dos 19 idiomas suportados com as respetivas bandeiras.

Os seletores de fonte e destino podem ser abertos independentemente. Escolher uma fonte que seja igual ao destino destaca isto no seletor para evitar uma tradução acidental de si para si.

## Deteção automática para a fonte

Quando a fonte está definida como Deteção automática, a aplicação precisa de escolher um idioma fonte ML Kit específico por tradução. São utilizadas duas estratégias:

- **Para capturas de fotos.** As pistas de idioma por bloco do motor OCR são agregadas; o idioma maioritário entre blocos torna-se a fonte ML Kit. Páginas de um único idioma resolvem-se de forma limpa; páginas de escritas mistas voltam a um valor predefinido.
- **Para tradução de texto.** Uma heurística de nível de classe de caracteres em Dart conta os caracteres por classe de escrita: caracteres Han → chinês simplificado, kana → japonês, hangul → coreano, latim → inglês, cirílico → romeno, escrita árabe → árabe, etc. Entrada vazia ou só com espaços é definida por predefinição como inglês.

A deteção automática nunca falha silenciosamente. A página tem sempre um idioma fonte ML Kit específico quando a tradução é executada.

## Porquê 19 e não mais

A contagem é limitada pelo que o ML Kit publica como modelos no dispositivo. Idiomas fora desta lista não podem ser traduzidos no dispositivo com o ML Kit. A lista é curated: cada entrada tem um modelo transferível de 10–50 MB. O seletor exclui idiomas que o ML Kit não suporta, mesmo que sejam códigos BCP 47 válidos.

## i18n da interface

A própria interface da aplicação (menus, configurações, mensagens de erro) está traduzida em 10 idiomas: árabe, inglês, alemão, coreano, francês, japonês, russo, espanhol, vietnamita e chinês (simplificado). Os idiomas de tradução são um superconjunto do conjunto i18n para vários pares comuns (en ↔ ja, en ↔ zh, en ↔ es, en ↔ fr).
