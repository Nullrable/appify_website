---
title: "Tradução de texto vs tradução de foto: qual usar"
description: "Quando a fonte já é texto, pule o OCR. Quando a fonte é uma página impressa, a tradução de foto é mais rápida. Como escolher."
date: 2026-09-03
lang: pt
slug: text-vs-photo-translate
---

## Tradução de texto vs tradução de foto: qual usar

A aplicação tem dois pontos de entrada para tradução: a página da câmara (tradução de foto) e a página de tradução de texto. Partilham o mesmo estado de par de idiomas e o mesmo motor ML Kit, mas o pipeline difere num passo importante.

## A diferença numa frase

A tradução de foto executa OCR sobre uma imagem capturada e depois traduz o texto reconhecido. A tradução de texto salta completamente o OCR e alimenta a entrada diretamente no motor de tradução.

## Quando a tradução de texto é mais rápida

- **Fontes que já são texto.** E-mails, mensagens de chat, trechos web, parágrafos colados — qualquer coisa que exista como texto em vez de página impressa. Saltar o OCR remove um passo e elimina uma classe de erros OCR (caracteres mal lidos, quebras de linha partidas, layout desarrumado).
- **Texto longo e denso.** Fotografar um ecrã cheio de texto introduz ruído OCR. Colar o texto não.
- **Ditado.** A tecla de ditado do sistema permite-lhe ditar a entrada em vez de a escrever. A precisão do ditado é boa para fala clara num ambiente silencioso.
- **Câmara indisponível.** Se a câmara estiver a ser usada por outra aplicação, ou se a permissão da câmara foi negada, a tradução de texto continua a funcionar.

## Quando a tradução de foto é mais rápida

- **Páginas impressas.** Livros, menus, sinais, embalagens, instruções, cartazes. Existem como tinta em papel; a única forma de os colocar em texto é fotografá-los.
- **Autocolantes e etiquetas.** Uma fotografia de um autocolante ou etiqueta num produto pode ser traduzida no local sem a transcrever primeiro.
- **Ecrãs que não pode selecionar.** Se a fonte for renderizada como pixels — uma imagem num PDF, uma captura de ecrã de uma aplicação antiga, uma fotografia de um ecrã — não há texto para copiar. A tradução de foto é a única opção.
- **Sinais bilingues.** Capturar ambas as línguas numa única fotografia resolve frequentemente a dica de idioma por bloco que a deteção automática utiliza.

## Diferenças de precisão

Ambos os caminhos usam o mesmo motor ML Kit, por isso a tradução em si tem a mesma qualidade. A diferença está mais a montante: a tradução de foto pode introduzir ruído OCR que a tradução de texto não. Se o motor OCR ler mal um carácter, o motor de tradução não tem forma de recuperar o texto original.

Para texto que controla (a sua própria escrita, as suas próprias mensagens), cole-o. Para texto que vive em papel, fotografe-o.

## Partilha entre modos

As definições de idioma de origem e destino são partilhadas entre a página da câmara e a página de tradução de texto. Mudar idiomas num lugar aplica-se ao outro; ir e voltar não requer re-selecionar idiomas.

As traduções de texto não são guardadas automaticamente no histórico; vivem na região de resultado até tocar em Limpar ou navegar para fora. As traduções de câmara podem ser guardadas no histórico a partir da página de resultado.

## Uma regra prática

Se pode copiar o texto, copie-o. Se não, fotografe-o. O caminho de cópia é mais limpo porque o OCR é removido do ciclo.
