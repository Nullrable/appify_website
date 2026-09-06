---
title: "Limpeza de fotos e privacidade: o que fica no seu dispositivo"
description: "Uma biblioteca de fotos é o conjunto de dados mais pessoal do seu telefone. Uma decomposição honesta do que o CleanPhoto lê, nunca lê, o que sai do seu dispositivo — e o que não sai."
date: 2026-09-06
lang: pt
slug: photo-privacy
---

## Limpeza de fotos e privacidade: o que fica no seu dispositivo

Dar a um app acesso às suas fotos é entregar o conjunto de dados mais pessoal do seu telefone: sua família, sua casa, seus documentos, seus últimos dez anos. Esse acesso é necessário para qualquer limpador de fotos funcionar — e é exatamente por isso que a pergunta "o que o app faz com isso?" merece uma resposta concreta, não um slogan. Esta é a do CleanPhoto.

### O que o app lê

As digitalizações funcionam a partir dos metadados da sua biblioteca: timestamps de captura, dimensões de imagem, nomes de álbuns, títulos e caminhos de arquivo, mais tamanhos de arquivo carregados para ordenar itens por tamanho dentro de um grupo. No iOS, a detecção de capturas lê o álbum dedicado. No Android, ela checa nomes de álbuns e, quando preciso, títulos e caminhos de arquivo das imagens em busca de padrões de nomenclatura de capturas. Esse é o inventário completo.

### O que o app nunca lê

Nenhuma digitalização analisa o conteúdo dos pixels. A regra das duplicatas é dimensões mais timestamp; a das fotos semelhantes, o momento da captura; a das capturas, álbuns e nomes de arquivo. Não há classificação de conteúdo por IA, nem detecção de rostos, nem análise de localização, nem "nota de qualidade da foto" — não porque sejam difíceis, mas porque nenhuma é necessária, e cada uma significaria ler o conteúdo real das suas fotos.

### O que sai do seu dispositivo

As suas fotos, não. A digitalização e a revisão não enviam nenhuma foto, miniatura ou metadado, e não exigem conta. O que usa a rede é o encanamento comum do app: na versão grátis, os anúncios vêm de uma rede de publicidade (Google AdMob); se você escolhe o Pro, a assinatura é processada pela loja de apps, com o RevenueCat gerenciando o entitlement. Esses serviços recebem os dados padrão deles — como em qualquer app que mostra anúncios ou vende assinaturas — mas nunca as suas fotos ou resultados de digitalização.

### Como a exclusão funciona

O app não pode apagar nada em silêncio. Cada exclusão passa pela sua confirmação explícita e roda pela biblioteca de fotos do sistema — o mesmo caminho protegido de quando você apaga uma foto você mesmo. No iOS vale a permissão do sistema da Apple para apagar fotos: o próprio sistema pede que você autorize as exclusões.

### Permissões, em lista

Acesso à biblioteca de fotos: necessário para digitalizar e mostrar grupos. No iOS você verá também o aviso de permissão de rastreamento (ATT) que as redes de publicidade exigem para servir anúncios relevantes — você pode recusar e o app funciona igual, só sem anúncios personalizados. Essa é a lista completa.

### O ponto

Limpeza de fotos não exige nuvem, nem conta, nem análise de conteúdo. Exige metadados, regras transparentes e a sua confirmação. É só isso que o CleanPhoto usa — e se um limpador pedir mais que isso, vale a pena perguntar para quê.
