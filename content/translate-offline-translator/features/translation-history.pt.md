---
title: "Histórico de traduções: apenas local, eliminável a qualquer momento"
description: "O histórico reside numa base de dados Drift no dispositivo. Nenhuma cópia é carregada; as entradas podem ser eliminadas individualmente ou em massa."
date: 2026-09-03
lang: pt
slug: translation-history
icon: history
---

Cada captura de câmara pode ser guardada no histórico de tradução local. Cada entrada armazena a foto original (comprimida), o idioma fonte detetado, o idioma destino, os blocos OCR e as traduções por bloco. Abrir uma entrada guardada reproduz a página de resultados no modo só de leitura.

## O que é armazenado

Cada registo de histórico contém:

- **Foto original** como miniatura JPEG, dimensionada para caber num bordo máximo. A foto em resolução completa é descartada após o dimensionamento para manter o armazenamento limitado.
- **Idioma fonte** detetado pelo OCR (ou definido manualmente).
- **Idioma destino** selecionado para a captura.
- **Blocos OCR** com as suas caixas delimitadoras, texto detetado e confiança.
- **Traduções** por bloco e a tradução completa do parágrafo joined.
- **Carimbo de data/hora de criação** para ordenação e exibição.

Nenhuma cópia da foto ou do texto traduzido é carregada para qualquer servidor que operamos. O histórico inteiro é armazenado numa base de dados SQLite no dispositivo gerida pelo Drift.

## Como o histórico é preenchido

- **Capturas de câmara.** Depois de o OCR + tradução estarem concluídos, a página de resultados oferece uma ação Guardar. Guardar armazena a entrada descrita acima.
- **Fotos importadas.** Mesmo fluxo: após a tradução, a página de resultados pode guardar a entrada no histórico.
- **Traduções de texto.** Não são guardadas automaticamente. As traduções de texto aparecem apenas na área de resultado da página de tradução de texto e desaparecem ao Limpar ou navegar. Use a câmara ou a importação se quiser um registo persistente.

## Navegar e eliminar

- **Vista de lista.** A página de histórico mostra as entradas mais recentes primeiro com a miniatura da foto, excerto fonte, excerto destino e carimbo de data/hora.
- **Toque para abrir.** Tocar numa linha abre a página de resultados no modo só de leitura. A sobreposição é reproduzida com as traduções guardadas; o ML Kit não é executado novamente.
- **Eliminar.** Cada linha tem um botão de eliminação. A eliminação é protegida por um diálogo de confirmação para evitar eliminações acidentais. A eliminação remove o registo e a miniatura da foto do dispositivo; nada é enviado para fora do dispositivo.
- **Estado vazio.** Quando o histórico está vazio, um marcador de posição explica como preenchê-lo.

## Privacidade

O histórico é um artefacto local. O modelo de privacidade da app:

- **Sem carregamentos.** O histórico nunca é carregado, sincronizado ou copiado para qualquer servidor.
- **Sem análises sobre o conteúdo do histórico.** Os relatórios de falhas e análises anónimas de utilização não incluem conteúdo do histórico, texto OCR ou texto traduzido.
- **A eliminação é permanente.** Eliminar uma entrada do histórico remove-a permanentemente da base de dados no dispositivo. Não há cópia na nuvem para limpar.

## Crescimento do armazenamento

Cada entrada ocupa aproximadamente 50–500 KB dependendo do tamanho da foto. Um histórico de algumas centenas de entradas normalmente fica abaixo dos 50 MB. As fotos são comprimidas ao guardar; o original em resolução completa nunca é retido.

Para libertar espaço: abra a página de histórico e elimine as entradas de que já não necessita. Desinstalar a app remove toda a base de dados do histórico como parte da desinstalação da plataforma.
