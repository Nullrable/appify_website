---
title: "Como o CleanPhoto digitaliza sua biblioteca sem enviar uma única foto"
description: "Uma olhada dentro dos três detectores no dispositivo — duplicatas exatas, fotos semelhantes e capturas de tela — e as regras simples que usam, para você saber exatamente o que acontece ao apertar Digitalizar."
date: 2026-09-06
lang: pt
slug: how-scan-works
---

## Como o CleanPhoto digitaliza sua biblioteca sem enviar uma única foto

A maioria dos limpadores de foto pede confiança. O CleanPhoto tenta ganhá-la com transparência: cada digitalização roda no seu dispositivo, trabalha com os metadados da biblioteca e segue regras simples o bastante para caber em alguns parágrafos. Eis exatamente o que acontece quando você aperta Digitalizar.

### Três detectores, três perguntas

O CleanPhoto roda três digitalizações, cada uma respondendo a uma pergunta diferente. Duplicatas exatas perguntam "essa foto foi salva duas vezes?" Fotos semelhantes perguntam "foi uma sequência ou uma retomada rápida?" Capturas de tela perguntam "essa imagem é só temporária?" Você pode rodá-las em qualquer ordem, e cada uma apresenta os resultados como grupos para revisar.

### Regra um: mesmo tamanho, mesmo segundo

O detector de duplicatas constrói uma chave para cada foto a partir da largura, da altura e do segundo de captura. Fotos com a mesma chave caem num grupo. Uma foto salva de novo, importada ou nascida de um conflito de sincronização na nuvem carrega dimensões e timestamp da original, então as duas cópias se encontram no mesmo grupo. Duas fotos diferentes com dimensões idênticas no mesmo segundo é raríssimo — por isso essa regra acha cópias reais sem falsos positivos.

### Regra dois: dentro de dez segundos

O detector de fotos semelhantes ordena a biblioteca por hora de captura e percorre a linha do tempo. Enquanto cada foto for tirada dentro de 10 segundos da anterior, ela entra no mesmo grupo; assim que o intervalo passa de 10 segundos, a corrente se fecha. Isso bate com o modo como sequências e retomadas acontecem — uma série rápida, uma pausa, depois outra coisa. Grupos de uma foto só são descartados.

### Regra três: álbum, título, caminho

O detector de capturas funciona diferente por plataforma. No iOS ele lê diretamente o álbum de Capturas de tela do sistema. No Android, onde o armazenamento varia por fabricante, ele checa primeiro os nomes dos álbuns e, sem álbum de capturas, inspeciona o título e o caminho de arquivo de cada imagem em busca dos padrões de nomenclatura dos dispositivos. Os resultados ficam agrupados por dia, o mais recente primeiro.

### Tamanhos de arquivo, carregados antes de você revisar

Antes de qualquer tela de revisão abrir, o CleanPhoto pré-carrega o tamanho de arquivo de cada foto. Num grupo, o arquivo maior quase sempre é a cópia que manteve mais detalhe, então os itens são ordenados por tamanho e o melhor candidato fica no topo. Esse único sinal transforma "qual dessas oito é a melhor?" em "essa está boa?".

### O que nunca acontece

Nenhuma digitalização lê o conteúdo dos pixels para análise, nenhuma foto ou miniatura sai do seu dispositivo, e nenhuma conta é necessária. Exclusões só acontecem após sua confirmação explícita e passam pela biblioteca de fotos do sistema — o app nunca apaga nada sozinho. A internet é usada para só duas coisas: mostrar anúncios na versão grátis e gerenciar a assinatura Pro.
