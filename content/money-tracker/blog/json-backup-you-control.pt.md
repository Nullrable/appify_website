---
title: Cópia de Segurança JSON Sob o Seu Controlo - Um Ficheiro que Pode Abrir
description: Exporte os dados do Money Tracker como um único ficheiro JSON — contas, categorias, transações — e guarde-o onde já guarda as suas cópias de segurança, ou envie-o diretamente pela folha de partilha do sistema.
date: 2026-09-10
lang: pt
slug: json-backup-you-control
---

O ecrã de exportação escreve um único ficheiro: `money_tracker_<timestamp>.json`, contendo cada conta (com tipo, instantâneo do saldo e metadados), cada categoria (do sistema e personalizadas) e cada transação (data, valor, conta, categoria, nota, tipo). Um ficheiro, a base de dados toda.

Você escolhe onde vai. O iOS abre o seletor de documentos, o Android abre o Storage Access Framework, portanto o ficheiro pode aterrar em iCloud Drive, Google Drive, uma pen USB ou qualquer app de terceiros registada como Documents provider. Nada o obriga a uma cloud específica.

Ao lado do seletor está a folha de partilha do sistema. Dali o ficheiro vai direto para email, app de mensagens, app de notas, AirDrop ou Nearby Share — de ponta a ponta pelo sistema, nunca pelo Money Tracker.

JSON é texto simples. Abra o ficheiro em qualquer editor e vê a estrutura: um objeto com os arrays `accounts`, `categories` e `transactions`, cada entrada um registo plano com campos nomeados. Sem blobs em base64, sem contentor cifrado, sem esquema preso à versão.

A importação aceita o mesmo ficheiro. Se uma entrada importada partilha um ID com uma existente, a importação sobrescreve no lugar em vez de duplicar — assim uma exportação recente sobre uma mais antiga só acrescenta as linhas verdadeiramente novas.
