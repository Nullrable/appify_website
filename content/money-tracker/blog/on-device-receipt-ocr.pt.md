---
title: OCR de Recibos no Dispositivo - A Foto Não Sai do Seu Telemóvel
description: Toque no pequeno cartão de câmara acima do campo de valor, fotografe um recibo e o Money Tracker preenche o valor, a data e o comerciante por si — tudo processado localmente, nunca carregado.
date: 2026-09-10
lang: pt
slug: on-device-receipt-ocr
---

Acima do campo de valor no formulário de transação está um pequeno cartão de câmara. Toque, fotografe um recibo e três campos ficam pré-preenchidos: o total, a data e o nome do comerciante.

O motor de OCR corre no seu telemóvel. A imagem do recibo é processada na sandbox da app e nunca é enviada para um serviço remoto, pelo que números de cartão, detalhes do comerciante e com quem estava a fazer compras ficam entre si e a sua galeria.

O OCR preenche campos, não os escreve. Cada valor pré-preenchido é editável antes de guardar — se o motor leu mal um total borrado, corrige-o. O mesmo fluxo existe no formulário de cartão bancário: toque aí no cartão de OCR para ler o número do cartão a partir de uma foto. Em ambos os casos, a foto é descartada da memória após o reconhecimento; o Money Tracker guarda o texto reconhecido, não os píxeis.
