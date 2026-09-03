---
title: "OCR da câmera: apontar, capturar, traduzir"
description: "OCR no dispositivo via vision_text_recognition com orientação precisa a nível de hardware, mesmo quando a interface do dispositivo está fixa em vertical."
date: 2026-09-03
lang: pt
slug: camera-ocr
icon: camera
---

O OCR da câmera executa OCR localmente usando um pacote `vision_text_recognition` forkado que suporta scripts latinos, chineses (simplificado e tradicional), japoneses e coreanos. Nada é carregado para reconhecimento. Cada bloco retornado pelo motor OCR traz sua própria bounding box e texto detectado; a página de resultados pinta a tradução sobre as mesmas coordenadas, preservando o layout original.

## Pipeline de captura

1. **Inicialização da câmera.** O controlador da câmera é inicializado assincronamente com estados explícitos `initializing / ready / failed`. Em caso de falha, um botão de tentar novamente é exibido, que executa a inicialização novamente sem reentrar na guarda `initializing`.
2. **Orientação real.** O `DeviceOrientation` do iOS e o EXIF são pouco confiáveis quando o app está fixado em vertical. O app lê o acelerômetro bruto via `sensors_plus` e armazena em cache o frame mais recente, de modo que o obturador capture a direção real de empunhadura mesmo se a UI estiver bloqueada. A orientação EXIF é então reconciliada com essa verdade de campo.
3. **Obturador.** Toque para capturar na proporção atual da pré-visualização. O frame capturado é reduzido a uma aresta máxima configurável antes do OCR — a maioria das páginas precisa de 1500–2000 px na aresta longa para que o motor leia letras miúdas sem sobrecarregar a memória.
4. **Flash.** Quatro modos no visor — automático, desligado, ligado e lanterna — com o comutador vinculado à API de flash do sistema.

## O que o OCR retorna

- **Bounding boxes por bloco.** Cada TextBlock tem seu próprio retângulo. A página de resultados os usa para posicionar o texto traduzido exatamente sobre o texto-fonte.
- **Texto e ordem dos blocos.** Texto no idioma-fonte por bloco, na ordem em que o motor os emitiu (de cima para baixo, da esquerda para a direita por padrão).
- **Confiança.** Cada bloco carrega sua própria confiança. Blocos abaixo de um limite são renderizados na página de resultados, mas sinalizados como «baixa confiança» para que o usuário possa verificar.

## Por que no dispositivo

- **Privacidade.** Fotos de placas de rua, contratos ou formulários médicos nunca saem do dispositivo para o OCR.
- **Latência.** Sem ida e volta de rede. O OCR de uma página típica tirada pelo celular termina em bem menos de um segundo em um dispositivo recente.
- **Offline.** O OCR funciona em aviões, porões e regiões sem cobertura. O mesmo motor que executa o reconhecimento roda inteiramente a partir do modelo no dispositivo.

## Melhores práticas para OCR preciso

1. **Luz uniforme e indireta.** A luz da janela supera os spots de teto. Sombras cruzando a página são a causa mais comum de caracteres lidos incorretamente.
2. **Toque para focar.** Se o foco automático selecionar o assunto errado (a mesa, um dedo, a borda da página), toque no centro do texto antes da captura.
3. **Páginas planas.** Páginas que se curvam em direção à lombada perdem caracteres próximos à dobra. Pressione a página plana com a outra mão sempre que possível.
4. **Um idioma por captura.** Páginas com scripts mistos funcionam em uma única passagem, mas uma página que mistura latim com japonês vertical é melhor dividida em duas capturas.
