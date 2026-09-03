---
title: "Solução de problemas de uploads do iCloud travados"
description: "Solução de problemas de uploads do iCloud travados"
date: 2026-09-02
lang: pt
slug: stuck-icloud-upload
---

Quando a sincronização do iCloud no Paper Scan parece travada(geralmente exibida como uma contagem de upload parcial que não muda ao longo de vários minutos), a causa é quase sempre uma das quatro condições de configuração ou sistema no lado do iOS. A lista de verificação a seguir cobre elas em ordem de frequência.

### 1. iCloud Drive não está ativado para Paper Scan

Duas alternâncias independentes devem estar ativadas. Se qualquer uma estiver desativada, o Paper Scan enfileira uploads que o iOS rejeita silenciosamente, deixando a barra de status presa na contagem inicial.

- **Ajustes do iOS → [seu nome] → iCloud → Mostrar Tudo → Paper Scan** deve estar ativado.
- **Ajustes do iOS → Paper Scan → iCloud Drive** deve estar ativado.

A segunda alternância é a mais frequentemente perdida. As duas configurações são relacionadas mas distintas; ambas devem ser ativadas para que os uploads continuem.

### 2. O iOS está limitando a sincronização em segundo plano

O iOS limita a atividade do iCloud em segundo plano em duas condições: o Modo de Baixo Consumo está ativado(desative-o em Ajustes do iOS → Bateria), ou o armazenamento do iPhone está quase cheio(o iOS requer aproximadamente 500 MB de espaço livre para que os uploads em segundo plano continuem; libere espaço em Ajustes do iOS → Geral → Armazenamento do iPhone). O iOS não exibe um aviso de "armazenamento cheio" neste contexto; os uploads simplesmente param.

### 3. A fila de upload é grande

O Paper Scan processa uploads sequencialmente. Se um grande acúmulo de pendências se acumulou, por exemplo após um período offline, a fila requer tempo para limpar. Como estimativa aproximada, espere aproximadamente 50 páginas por hora em Wi-Fi doméstico padrão, mais rápido em conexões fortes e mais lento em cellular.

Para determinar se a fila está "lenta mas progredindo" ou "realmente travada", deixe o aplicativo em segundo plano por 30 a 60 minutos e verifique a barra de status. Se a contagem avançou, a sincronização está funcionando. Se a contagem não mudou, uma das outras condições se aplica.

### 4. O estado da conta iCloud está corrompido

Isso é raro mas pode ocorrer após mudanças de ID Apple, ciclos de logout e login, ou restauração de backup. Sintomas: a barra de status está travada e nenhum dos passos acima resolveu.

Duas etapas de escalação: desligue e ligue o iCloud Drive(Ajustes do iOS → [seu nome] → iCloud → desligue o iCloud Drive, espere 30 segundos, ligue novamente), ou faça logout do iCloud e login novamente(Ajustes do iOS → [seu nome] → Logout, depois faça login novamente). A segunda ação é drástica mas redefine a conexão iCloud de ponta a ponta. Se a fila permanecer travada na mesma contagem após ambas as etapas, o problema provavelmente está no lado do iCloud: a página de status do sistema da Apple em support.apple.com mostra se o iCloud Drive está atualmente enfrentando uma interrupção.

### Quando escalar para o suporte

Na maioria dos casos, a causa está no lado do iOS. O Paper Scan pode estar com defeito quando a contagem da barra de status não mudou por mais de uma hora, outros aplicativos que usam iCloud no mesmo dispositivo estão sincronizando normalmente, as etapas de configuração acima foram aplicadas e o aplicativo foi reiniciado, e os mesmos documentos estão marcados como pendentes de upload em vários lançamentos do aplicativo sem progresso. Quando essas condições se aplicam, envie um relatório de bug através de **Ajustes → Enviar Feedback** no aplicativo. O relatório inclui automaticamente o log de atividade de sincronização recente, eliminando a necessidade de descrever o problema em detalhes.

Vários recursos no Paper Scan existem especificamente para lidar com cenários de upload travado: a barra de status exibe tanto a contagem atual quanto um carimbo de data/hora separado da última atividade, um documento que falha ao upload três vezes consecutivas é marcado com um ícone de aviso, e os uploads em segundo plano pausam de forma limpa quando o Modo de Baixo Consumo está ativado e retomam quando desativado, em vez de descartar silenciosamente os itens na fila.
