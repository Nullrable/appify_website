---
title: "Os arquivos não saem do telefone: como o processamento local protege sua privacidade"
description: "Ferramentas de conversão online precisam fazer upload de arquivos; o processamento local no telefone não precisa. Usando o Image to PDF como exemplo, explique como o processamento local funciona, onde o histórico é armazenado e os limites de dados de anúncios e assinaturas."
date: 2026-09-07
lang: pt
slug: local-processing-privacy
---

## Quantos arquivos sensíveis você já fez upload?

Pense nas ferramentas de conversão online que você já usou: fotos de documentos de identidade, digitalizações de contratos, capturas de tela de extratos bancários — para transformá-los em PDF ou imagens, eles foram enviados para um servidor cujo nome você nunca ouviu. A maioria dos serviços afirma "excluir imediatamente após o processamento", mas você não pode verificar, e o ato de fazer upload já ocorreu.

## O que significa processamento local

Todos os recursos do Image to PDF — imagens para PDF, montagem, PDF para imagens, fusão, criptografia, descriptografia — são feitos no seu telefone. Mais especificamente:

- Imagens e arquivos PDF são lidos, processados e gerados apenas dentro do aplicativo, **sem passar por nenhum servidor**;
- As conversões são executadas no chip do dispositivo e podem ser totalmente realizadas mesmo offline;
- Os arquivos de saída são salvos no diretório local do aplicativo, e você decide para onde eles serão enviados pelo painel de compartilhamento do sistema.

Em outras palavras, "os arquivos não saem do telefone" não é um slogan, mas o resultado direto da arquitetura técnica — sem canal de upload, naturalmente não há upload.

## Onde o histórico é armazenado

Cada conversão é gravada no histórico do aplicativo, incluindo status da operação, duração, formatos de origem e saída, tamanho do arquivo. Esses registros são armazenados em um banco de dados local no dispositivo e só podem ser lidos nesse dispositivo. Limpar o cache ou desinstalar o aplicativo os exclui completamente, sem passar por nós — na verdade, nem conseguimos vê-los.

## Limites de dados de anúncios e assinaturas

O modelo de negócios deste aplicativo precisa ser esclarecido:

- **Anúncios**: usuários não assinantes verão anúncios rewarded do Google AdMob ao entrar nas páginas de recursos. O AdMob usa identificadores de publicidade de acordo com suas políticas para veicular anúncios; este é o limite entre nós e o AdMob — não temos seus arquivos e não coletamos intencionalmente seus dados pessoais por meio de anúncios;
- **Assinatura Pro**: o pagamento é processado pela Apple App Store, a verificação da assinatura é feita via RevenueCat. Não acessamos seu número de cartão ou informações de cobrança, e não mantemos comprovantes de pagamento;
- **Benefícios da assinatura**: o Pro remove os anúncios, permitindo o uso direto dos recursos sem assistir a vídeos rewarded.

## Sugestões para lidar com arquivos sensíveis

Mesmo com ferramentas de processamento local, os hábitos ainda são importantes:

1. **Transfira rapidamente as saídas importantes** — envie os resultados da conversão pelo painel de compartilhamento para "Arquivos", iCloud ou um disco na nuvem, não os deixe apenas no diretório do aplicativo;
2. **Criptografe antes do envio externo** — use a função de criptografia para definir uma senha de abertura para PDFs sensíveis, envie a senha e o arquivo por canais diferentes;
3. **Limpe regularmente** — exclua o histórico e os arquivos de saída desnecessários nas configurações, mantenha o dispositivo limpo.

A proteção da privacidade não depende de promessas, mas de arquitetura. Antes de converter um arquivo da próxima vez, pense: esse arquivo precisa sair do meu telefone?
