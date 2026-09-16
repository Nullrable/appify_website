---
title: "Política de privacidade - Extract Audio Now"
description: "Como o Extract Audio Now lida com seus dados. Processamento no aparelho, extração de áudio local, anúncios do AdMob na versão gratuita, gestão de assinatura pelo RevenueCat e seus direitos segundo o GDPR e a CCPA."
date: 2026-09-15
lang: pt
slug: index
---

**Extract Audio Now** («**nós**») é um aplicativo de processamento de vídeo e áudio no iPhone cujo princípio de design é: seus vídeos e áudios ficam no seu aparelho. Esta política de privacidade descreve quais dados o app processa, por quê e quais opções você tem.

Ao usar o app, você concorda com as práticas descritas nesta política.

**Última atualização: 15 de setembro de 2026**

## 1. Resumo

- **Processamento no aparelho.** Todo o processamento de vídeo (conversão, compressão, extração de áudio, união, recorte, velocidade, ajuste e GIF) acontece localmente no seu dispositivo. Os arquivos de vídeo, áudio e resultados intermediários **nunca são enviados** para nenhum servidor nosso.
- **Sem conta.** O app não exige cadastro. Não coletamos seu nome, e-mail, telefone nem qualquer informação de contato.
- **Sem análise de conteúdo.** O app não analisa o conteúdo em pixels do vídeo, não faz classificação por IA nem detecção de objetos ou cenas.
- **Publicidade (versão gratuita, não personalizada).** A versão gratuita exibe um banner do Google AdMob (IAB Medium Rectangle 300×250) em três telas: Início, Histórico e Ajustes. O app **não solicita** a permissão do App Tracking Transparency e **não lê** o identificador de publicidade da Apple (IDFA); todos os anúncios são contextuais em tempo real.
- **Versão paga.** Quando você assina o Pro, a compra passa pelo App Store; o RevenueCat usa um identificador anônimo e seus recibos para validar a assinatura.

## 2. Dados que não coletamos

**Não** coletamos, transmitimos nem vendemos:

- Seus arquivos de vídeo ou áudio, nem qualquer miniatura dos mesmos.
- Metadados do vídeo (data de gravação, duração, localização) nem resultados intermediários do processamento.
- Seu nome, e-mail, telefone, endereço postal nem outras informações de contato.
- Localização precisa ou aproximada associada aos seus clipes.
- Seus contatos, calendário, índice da fototeca nem qualquer outro conteúdo pessoal.

## 3. Dados processados no seu aparelho

### 3.1 Extração de áudio

Separa a faixa de áudio do arquivo de vídeo, recodifica no formato escolhido (MP3, AAC, M4A, WAV, FLAC, OGG), grava por padrão na pasta sandbox do app e, ao terminar, mostra um diálogo "Save to Files" para guardar no app iOS Files. O processo lê apenas arquivos locais e não acessa nenhuma rede.

### 3.2 Conversão de formato de vídeo

Reempacota o vídeo em outro contêiner (mp4, mov, m4v, mkv, avi, flv, ts, mpg, mpeg, 3gp, 3g2). Os fluxos de vídeo e áudio ficam intactos, só a casca muda.

### 3.3 Compressão de vídeo

Recodifica o fluxo de vídeo conforme um nível predefinido (baixo/médio/alto) ou uma taxa personalizada, controlando o tamanho e preservando ao máximo os detalhes visíveis.

### 3.4 União, recorte, velocidade e ajuste

Lê os metadados da linha do tempo e produz um novo vídeo de acordo com os pontos de entrada, saída, ordem, multiplicador, proporção e ângulo de rotação definidos pelo usuário. O arquivo original não é tocado em momento algum; o resultado é gravado como novo arquivo no álbum.

### 3.5 Criar GIF

Gera uma animação GIF conforme o trecho e a taxa de quadros definidos pelo usuário e salva no álbum.

### 3.6 Histórico e rascunhos

Os parâmetros de cada tarefa (tipo de ferramenta, hora, caminho do arquivo, configurações) são gravados num banco local. Os rascunhos de recorte, velocidade e ajuste são salvos automaticamente enquanto você arrasta. Esses dados ficam inteiramente no seu aparelho; ao desinstalar o app, tudo é removido.

## 4. Dados coletados por terceiros

Os terceiros abaixo coletam dados ao prestar serviços para você. O uso que fazem dos dados é regido pelas próprias políticas de privacidade deles.

### 4.1 Google AdMob — apenas versão gratuita

A versão gratuita exibe banners do **Google AdMob** (IAB Medium Rectangle 300×250) em três telas: Início, Histórico e Ajustes. As tarefas rodam assim que você confirma, sem anúncio antes.

**Anúncios não são personalizados.** O app não chama a API do App Tracking Transparency e não lê o identificador de publicidade da Apple (IDFA). Todos os anúncios são exibidos segundo o contexto em tempo real, sem vinculação ao seu comportamento de uso do aparelho. O AdMob pode receber:

- **Informações do aparelho**, como modelo, versão do sistema, tamanho da tela, idioma e região.
- **Metadados de exibição de anúncios**, como ID da unidade, tipo de anúncio, e se você viu ou clicou.
- **Endereço IP**, para estimar a localização aproximada (normalmente país ou cidade) e prevenir fraudes.

