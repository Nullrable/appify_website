---
title: "Como funciona a tradução offline no seu iPhone"
description: "Um percurso completo de como a aplicação conclui uma tradução sem carregar um único byte de texto-fonte para um servidor."
date: 2026-09-03
lang: pt
slug: how-offline-translation-works
---

## Como funciona a tradução offline no seu iPhone

O pipeline de tradução da aplicação é executado inteiramente no dispositivo. Nenhuma foto, nenhum resultado de OCR e nenhum pedido de tradução sai do iPhone. Este artigo explica o que «no dispositivo» realmente significa, onde vivem os modelos e quais os compromissos da execução local da tradução.

## As peças que correm no dispositivo

Há três trabalhos independentes que acontecem no telefone para uma tradução por câmara:

1. **OCR.** Um pacote `vision_text_recognition` forkado executa o reconhecimento de texto localmente. Suporta escritas latinas, chinesas (simplificada e tradicional), japonesas e coreanas. Cada bloco de texto reconhecido traz a sua própria caixa delimitadora e o texto detetado.
2. **Tradução.** O motor de tradução no dispositivo do Google ML Kit pega na saída do OCR e produz texto traduzido. O motor é empacotado como um modelo linguístico transferível por par de idiomas; a aplicação transfere modelos sob pedido e guarda-os em cache no disco.
3. **Renderização.** A página de resultados pinta cada bloco traduzido sobre a foto original, usando as caixas delimitadoras devolvidas pelo motor OCR. Não é necessária nenhuma ida e volta ao servidor para renderizar a sobreposição — a imagem, os blocos-fonte e as traduções vivem todos na memória do dispositivo.

## Porque é que isto importa

- **Privacidade.** As fotos de sinais de rua, contratos, formulários médicos e correspondência pessoal permanecem no dispositivo. Não há nenhum passo de carregamento em parte alguma do pipeline, por isso não há nada para vazar, intimar ou vender.
- **Latência.** Sem ida e volta de rede. O OCR de uma página típica captada pelo smartphone termina em muito menos de um segundo num dispositivo recente, e a tradução dos resultados por bloco transmite-se à medida que cada bloco termina.
- **Offline.** O pipeline corre num avião, numa cave, num túnel, num comboio, num país sem cobertura. O motor OCR e o motor de tradução são transferidos uma vez e reutilizados indefinidamente; nada é obtido por captura.
- **Custo.** A aplicação não paga por caráter a uma API de tradução, pelo que a funcionalidade não precisa de um paywall baseado na utilização ou de um limite mensal de carateres para se manter sustentável. O nível gratuito é o mesmo pipeline.

## Onde vivem os modelos

O ML Kit publica modelos de tradução no dispositivo para 19 idiomas. Cada modelo pesa cerca de 10–50 MB. Quando escolhe um idioma de origem ou destino, a aplicação transfere o modelo correspondente para a sandbox local da aplicação na primeira utilização. O modelo persiste entre os reinícios da aplicação; eliminá-lo recupera imediatamente o armazenamento.

A lista completa de idiomas suportados: árabe, chinês (simplificado), checo, neerlandês, inglês, francês, alemão, croata, húngaro, italiano, japonês, coreano, polaco, português, romeno, russo, eslovaco, esloveno e espanhol.

## O que é carregado (e o que não é)

- **Não carregado.** Fotos, texto OCR, texto traduzido, entradas de histórico, estado do modelo linguístico. Nada disto sai do dispositivo.
- **Carregado.** Relatórios de falhas anónimos e contadores agregados (por ex., «pedidos de tradução por dia»). Os relatórios de falhas não incluem conteúdo do utilizador; se algum relatório futuro incluir conteúdo, isso seria uma falha e deveria ser reportado.

## Compromissos da execução local

- **Lista de idiomas limitada.** Apenas os idiomas que o ML Kit publica como modelos no dispositivo são suportados. A lista é curated e tem atualmente 19 entradas.
- **Transferência de modelo necessária.** Uma primeira tradução para um par de idiomas déclenche uma transferência única. A página do gestor de modelos mostra o estado e permite-lhe pré-transferir para viagens offline.
- **Qualidade.** A qualidade da tradução no dispositivo é comparável à tradução na nuvem para textos curtos e bem formados. Parágrafos longos ou calão específico de domínio podem diferir de um motor na nuvem ajustado para esse domínio.
- **Computação.** O OCR e a tradução usam a CPU e o Neural Engine do telefone. O impacto na bateria para uma única captura é pequeno, mas mensurável para fluxos de trabalho em lote.

## O que isto significa para si

Se alguma vez hesitou em fotografar um documento sensível porque a foto acabaria num servidor de outra pessoa, essa hesitação é a razão pela qual a aplicação existe. Cada parte do pipeline corre localmente, e o modelo de dados da aplicação é desenhado em torno da premissa de que nada sai do dispositivo a menos que o utilizador escolha explicitamente partilhar um resultado.
