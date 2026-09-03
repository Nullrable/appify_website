---
title: "Sobreposição por blocos: traduções renderizadas no seu lugar na foto"
description: "A página de resultados pinta cada bloco de texto traduzido sobre o seu retângulo fonte, preservando o layout original."
date: 2026-09-03
lang: pt
slug: block-overlay
icon: layers
---

A página de resultados renderiza as traduções sobre a foto original, uma sobreposição por bloco OCR. A tradução de cada bloco aparece no retângulo exato onde o motor OCR detetou o texto fonte. A sobreposição suporta um controlo deslizante de transparência para que os utilizadores possam comparar o original e a tradução lado a lado sem sair da página.

## Como funciona a sobreposição

1. **Tradução por bloco.** Cada TextBlock detetado é enviado para o ML Kit como uma tarefa de tradução independente. As traduções fluem para a sobreposição à medida que são concluídas; o utilizador vê os blocos «tornarem-se» traduzidos na ordem em que o motor os termina.
2. **Posicionamento por retângulo.** O texto traduzido é quebrado e posicionado para caber no retângulo fonte. Se um bloco for estreito, a tradução passa a várias linhas e pode transbordar ligeiramente o retângulo fonte; o motor prefere legibilidade em vez de contenção estrita.
3. **Toque para focar.** Tocar num bloco traduzido abre uma folha inferior que desliza para o mesmo bloco na vista «Tradução completa», para que os utilizadores possam ler traduções mais longas sem ampliar a foto.
4. **Transparência ajustável.** Um controlo deslizante controla a opacidade da camada de sobreposição. Deslize para totalmente transparente para ver a foto original, totalmente opaco para ler as traduções.

## Anatomia da página de resultados

- **Barra superior.** Um botão de fechar. Sem outros controlos — a página de resultados é deliberadamente minimal.
- **Área principal.** A foto original em ecrã inteiro, com a camada de sobreposição renderizada por cima. InteractiveViewer permite zoom e deslocamento para inspecionar texto pequeno.
- **Folha inferior.** Três estados: recolhido (predefinição), médio (cerca de metade do ecrã), expandido (maior parte do ecrã). O estado recolhido mostra uma pega pequena e um resumo; médio mostra as traduções por bloco como cartões; expandido mostra todas as traduções de bloco em largura total.
- **Dois separadores na folha.** Um separador «Blocks» mostra as traduções agrupadas por bloco OCR, e um separador «Full» mostra a tradução completa do parágrafo joined.

## Porquê a tradução por bloco

- **Escritas mistas.** Uma página com títulos em inglês e legendas em japonês beneficia de pistas de idioma fonte por bloco. A localização e classe de escrita do bloco informam o motor sobre qual modelo fonte usar.
- **Isolamento de falhas.** A falha de tradução de um único bloco não bloqueia o resto da página. A sobreposição marca blocos falhados com um pequeno emblema de aviso para que os utilizadores saibam quais precisam de atenção manual.
- **Preservação do layout.** Os utilizadores que leem a fonte podem localizar a tradução correspondente a olho — útil para menus, placas e etiquetas onde a relação espacial importa.

## Comportamento de edição

A sobreposição é renderizada por cima da foto, não embebida. Guardar no histórico armazena tanto a foto original como o registo de tradução por bloco. Abrir uma entrada guardada reproduz a sobreposição exatamente; a edição da foto não é suportada.
