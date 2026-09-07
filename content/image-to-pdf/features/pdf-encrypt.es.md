---
title: "Cifrado de PDF"
description: "Instrucciones de uso de la función de cifrado de Image to PDF: establezca contraseña de apertura y contraseña de propietario, controle los permisos de impresión, copia y modificación, adopte el cifrado AES-256 por defecto."
date: 2026-09-07
lang: es
slug: pdf-encrypt
---

## Cifrado de PDF

Añada un bloqueo con contraseña al PDF. Antes de enviar contratos, escaneos de documentos de identidad y materiales financieros por correo electrónico o herramientas de chat, cifrelos primero para asegurarse de que solo las personas con la contraseña puedan abrirlos.

## Dos tipos de contraseñas, cada una con su función

- **Contraseña de usuario (contraseña de apertura)**: tras establecerla, cualquier persona que abra este PDF debe ingresar esta contraseña — esta es la primera puerta del archivo;
- **Contraseña de propietario (opcional)**: establecida por separado de la contraseña de usuario; quienes tengan la contraseña de propietario pueden modificar la configuración de permisos del archivo.

## Control de permisos preciso

Al activar el cifrado, también puede controlar qué operaciones se permiten para este PDF:

- **Permitir impresión** (activado por defecto): si se permite imprimir este archivo;
- **Permitir copia** (desactivado por defecto): si se permite copiar el texto o las imágenes en él;
- **Permitir modificación** (desactivado por defecto): si se permite editar el contenido del archivo.

Por ejemplo, al enviar un报价单 al exterior, puede activar la impresión, desactivar la copia y la modificación, lo cual es conveniente para que la otra parte revise y reduce el riesgo de uso directo del contenido.

## Estándar de cifrado AES

El cifrado usa por defecto **AES-256**, y también puede cambiarse a AES-128 para una mejor compatibilidad. El cifrado se realiza localmente en el dispositivo; el contenido del PDF no se subirá a ningún servidor.
