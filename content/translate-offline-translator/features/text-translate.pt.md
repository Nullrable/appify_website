---
title: "Tradução de texto: cole, digite, traduza"
description: "Uma página de tradução apenas de texto que partilha o mesmo estado de par de idiomas com a página da caméra."
date: 2026-09-03
lang: pt
slug: text-translate
icon: keyboard
---

A página de tradução de texto é uma entrada separada da página da câmara para os casos em que a fonte já é texto. Abra-a a partir da parte inferior da página da câmara e cole, digite ou dite um parágrafo; o mesmo motor ML Kit devolve uma tradução.

## Porquê uma página separada

O OCR da câmara está otimizado para imagens. Quando a fonte já é texto — um excerto de e-mail, uma mensagem de chat, um parágrafo colado — o passo de OCR é sobrecarga. A página de tradução de texto ignora o OCR por completo e alimenta a entrada diretamente ao tradutor ML Kit.

Também permite traduzir em lote copiando e colando um parágrafo mais longo em vez de o fotografar. Para texto denso sem uma página conveniente para fotografar, isto é mais rápido e mais preciso.

## Como funciona

- **Estado de idioma partilhado.** A página de texto lê e escreve o mesmo par de idiomas fonte/destino que a página da câmara. Escolher um idioma destino num lugar aplica-se ao outro; alternar entre eles não requer voltar a selecionar os idiomas.
- **Deteção automática para a fonte.** Se a fonte estiver definida como «Deteção automática», a aplicação executa uma heurística de nível de classe de caracteres em Dart sobre o texto de entrada para escolher entre os idiomas suportados pelo ML Kit. Latim puro por defeito para inglês; caracteres Han por defeito para chinês simplificado; escritas mistas seguem a classe de caracteres maioritária.
- **Tradução de passagem única.** Toda a entrada é enviada ao ML Kit numa única chamada. O resultado substitui a área de entrada sob o botão; limpe a entrada para traduzir novamente.
- **Manuseamento do teclado.** Tocar em Traduzir fecha o teclado no ecrã para que a área de resultado não fique escondida atrás dele.

## Quando usar

- **Parágrafos longos.** Digite ou cole texto com várias frases. Fotografar um ecrã cheio de texto introduz ruído de OCR; colar o texto não.
- **Excertos de chat.** Traduza uma mensagem curta de um amigo sem sair da conversa para abrir a câmara.
- **Ecrãs com texto.** Extraia texto de uma captura de ecrã através da partilha do sistema e cole-o na página de tradução de texto para uma tradução mais limpa do que o OCR.
- **Ditado por voz.** Use a tecla de ditado do sistema para ditar texto em vez de o digitar.

## Limites

- **Sem preservação de formatação.** Apenas texto simples. Markdown, negrito, ititáico e outras formasções são removidos.
- **Sem gravação automática no histórico.** Ao contrário das capturas da câmara, as traduções de texto não são gravadas automaticamente. O resultado permanece na área de resultado até tocar em Limpar ou navegar para fora.
