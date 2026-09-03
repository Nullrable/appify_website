---
title: "Modelos de tradução: descarregue uma vez, mantenha para sempre"
description: "Gira os 19 modelos de idiomas do ML Kit a partir de uma página dedicada. Descarregue uma vez, elimine para recuperar espaço; o modelo sobrevive offline."
date: 2026-09-03
lang: pt
slug: model-manager
icon: download
---

Cada par de idiomas requer que os modelos de origem e destino estejam no dispositivo antes de a tradução poder ser executada. Os modelos são descarregados uma vez, persistem nos reinícios da app e são reutilizados para cada tradução desse par. A página de descarregamento de modelos lista todos os 19 idiomas suportados com o seu estado de descarregamento e permite-lhe descarregar ou eliminar cada um.

## Porquê uma página dedicada

O ML Kit não descarrega modelos automaticamente — cada par de idiomas requer um descarregamento explícito da sua origem e destino. A página de descarregamento de modelos expõe este estado e permite ao utilizador geri-lo sem aprofundar no armazenamento da plataforma.

Para a maioria dos utilizadores, o fluxo de trabalho é invisível: escolha um idioma de origem e destino, a app descarrega ambos os modelos sob pedido na primeira vez que traduz, e os modelos permanecem no dispositivo para futuras execuções. A página dedicada é para utilizadores que querem pré-descarregar para viagens offline, eliminar idiomas que já não usam, ou ver o que está a consumir armazenamento.

## Estados do modelo por idioma

- **Não descarregado.** É mostrado um botão Descarregar. Toque para iniciar o descarregamento.
- **A descarregar.** É mostrado um spinner indeterminado. O ML Kit não expõe callbacks de progresso, apenas a conclusão; o spinner resolve-se para Descarregado ou Falhou.
- **Descarregado.** É mostrado um emblema com um botão Eliminar. Toque para remover o modelo e recuperar armazenamento.
- **Falhou.** Um botão de tentar novamente substitui Descarregar. Causas comuns: sem rede, celular bloqueado, pouco espaço em disco. Tente novamente uma vez resolvida a causa subjacente.

## Fila de descarregamento sequencial

Vários pedidos de descarregamento em sucessão rápida são colocados em fila, não paralelizados. O plugin nativo do iOS não lida com chamadas `manageModel` concorrentes de forma limpa: o segundo pedido cancela o primeiro. A app serializa os descarregamentos através de um único Future em cadeia para que os pedidos concorrentes se resolvam um após o outro. A UI mostra apenas o descarregamento ativo no estado indeterminado; os pedidos em fila esperam a sua vez.

## Tempos limite e sondagem de descarregamento

Se um callback de descarregamento for perdido (observado no iOS em condições de rede fraca), o Future de descarregamento pode ficar pendurado. A app protege-se com um tempo limite de 30 segundos; se o tempo limite disparar, a app sonda diretamente o disco via `isModelDownloaded` para confirmar se o modelo realmente aterrou antes de reportar sucesso ou falha.

## Custo de armazenamento

Cada modelo ML Kit ocupa aproximadamente 10–50 MB no disco. Descarregar os 19 idiomas consome aproximadamente 300–600 MB. Os modelos para origem e destino da mesma tradução estão separados; um modelo pode servir como origem ou destino consoante o papel que o utilizador selecionou.

Eliminar o modelo recupera o espaço. Não há limpeza automática. Desinstalar a app remove todos os modelos descarregados como parte da desinstalação da plataforma.
