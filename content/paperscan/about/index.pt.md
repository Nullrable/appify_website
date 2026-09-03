---
title: Sobre o Paper Scan - Guia de recursos
description: Saiba o que o Paper Scan faz, como cada filtro e OCR funcionam no dispositivo, e como a sincronização em nuvem sem conflitos mantém seus documentos alinhados entre iPhone e iPad.
date: 2026-09-02
lang: pt
slug: index
---

# Sobre o Paper Scan

Paper Scan é um scanner de documentos criado para iPhone e iPad. Ele captura uma página A4 inteira a uma distância confortável, corrige a perspectiva automaticamente, permite refinar o resultado com seis filtros GPU e exporta PDFs multipágina com texto pesquisável, tudo sem enviar um único byte a um servidor a menos que você ative a sincronização em nuvem.

## Captura e detecção de bordas

A visão de captura é ampla o bastante para enquadrar uma folha A4 inteira à distância do braço. No instante em que uma página entra no quadro, a detecção de bordas se prende aos seus cantos. A captura automática dispara quando o documento está firme, a perspectiva é corrigida no local e uma miniatura pequena chega à bandeja de revisão para você confirmar ou recapturar.

Você pode alternar para o modo manual a qualquer momento. Mantenha o disparador pressionado para desativar a captura automática, arraste as alças dos cantos quando as bordas precisarem de ajuda e toque em uma miniatura para recortar ou girar antes de a página ser confirmada no documento.

## Seis filtros GPU

Cada filtro no Paper Scan é renderizado na GPU. As prévias atualizam instantaneamente mesmo em lotes multipágina, então você pode comparar a força dos filtros sem esperar.

- **Original** mantém a foto capturada intacta e é a escolha certa quando você quer um registro fiel.
- **Melhorar** aumenta contraste e balanço de branco, resgatando recibos térmicos desbotados e capturas em luz fraca.
- **Escala de cinza** aplaina o ruído de cor em papel colorido para que a camada OCR leia o texto com mais limpeza.
- **Preto e branco** leva a mesma ideia um passo adiante, produzindo a camada de texto mais limpa para digitalizações de arquivo.
- **Clarear** uniformiza sombras do flash do celular, útil para páginas de revistas brilhantes.
- **Nitidez** recupera detalhes finos em recibos e adesivos de número de série.

Os filtros são aplicados por página, não por documento. Você pode misturá-los em um único PDF se algumas páginas precisarem de cor e outras de preto e branco.

## Organização

As digitalizações caem em uma tela agrupadas como páginas dentro de um documento. Você pode arrastar páginas para reordenar, arrastar páginas de um documento para outro, renomear documentos no local e fixar os mais usados no topo da biblioteca.

A busca por texto completo roda em cada página que já passou pelo OCR. Os resultados destacam a palavra correspondente em uma miniatura da página, e tocar no resultado abre o documento na página certa para você ler o contexto em volta.

## OCR no dispositivo

O OCR usa o framework Vision da Apple. O reconhecimento de texto acontece dentro do enclave seguro do seu iPhone: a imagem nunca sai do dispositivo, o texto reconhecido nunca é enviado a lugar nenhum, e o índice OCR fica no armazenamento privado do app. A camada OCR roda sob demanda e você pode executá-la novamente em qualquer página a qualquer momento se mudar o filtro.

O texto pesquisável é preservado ao exportar PDFs. Quem abrir o PDF no Preview, no Adobe Reader ou em qualquer visualizador moderno pode copiar o texto em vez de redigitá-lo.

## Exportação de PDF multipágina

Exporte um documento inteiro como um PDF, ou compartilhe páginas individuais como imagens. Por exportação, você pode escolher o tamanho da página (Letter / A4 / original), orientação, qualidade (Baixa / Padrão / Alta) e se inclui a camada de texto OCR. O Paper Scan embute a camada OCR automaticamente quando você mantém a qualidade em Padrão ou Alta.

A exportação em lote permite escolher vários documentos de uma vez e enviá-los como um único zip multipágina, útil para lotes de despesas no fim do mês.

## Sincronização em nuvem sem conflitos

A sincronização em nuvem é opcional. Ative o iCloud e seus documentos aparecem em todo dispositivo com a mesma Apple ID; ative o Google Drive e eles aparecem em todo dispositivo com aquela conta Google. Você pode manter ambos desligados e o app se comporta como um arquivo puramente local.

A sincronização resolve edições simultâneas sem criar duplicatas. Cada página carrega seu próprio marcador de revisão, então a versão mais recente daquela página prevalece, e suas edições locais em andamento nunca são sobrescritas silenciosamente. Renomeações de pastas, documentos e páginas também se propagam, de modo que excluir um documento em um dispositivo o remove em todo lugar.

## Offline por padrão, privacidade em primeiro

O Paper Scan fica offline por padrão. Digitalização, detecção de bordas, filtros, OCR, busca e exportação de PDF rodam todos no dispositivo e não fazem nenhuma chamada de rede. O único recurso que usa a rede é a sincronização em nuvem, e somente quando você a ativa. Não é necessária conta, não há SDK de análise embutido, e não há anúncios.

Suas digitalizações ficam no armazenamento privado do app. Desinstalar o app remove todos os seus dados locais, incluindo o índice OCR, o cache de busca por texto completo e quaisquer edições não sincronizadas.

## Paper Scan Pro

Digitalização, os seis filtros, OCR, exportação de PDF de documento único e busca ficam grátis para sempre, sem marca d'água. O Paper Scan Pro adiciona documentos ilimitados, sincronização em nuvem e exportação em lote. Pro é vendido como um upgrade único, então uma vez que você o tem, ele fica com você em todos os dispositivos e em todas as atualizações futuras.