Com a assinatura Pro, os anúncios somem e o AdMob deixa de receber dados do app.

Veja a [Política de privacidade do Google](https://policies.google.com/privacy) e as [Informações de privacidade do AdMob](https://support.google.com/admob/answer/6128543).

### 4.2 RevenueCat (gestão de assinatura)

Quando você assina o Pro, o app utiliza o **RevenueCat** para validar a assinatura e gerenciar seus direitos. O RevenueCat recebe:

- Um **identificador anônimo gerado aleatoriamente** (RevenueCat "App User ID").
- O recibo do App Store, para verificar a compra.
- Identificador do produto, preço, moeda e data da compra.
- Suas configurações regionais e a versão do app.

Veja a [Política de privacidade do RevenueCat](https://revenuecat.com/privacy).

### 4.3 Apple App Store

As compras são processadas pelo App Store da Apple. O tratamento dos dados de compra é regido pela [Política de privacidade da Apple](https://www.apple.com/legal/privacy/).

## 5. Permissões solicitadas pelo app

| Permissão | Motivo | Obrigatória? |
|---|---|---|
| **Acesso ao álbum** | Ler os vídeos a processar e gravar os vídeos ou áudios resultantes. | Sim, indispensável para processar. |
| **Acesso aos arquivos (app Files)** | Ler ou gravar arquivos no app Files. | Não — só é usada se você escolher o Files como fonte. |

O app **não solicita** permissão de câmera, microfone, contatos, localização ou rastreamento (ATT).

## 6. Privacidade infantil

O app é voltado ao público em geral, não a crianças menores de 13 anos (ou abaixo da idade mínima de consentimento digital da sua jurisdição). Não coletamos intencionalmente dados pessoais de crianças. Como o app não coleta dados pessoais de nenhum usuário, esse compromisso vale para todas as idades.

## 7. Transferências internacionais de dados

- Os **serviços do Google** (AdMob) podem processar dados fora do seu país. Detalhes na [Política de transferência de dados do Google](https://policies.google.com/privacy).
- O **RevenueCat** armazena os dados de validação de compra em sua infraestrutura nos Estados Unidos e na União Europeia. Veja a [Política de privacidade do RevenueCat](https://revenuecat.com/privacy).
- A **Apple** processa as compras do App Store por meio da sua infraestrutura global padrão.

O processamento local descrito na seção 3 **não sai** do seu aparelho e, por isso, não é afetado pelas regras de transferência internacional.

## 8. Seus direitos

### 8.1 GDPR (EEE e Reino Unido)

Se você está no Espaço Econômico Europeu ou no Reino Unido, tem o direito de acessar, corrigir, apagar, limitar ou se opor ao tratamento dos seus dados pessoais, à portabilidade dos dados, de retirar o consentimento a qualquer momento e de reclamar à autoridade local de proteção de dados.

Como o app não mantém perfis de usuário no servidor, a maior parte desses direitos já é atendida pelo próprio design:

- Seus vídeos e áudios nunca saem do aparelho; ao desinstalar o app, tudo desaparece.
- Os anúncios são sempre não personalizados (veja a seção 4.1); não são necessários controles adicionais.
- Para apagar a associação com suas compras, entre em contato e solicite a remoção de registros do RevenueCat ligados ao seu recibo.

### 8.2 CCPA / CPRA (Califórnia)

Os residentes da Califórnia têm o direito de saber quais informações pessoais foram coletadas, de apagá-las, de optar por não permitir a venda ou o compartilhamento, e de não sofrer discriminação por exercer esses direitos. O app **não vende** informações pessoais e **não compartilha** informações pessoais para publicidade comportamental entre contextos — todos os anúncios são não personalizados.

### 8.3 Outras jurisdições

Residentes de outras jurisdições (por exemplo, LGPD no Brasil, PIPA na Coreia, PIPEDA no Canadá) podem ter direitos semelhantes. Na medida permitida pela lei aplicável, estendemos essas proteções a todos os usuários, onde quer que estejam.

## 9. Retenção de dados

- **Arquivos de vídeo e áudio:** ficam apenas no seu aparelho. Como nenhum conteúdo é enviado para nós, não fazemos qualquer retenção.
- **Histórico e rascunhos:** ficam no banco local do aparelho e são apagados por completo ao desinstalar o app.
- **Compras:** são retidas pelo RevenueCat e pelo App Store conforme as políticas de retenção de cada um.
- **Dados de anúncios:** regidos pela política de retenção do AdMob do Google.

## 10. Segurança

O app se apoia na proteção de arquivos integrada do aparelho. Todo o processamento acontece localmente por meio das interfaces protegidas do álbum do sistema e do sistema de arquivos local. As comunicações de rede com terceiros usam HTTPS. Nenhum método de transmissão ou armazenamento garante 100 % de segurança, e não podemos garantir segurança absoluta.

## 11. Alterações nesta política

Podemos atualizar esta política de tempos em tempos. A data "**Última atualização**" no topo reflete a entrada em vigor da alteração mais recente. Em mudanças relevantes, avisaremos de forma razoável dentro do app ou na página do App Store.

## 12. Contato

Para dúvidas sobre esta política, fale conosco pelo **nhsoft.lsd@gmail.com**.
