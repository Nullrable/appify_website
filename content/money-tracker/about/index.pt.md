---
title: Sobre o Money Tracker - Uma App de Finanças Privada e Local
description: O Money Tracker guarda cada conta, cada categoria e cada transação no seu telemóvel. Seis tipos de conta, OCR de recibos no dispositivo, teclado de valor de quatro funções, bloqueio por PIN ou biometria e cópia de segurança JSON, em 10 idiomas.
date: 2026-09-10
lang: pt
slug: index
---

O Money Tracker é uma app de finanças pessoais para iOS e Android, feita para quem quer um registo limpo e privado do que entra e do que sai. Tudo — contas, categorias, transações, estatísticas — vive no seu telemóvel. Não há um servidor a guardar os seus dados.

O ecrã inicial mostra o retrato do mês: entradas, saídas, saldo líquido sobre todas as suas contas. Por baixo, os mesmos dados leem-se como lista agrupada por dia, como grelha mensal ou como calendário em que cada data leva a sua etiqueta de entrada e saída.

## Seis tipos de conta, um único razão

Numerário, banco, cartão de crédito, carteira digital, investimento, poupança. Cada conta carrega o seu próprio saldo, a sua própria lista de transações e uma vista de detalhe com as entradas, saídas e últimos lançamentos do mês. Pode marcar qualquer conta como predefinida para novas transações; o formulário abre-a já selecionada.

Apagar uma conta não a destrói. A conta e tudo o que lhe está ligado passa para uma secção "Eliminadas", de onde um toque a restaura.

## Categorias, prontas e personalizadas

A app traz 8 categorias de despesa e 4 de receita, já localizadas para inglês, chinês simplificado e chinês tradicional. Acrescente quantas categorias personalizadas quiser, cada uma com a sua cor e ícone. As do sistema e as personalizadas vivem em secções separadas do gestor. Remover uma categoria personalizada que ainda tem transações ligadas pede confirmação antes; a eliminação é suave, pelo que um toque a mais é recuperável. As categorias são partilhadas entre contas, pelo que um lançamento "Comida" em numerário e um "Comida" no cartão de crédito continuam comparáveis nas estatísticas.

## OCR de recibos, no seu telemóvel

Acima do campo de valor está um pequeno cartão de câmara. Fotografe um recibo em papel e o Money Tracker pré-preenche o total, a data e um nome de comerciante provisório. O reconhecimento corre no seu telemóvel, pelo que a foto não vai a lado nenhum. Cada valor pré-preenchido é editável antes de guardar. Um segundo fluxo de OCR vive no formulário de edição de conta, para digitalizar um cartão bancário ou número de conta.

## Introdução de valor estilo calculadora

Tocar no campo de valor abre um teclado de quatro funções com pré-visualização em tempo real da expressão. Escreva `12.50 + 8.40`, veja `20.90` de imediato e envie para o formulário. Aritmética longa, que seria tediosa no teclado do telemóvel, torna-se um único movimento contínuo.

## Estatísticas que se ajustam à forma como gasta

O separador Estatísticas associa um gráfico circular de categorias a uma linha de tendência de 30 dias e outra de 12 meses. Filtre por despesa, receita ou lucro. Filtre por intervalo de contas. Toque numa fatia ou linha para abrir as transações por trás — paginadas, com pesquisa por palavra-chave na nota e eliminação por deslize. Cada conta tem vista de lista e vista mensal, com uma vista anual sobreposta para históricos longos. Gráficos, drill-downs e listas por conta lêem os mesmos dados, pelo que nunca se contradizem.

## Lembrete diário, opt-in

Se quer um empurrão para registar o que gastou hoje, subscreva o dispositivo num tópico de lembrete diário. A hora é configurável nas Definições (21:00 por padrão). Os lembretes ficam desligados até os ligar, e desinscrevem-se no instante em que os desliga. As suas preferências de lembrete sincronizam-se através de um único registo anónimo, portanto a configuração segue-o para um novo dispositivo. Nenhum dado de transações, contas ou categorias sai do telemóvel — só sai esse registo de definições.

## Cópia JSON, à sua maneira

O ecrã de exportação escreve um único ficheiro `money_tracker_<timestamp>.json` com toda a base de dados. Guarde-o através do seletor de pastas do sistema: iCloud Drive, Google Drive, Ficheiros, uma pen USB ou qualquer app de terceiros registada como Documents provider. A folha de partilha do sistema está mesmo ao lado: email, mensagens, notas, AirDrop, Nearby Share. JSON é texto simples — abra-o em qualquer editor para o inspecionar. A importação aceita o mesmo ficheiro: se uma entrada importada partilha um ID com uma existente, sobrescreve-a no lugar em vez de duplicar, pelo que as exportações mensais se fundem sem ruído.

## Bloqueio por PIN e biometria

Um PIN de 6 dígitos pode guardar a app a cada regresso ao primeiro plano. Defina-o nas Definições, escolha seis dígitos, e o PIN é pedido antes de qualquer coisa aparecer. Sobre o PIN assenta uma camada biométrica opcional — Face ID ou Touch ID no iOS, impressão digital (ou rosto) no Android. Se o prompt biométrico não conseguir funcionar, o sistema cai para o código do dispositivo, não para o PIN da app, pelo que a cadeia de confiança fica ancorada na plataforma.

## Só local, por conceção

Contas, categorias, transações, texto OCR, estatísticas — tudo vive numa base de dados local dentro do armazenamento privado da app. Desinstalar a app apaga tudo. As únicas duas chamadas de rede opcionais em toda a app são o push de lembrete e a sincronização das definições do lembrete; ambas vêm desligadas. Não há SDK de analytics, nem publicidade, nem seguimento.

## Idiomas e tema

Disponível em inglês, chinês simplificado, chinês tradicional, italiano, alemão, japonês, coreano, espanhol, português e francês. O tema segue o dispositivo por padrão; um toque e pode forçar claro ou escuro. O primeiro dia da semana (segunda ou domingo) também é configurável e afeta a forma como a grelha mensal e diária se renderizam.
