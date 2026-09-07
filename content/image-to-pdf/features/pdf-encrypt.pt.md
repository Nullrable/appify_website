---
title: "Criptografia de PDF"
description: "Instruções de uso do recurso de criptografia do Image to PDF: defina senha de abertura e senha de proprietário, controle permissões de impressão, cópia e modificação, adote a criptografia AES-256 por padrão."
date: 2026-09-07
lang: pt
slug: pdf-encrypt
---

## Criptografia de PDF

Adicione um cadeado de senha ao PDF. Antes de enviar contratos, digitalizações de documentos de identidade e materiais financeiros por e-mail ou ferramentas de chat, criptografe primeiro para garantir que apenas as pessoas com a senha possam abrir.

## Dois tipos de senhas, cada uma com sua função

- **Senha de usuário (senha de abertura)**: depois de definida, qualquer pessoa que abrir este PDF precisa inserir essa senha — esta é a primeira porta do arquivo;
- **Senha de proprietário (opcional)**: definida separadamente da senha de usuário; aqueles que possuem a senha de proprietário podem modificar a configuração de permissões do arquivo.

## Controle preciso de permissões

Ao ativar a criptografia, você também pode controlar quais operações são permitidas para este PDF:

- **Permitir impressão** (ativado por padrão): se este arquivo pode ser impresso;
- **Permitir cópia** (desativado por padrão): se o texto ou as imagens contidas podem ser copiados;
- **Permitir modificação** (desativado por padrão): se o conteúdo do arquivo pode ser editado.

Por exemplo, ao enviar um报价单 para fora, você pode ativar impressão, desativar cópia e modificação — conveniente para a outra parte revisar e reduz o risco de uso direto do conteúdo.

## Padrão de criptografia AES

A criptografia usa **AES-256** por padrão, e também pode ser alternada para AES-128 para melhor compatibilidade. A criptografia é feita localmente no dispositivo; o conteúdo do PDF não será enviado para nenhum servidor.
