---
title: "OCR no dispositivo: texto pesquisável de cada página digitalizada"
description: "OCR no dispositivo: texto pesquisável de cada página digitalizada"
date: 2026-09-02
lang: pt
slug: on-device-ocr
---

OCR (reconhecimento óptico de caracteres) converte uma página digitalizada em texto que pode ser selecionado, copiado e pesquisado. O Paper Scan executa OCR inteiramente no dispositivo usando os kits ML da Apple e Google, portanto nenhum conteúdo digitalizado é transmitido para servidores externos para reconhecimento. As páginas reconhecidas são indexadas na biblioteca local e se tornam pesquisáveis no momento em que são salvas.

### O que o OCR desbloqueia

Depois que uma página é reconhecida:

- **Copiar texto da digitalização.** Pressione e segure qualquer palavra para abrir uma sobreposição de seleção cobrindo a página inteira. O texto selecionado pode ser colado em qualquer outro aplicativo.
- **Pesquisar dentro de digitalizações.** A barra de pesquisa no topo da lista de Documentos consulta o texto reconhecido de cada página, não apenas títulos e tags. Números de telefone, nomes, números de fatura e endereços podem ser localizados em toda a biblioteca.
- **Citar e referenciar.** Recibos digitalizados, contratos, notas manuscritas e capturas de quadro branco se tornam texto citável que pode ser referenciado posteriormente.

### Por que o processamento no dispositivo importa

- **Privacidade.** O conteúdo digitalizado nunca sai do dispositivo para reconhecimento. Isso é relevante para faturas, contratos, formulários médicos e qualquer documento contendo dados pessoais.
- **Latência.** Sem ida e volta de rede. Em iPhones recentes e dispositivos Android topo de linha, o OCR para uma página padrão normalmente é concluído em menos de um segundo.
- **Disponibilidade offline.** O OCR funciona em aviões, porões e em regiões sem cobertura de rede. Nenhuma conectividade é necessária.

A precisão é comparável aos serviços OCR baseados em servidor; a diferença é onde o cálculo é executado.

### Melhores práticas para reconhecimento preciso

A precisão do OCR depende principalmente da qualidade da entrada. Três fatores, em ordem de importância:

1. **Iluminação.** Luz indireta e uniforme de uma janela tem melhor desempenho do que um único holofote no teto. Sombras cruzando a página são a causa mais comum de caracteres lidos incorretamente.
2. **Foco.** Se o foco automático selecionar o assunto errado, toque no centro do texto antes da captura. Uma digitalização borrada raramente é uma digitalização utilizável.
3. **Seleção de filtro.** Preto e branco dá o texto mais limpo para formulários impressos. Cor mágica é recomendada quando a tinta desbotou ou o papel amareleceu. Automático trata da maioria dos casos cotidianos.
4. **Páginas planas.** Páginas que se curvam em direção à lombada perdem caracteres perto do canal. Pressione a página plana com a outra mão sempre que possível.
5. **Dica de idioma.** Defina o idioma do OCR explicitamente para páginas de um único idioma. Páginas de escrita mista funcionam em uma única passagem sem dica.

### Limitações de precisão

O OCR tem bom desempenho em texto impresso (95%+ de precisão), mas é menos confiável para escrita cursiva manuscrita, fontes muito pequenas, fontes decorativas estilizadas, reflexos de revistas brilhantes e recibos antigos onde a tinta desbotou fisicamente. A imagem original permanece disponível em todos os casos: se o OCR falhar em uma página crítica, a própria digitalização ainda pode ser lida.

O nível gratuito inclui uma cota diária de OCR suficiente para recibos cotidianos, cartões de visita e capítulos de livros ocasionais. O Pro remove o limite diário e adiciona a capacidade de executar OCR em uma pasta inteira em uma única operação.

O motor no dispositivo suporta escritas latinas (inglês, francês, alemão, espanhol, português, italiano e outras), chinês (simplificado e tradicional), japonês, coreano e a maioria das escritas europeias. Páginas de escrita mista são tratadas em uma única passagem de reconhecimento.
