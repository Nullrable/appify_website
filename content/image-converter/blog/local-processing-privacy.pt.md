---
title: "Os ficheiros não saem do telemóvel: como o processamento local protege a sua privacidade"
description: "As ferramentas de conversão online precisam de carregar ficheiros; o processamento local no telemóvel, não. Tomando o Image Converter como exemplo, explicamos como funciona o processamento local, onde é guardado o histórico e os limites de dados entre publicidade e subscrição."
date: 2026-09-07
lang: pt
slug: local-processing-privacy
---

## Quantas imagens sensíveis já carregou?

Pense nas ferramentas de conversão online que já usou: fotos do cartão de cidadão, digitalizações de contratos, capturas private... para as converter para outro formato foram carregadas para um servidor de que nunca ouviu falar. A maioria dos serviços garante que "são apagadas após o processamento", mas não o pode verificar, e **o ato de as carregar já aconteceu**.

## O que significa processamento local

Todas as funções do Image Converter (conversão de formato, compressão, rotação, recorte, redimensionamento e combinação) são executadas no seu telemóvel. Em concreto:

- As imagens só são lidas, processadas e exportadas dentro da aplicação, **sem passar por qualquer servidor**;
- A conversão é executada no processador do dispositivo, **e todas as funções continuam disponíveis sem ligação**;
- Os ficheiros de saída são guardados no diretório local da aplicação e, através do painel de partilha do sistema, é você que decide para onde são enviados.

Por outras palavras, "os ficheiros não saem do telemóvel" não é um slogan, mas uma consequência direta da arquitetura: como não há canal de carregamento, nada é carregado.

## Onde é guardado o histórico

Cada conversão escreve um registo no histórico da aplicação, com o estado da operação, a duração, os formatos de origem e saída e o tamanho do ficheiro. Estes registos ficam guardados na base de dados local do dispositivo, **e só são legíveis nele**.

Ao limpar a cache ou desinstalar a aplicação são eliminados por completo, sem passar por nós; de facto, nem os conseguiríamos ver mesmo que quiséssemos.

## Limites de dados entre publicidade e subscrição

O modelo de negócio da aplicação é explicado com clareza:

- **Publicidade**: os utilizadores que não subscreveram Pro veem publicidade incentivada do Google AdMob ao entrarem nas páginas de funções. O AdMob utiliza, conforme a sua política, identificadores publicitários para servir anúncios; este é o limite entre o AdMob e nós: não temos acesso aos seus ficheiros nem recolhemos dados pessoais através da publicidade;
- **Subscrição Pro**: o pagamento é processado pela Apple App Store e a verificação da subscrição é feita pela RevenueCat. Não temos acesso ao número do seu cartão, dados de faturação nem conservamos comprovativos de pagamento;
- **Vantagens da subscrição**: Pro elimina a publicidade; ao entrar nas funções acede-se diretamente, sem ver vídeos incentivados.

## Recomendações para tratar ficheiros sensíveis

Mesmo com ferramentas de processamento local, os hábitos são importantes:

1. **Transfira atempadamente os resultados importantes**: envie os ficheiros convertidos a partir do painel de partilha para "Ficheiros", iCloud ou um serviço na nuvem; não os deixe apenas no diretório da aplicação;
2. **Recorte os metadados antes de partilhar**: se são fotos de documentos de identificação, convém primeiro convertê-las com o Image Converter para outro formato, removendo a informação EXIF original;
3. **Limpe periodicamente**: apague da configuração o histórico e os ficheiros de saída que já não precisa, para manter o dispositivo limpo.

A proteção da privacidade não depende de promessas, mas da arquitetura. Antes da próxima conversão de imagem, vale a pena perguntar: **esta imagem tem de sair do meu telemóvel?**

