---
title: "Lista completa de formatos - 10 entradas de áudio + 4 saídas de áudio + 8 de vídeo"
description: "Todos os formatos suportados pelo editor de áudio num só lugar. 10 entradas de áudio: MP3, WAV, M4A, AAC, FLAC, OGG, Opus, AIFF, AMR, CAF. 4 saídas de áudio: MP3, WAV, FLAC, OGG. 8 contentores de vídeo: MP4, MOV, M4V, AVI, MKV, WebM, FLV, WMV."
date: 2026-10-17
lang: pt
slug: supported-formats
---

## Lista completa de formatos

Esta página é uma folha de consulta - todos os formatos de áudio e vídeo suportados pelo editor de áudio e quando escolher cada um.

Entrada e saída são dois conjuntos diferentes: a app pode ler 10 formatos de áudio, mas só escreve 4. Os vídeos são só de leitura e não são abertos diretamente pelo editor.

## Formatos de entrada de áudio (10)

O editor abre estes 10 ficheiros de áudio - edição multipista, melhoria e conversão (compress / merge) aceitam todos como entrada:

| Formato | Quando usar |
|---|---|
| **MP3** | Leitores universais, sistemas de carro, anexos de email. Escolha por defeito. |
| **WAV** | Master sem perdas, ideal para mistura, arquivo ou reedição. |
| **M4A** | A versão em contentor do AAC, comum no ecossistema Apple. |
| **AAC** | Padrão do ecossistema Apple, ótimo detalhe em tamanho pequeno. |
| **FLAC** | Sem perdas mas comprimido - cerca de metade do tamanho de WAV. |
| **OGG** | Contentor open source, preferido por alguns leitores profissionais. |
| **Opus** | Codec moderno de baixa latência, comum em reuniões de voz, podcasts e streaming. |
| **AIFF** | Padrão do ecossistema macOS / Logic, sem perdas. |
| **AMR** | Formato antigo de gravação de chamadas móveis, norma 3GPP. |
| **CAF** | Contentor Apple Core Audio, ideal para pós-processamento em iOS. |

## Formatos de saída de áudio (4)

O editor, a melhoria multipista e a conversão só podem escrever um destes 4 formatos na exportação:

| Formato | Quando usar |
|---|---|
| **MP3** | Padrão universal, reconhecido por praticamente todos os dispositivos e leitores. |
| **WAV** | Master sem perdas, ideal para reedição ou arquivo. |
| **FLAC** | Sem perdas mas comprimido, cerca de metade do tamanho de WAV. |
| **OGG** | Contentor open source, preferido por alguns equipamentos profissionais. |

## Formatos de vídeo (8)

Os ficheiros de vídeo **não** são abertos diretamente pelo editor. Servem apenas como "fonte de faixas de áudio":

| Formato | Quando usar |
|---|---|
| **MP4** | Universal, reconhecido por praticamente todos os dispositivos e leitores. |
| **MOV** | Padrão do ecossistema Apple - iMovie, Final Cut, Logic aceitam-no. |
| **M4V** | Contentor de vídeo da era iTunes, comporta-se como MP4 em dispositivos Apple. |
| **AVI** | Contentor antigo, melhor compatibilidade com aplicações Windows clássicas. |
| **MKV** | Contentor open source, suporta múltiplas faixas de áudio e legendas. Ótimo para arquivo HD. |
| **WebM** | Formato de vídeo web comum, open source. |
| **FLV** | Formato de streaming antigo da era Flash, útil para material antigo. |
| **WMV** | Windows Media Video, ecossistema Windows. |

## Como escolher

- **Partilha universal** -> áudio MP3, vídeo MP4
- **Segunda passagem no ecossistema Apple** -> vídeo MOV
- **Arquivo sem perdas** -> áudio WAV ou FLAC
- **Fluxos web ou open source** -> áudio OGG, vídeo WebM

## Os vídeos não são editados

A linha de tempo do editor só aceita clips de áudio. Os ficheiros de vídeo só podem funcionar como "fonte de faixas" - o editor não os corta.

## Totalmente local

Quer seja áudio ou vídeo, toda a descodificação, codificação e reescrita acontece no iPhone. Os ficheiros nunca saem do dispositivo.
