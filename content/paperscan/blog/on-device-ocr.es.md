---
title: "OCR en dispositivo: texto searchable de cada página escaneada"
description: "OCR en dispositivo: texto searchable de cada página escaneada"
date: 2026-09-02
lang: es
slug: on-device-ocr
---

OCR (reconocimiento óptico de caracteres) convierte una página escaneada en texto que puede seleccionarse, copiarse y buscarse. Paper Scan ejecuta OCR completamente en el dispositivo usando los kits ML de Apple y Google, por lo que ningún contenido escaneado se transmite a servidores externos para reconocimiento. Las páginas reconocidas se indexan en la biblioteca local y se vuelven buscables en el momento en que se guardan.

### Qué desbloquea OCR

Una vez que una página ha sido reconocida:

- **Copiar texto del escaneo.** Mantenga pulsada cualquier palabra para mostrar una superposición de selección que cubre toda la página. El texto seleccionado puede pegarse en cualquier otra aplicación.
- **Buscar dentro de los escaneos.** La barra de búsqueda en la parte superior de la lista de Documentos consulta el texto reconocido de cada página, no solo títulos y etiquetas. Los números de teléfono, nombres, números de factura y direcciones se pueden localizar en toda la biblioteca.
- **Citar y referenciar.** Los recibos escaneados, contratos, notas manuscritas y capturas de pizarra se convierten en texto citable que puede consultarse más tarde.

### Por qué importa el procesamiento en dispositivo

- **Privacidad.** El contenido escaneado nunca sale del dispositivo para reconocimiento. Esto es relevante para facturas, contratos, formularios médicos y cualquier documento que contenga datos personales.
- **Latencia.** Sin ida y vuelta de red. En iPhone recientes y dispositivos Android insignia, el OCR para una página estándar generalmente se completa en menos de un segundo.
- **Disponibilidad sin conexión.** El OCR funciona en aviones, sótanos y en regiones sin cobertura de red. No se requiere conectividad.

La precisión es comparable a los servicios OCR basados en servidor; la diferencia es dónde se ejecuta el cálculo.

### Mejores prácticas para un reconocimiento preciso

La precisión del OCR depende principalmente de la calidad de la entrada. Tres factores, en orden de importancia:

1. **Iluminación.** La luz indirecta y uniforme desde una ventana funciona mejor que un foco único en el techo. Las sombras que cruzan la página son la causa más común de caracteres mal leídos.
2. **Enfoque.** Si el enfoque automático selecciona el sujeto equivocado, toque el centro del texto antes de la captura. Un escaneo borroso rara vez es un escaneo utilizable.
3. **Selección de filtro.** Blanco y negro da el texto más limpio para formularios impresos. Color mágico se recomienda cuando la tinta se ha desvanecido o el papel está amarillento. Auto maneja la mayoría de los casos cotidianos.
4. **Páginas planas.** Las páginas que se curvan hacia el lomo pierden caracteres cerca del canal. Presione la página plana con la otra mano cuando sea posible.
5. **Indicación de idioma.** Establezca el idioma OCR explícitamente para páginas de un solo idioma. Las páginas de escritura mixta funcionan en una sola pasada sin indicación.

### Limitaciones de precisión

El OCR funciona bien en texto impreso (95%+ de precisión) pero es menos confiable para escritura cursiva manuscrita, fuentes muy pequeñas, fuentes decorativas estilizadas, reflejos de revistas brillantes y recibos antiguos donde la tinta se ha desvanecido físicamente. La imagen original permanece disponible en todos los casos: si el OCR falla en una página crítica, el escaneo en sí aún puede leerse.

El nivel gratuito incluye una asignación diaria de OCR suficiente para recibos cotidianos, tarjetas de presentación y capítulos de libros ocasionales. Pro elimina el límite diario y añade la capacidad de ejecutar OCR en una carpeta completa en una sola operación.

El motor en dispositivo admite escrituras latinas (inglés, francés, alemán, español, portugués, italiano y otros), chino (simplificado y tradicional), japonés, coreano y la mayoría de las escrituras europeas. Las páginas de escritura mixta se manejan en una sola pasada de reconocimiento.
