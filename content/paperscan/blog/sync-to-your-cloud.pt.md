---
title: "Sincronização na nuvem: espelhe sua biblioteca para seu próprio Drive ou iCloud"
description: "Sincronização na nuvem: espelhe sua biblioteca para seu próprio Drive ou iCloud"
date: 2026-09-02
lang: pt
slug: sync-to-your-cloud
---

A sincronização na nuvem do Paper Scan espelha a biblioteca de documentos para uma pasta do Google Drive ou iCloud controlada pelo usuário. O telefone continua sendo o local principal para todas as digitalizações; a nuvem serve como backup que o usuário possui e pode acessar independentemente. A sincronização na nuvem é um recurso Pro.

### O que o recurso faz

Quando ativada, a sincronização na nuvem carrega as digitalizações para o armazenamento na nuvem do próprio usuário à medida que são salvas. Novas digitalizações são carregadas em segundo plano. As digitalizações existentes são carregadas durante a execução inicial de sincronização.

Os bytes viajam diretamente entre o telefone e o provedor de nuvem. O Paper Scan não opera um servidor de retransmissão e nenhuma cópia das digitalizações é mantida na infraestrutura do Paper Scan.

### Casos de uso

- **Substituição de dispositivo.** Mude para um novo telefone, instale o Paper Scan, faça login no provedor de nuvem e restaure a biblioteca do espelho da nuvem. Nenhuma transferência por cabo ou ferramenta de backup de terceiros é necessária.
- **Perda de dispositivo.** Se o telefone for perdido ou danificado, as digitalizações são preservadas no espelho da nuvem e a biblioteca pode ser restaurada em um dispositivo substituto.
- **Navegação entre dispositivos.** Abra a pasta da nuvem em qualquer navegador para visualizar as digitalizações organizadas pela estrutura de pastas configurada no telefone. Os arquivos podem ser compartilhados, anexados a e-mails ou transferidos para outros aplicativos diretamente da pasta da nuvem.
- **Backup fora do local.** Mantenha uma cópia independente da biblioteca de documentos para redundância.

### Configuração

1. Abra **Settings → Cloud** no Paper Scan.
2. Selecione Google Drive ou iCloud. O provedor pode ser alterado posteriormente; ambos os provedores usam o mesmo mecanismo de sincronização.
3. Faça login na conta da nuvem. O Paper Scan solicita as permissões mínimas necessárias: acesso apenas à sua própria pasta, não à conta completa do Drive ou iCloud.
4. Selecione quais pastas locais espelhar. A biblioteca inteira é espelhada por padrão; pastas específicas podem ser excluídas se certas digitalizações devem permanecer apenas no dispositivo.
5. Toque em **Start Sync**. A primeira execução carrega a biblioteca existente; as digitalizações subsequentes são carregadas automaticamente à medida que são salvas.

Para desativar a sincronização na nuvem, desligue o recurso na mesma tela de Configurações. O Paper Scan não exclui arquivos da nuvem quando a sincronização é desativada. A cópia da nuvem permanece no local até que o usuário opte por removê-la.

### Escopo de permissões

O Paper Scan solicita o escopo de permissão necessário para ler e escrever em sua própria pasta dentro do Google Drive ou iCloud. Não recebe visibilidade sobre outros arquivos no armazenamento na nuvem do usuário, nem obtém tokens que permitiriam acesso a esses arquivos. Para verificar, revise a lista de aplicativos conectados nas configurações da conta Google ou Apple: o Paper Scan aparece com acesso limitado à pasta de aplicativo designada, não à conta completa.

### Restaurar

Restaurar é uma operação separada da sincronização. É iniciada manualmente quando o usuário deseja reconstruir a biblioteca local a partir da cópia da nuvem.

1. Instale o Paper Scan no novo dispositivo e faça login.
2. Abra **Settings → Cloud → Restore**.
3. Selecione o provedor e o destino.
4. Aguarde a conclusão da restauração. Uma biblioteca de algumas centenas de digitalizações normalmente é concluída em alguns minutos; uma biblioteca de vários milhares leva mais tempo. A barra de progresso reflete o progresso real.

Restaurar é a única operação em que o aplicativo recupera arquivos da nuvem. Não é executada automaticamente ou em segundo plano.

### Trocando provedores e desativando a sincronização

Você pode alternar entre Google Drive e iCloud desativando o provedor atual, ativando o novo e fazendo login: a próxima sincronização começa do zero no novo lado. Os arquivos espelhados anteriormente no provedor antigo permanecem lá até que o usuário os remova. Desativar a sincronização interrompe os novos uploads, mas não remove os arquivos já carregados; a biblioteca local não é afetada. Desativar e reativar a sincronização retoma de onde parou, e as digitalizações adicionadas durante o período desativado são carregadas na próxima execução de sincronização.

O Paper Scan funciona totalmente sem sincronização na nuvem. Digitalização, OCR, pastas, tags e exportação de PDF operam de forma idêntica com ou sem sincronização ativada.
