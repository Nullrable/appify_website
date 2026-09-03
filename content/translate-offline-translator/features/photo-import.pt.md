---
title: "Importar fotos: traduza qualquer foto da sua biblioteca"
description: "Pegue qualquer foto já no seu dispositivo e traduza-a pelo mesmo pipeline de OCR + ML Kit de uma captura nova."
date: 2026-09-03
lang: pt
slug: photo-import
icon: photo
---

O mesmo pipeline de OCR e tradução que processa capturas ao vivo também processa fotos vindas da biblioteca do dispositivo. Use-o para capturas de ecrã, fotos guardadas de placas ou menus e imagens partilhadas por amigos.

## Como funciona a importação

1. **Escolher da galeria.** Tocar no ícone da galeria na página da câmara abre o seletor de fotos do sistema via `image_picker`. A imagem selecionada é copiada para o diretório temporário da app; a original fica no sítio.
2. **Ler a orientação física.** As fotos da biblioteca têm uma etiqueta EXIF de orientação fiável, por isso o caminho de importação usa EXIF diretamente sem tocar no acelerómetro. A imagem é rodada para a orientação vertical correta antes do OCR.
3. **Mesmo pipeline de OCR.** A imagem é alimentada no mesmo motor `vision_text_recognition` forkado usado pelo caminho da câmara. Nenhum manuseamento especial é necessário para «importado» vs. «capturado» — a página de resultados e o comportamento de tradução são idênticos.
4. **Guardar no histórico.** Como as capturas da câmara, as fotos importadas podem ser guardadas no histórico de tradução local. A cópia guardada é uma miniatura comprimida, não a foto completa da biblioteca, para manter o armazenamento limitado.

## Quando importar em vez de capturar

- **Capturas de ecrã.** Traduza cadeias de UI, diálogos de erro ou excertos web guardados como capturas de ecrã.
- **Fotos já tiradas.** Traduza uma foto de uma viagem, uma reunião ou o chat de um amigo sem voltar a disparar.
- **Esboços ou quadros brancos.** Fotos de notas em quadro branco e esboços são frequentemente mais nítidas do que uma recaptura, especialmente quando a superfície tem brilho.
- **Documentos.** Snapshots de recibos, cartões de visita e etiquetas capturados por outra app podem ser traduzidos sem trocar de ferramenta.

## Privacidade

As fotos importadas passam pelo mesmo pipeline no dispositivo que as fotos ao vivo. São processadas em memória e nunca carregadas para qualquer servidor que operamos. As cópias de histórico guardado são armazenadas apenas no dispositivo, na base de dados local da app, e podem ser apagadas individualmente a partir da página de histórico.

## Limites

- **A rotação existente é respeitada.** Fotos que foram rodadas pelo SO são re-rodadas para vertical antes do OCR. Esta é a fonte mais comum de problemas de «o OCR devolve texto ilegível» com importações.
- **Originais grandes são reduzidos.** Fotos acima da resolução recomendada pelo motor de OCR são reduzidas antes do reconhecimento. A foto original no dispositivo não é afetada.
- **Sem importação em lote.** Cada foto requer o seu próprio um toque. Se precisar de traduzir muitas fotos guardadas, execute-as uma a uma; o OCR + tradução de uma só imagem normalmente fica concluído em alguns segundos.
