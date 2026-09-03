---
title: "Exportação de PDF multipágina com proteção opcional por senha"
description: "Exportação de PDF multipágina com proteção opcional por senha"
date: 2026-09-02
lang: pt
slug: merge-and-encrypt
---

A exportação PDF do Paper Scan foi projetada para o caso em que várias páginas escaneadas precisam ser combinadas em um único arquivo e entregues pela folha de compartilhamento padrão do sistema. Suporta fusão em lote, proteção opcional por senha e nomeação, tudo no dispositivo.

### Fluxo padrão de exportação

1. **Seleção múltipla na lista de Documentos.** Pressione longamente um documento para entrar no modo de seleção e toque nos demais. Há um atalho "selecionar tudo na pasta" para lotes no mesmo local.
2. **Toque no botão Compartilhar.** A folha de compartilhamento do sistema abre. A exportação PDF do Paper Scan aparece entre os destinos.
3. **Configure as opções.** Ative a fusão se combinar várias páginas, insira uma senha se necessário e nomeie o arquivo opcionalmente. Toque em Exportar.
4. **Aguarde o processamento.** Em dispositivos recentes, um lote de 50 páginas com dois filtros geralmente termina em menos de 5 segundos. Um lote de 300 páginas leva 15–30 segundos. A folha de exportação mostra um indicador de progresso; o app permanece responsivo.
5. **Compartilhe.** Quando o arquivo estiver pronto, a folha de compartilhamento padrão aparece. O arquivo pode ser mandado por e-mail, AirDrop, Drive, Slack ou qualquer aplicativo que aceite PDF.

### Casos de uso comuns

- **Encaminhar material de reunião.** Combine 50–80 páginas de contratos e anexos assinados em um único PDF para revisão jurídica.
- **Arquivar recibos de despesas.** Combine os recibos de um mês em um PDF para contabilidade.
- **Compartilhar pacotes de pesquisa.** Compile vários documentos de referência em um arquivo para colegas.
- **Arquivar projetos.** Agrupe todos os documentos de um projeto concluído em uma única entrega.

### Definir uma senha

A folha de exportação contém um único campo de senha acompanhado de um campo "confirmar senha" para verificação. A exportação só prossegue quando ambas as entradas coincidem; entradas não coincidentes são rejeitadas antes do processamento.

Deixar o campo de senha em branco gera um PDF padrão sem restrições. Definir uma senha faz com que os destinatários precisem inseri-la antes de abrir qualquer página. Recomenda-se proteção por senha para documentos com dados pessoais: contratos, prontuários médicos, demonstrações financeiras.

Orientação prática: deixe em branco a menos que a proteção seja explicitamente necessária. Remover uma senha de um PDF depois é difícil, enquanto um PDF sem proteção pode ser reexportado com senha se necessário.

### Quando mesclar, quando dividir

Um único PDF grande nem sempre é a saída certa. Divida melhor quando: a memória dos dispositivos destinatários é limitada, destinatários diferentes precisam de partes diferentes do lote, ou são necessárias senhas diferentes. Cada arquivo exportado tem seu próprio campo de senha.

Paper Scan exporta a seleção como está. Não há fusão forçada; a saída reflete o que o usuário escolheu.

### Desempenho para lotes grandes

300+ páginas geralmente levam 15–30 segundos; a barra de progresso mostra o estado. Escaneamentos com filtros pesados (por exemplo, cor mágica em um recibo desbotado) levam cerca de duas vezes mais que escaneamentos limpos. A criptografia não torna a exportação perceptivelmente mais lenta em dispositivos modernos (o gargalo é a codificação de imagem). Uma exportação criptografada grande aquece o dispositivo e consome alguns pontos percentuais da bateria, o que é aceitável para uso ocasional.
