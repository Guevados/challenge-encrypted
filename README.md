# Challenge Encriptador

Este proyecto es una aplicación sencilla para encriptar y desencriptar texto usando un sistema basado en reemplazos específicos de vocales con códigos determinados. El propósito es permitir que los usuarios oculten el contenido de un mensaje y luego lo restauren a su forma original.

## Descripción

El programa consiste en una serie de funciones que toman un texto de entrada, lo encriptan y muestran el resultado. También puede realizar el proceso inverso, desencriptando el texto previamente encriptado. La aplicación utiliza JavaScript para manipular el DOM y llevar a cabo las transformaciones de texto.

### Proceso de Encriptación

En el proceso de encriptación, las vocales `a, e, i, o, u` se reemplazan por las siguientes cadenas:

- `a` -> `ai`
- `e` -> `enter`
- `i` -> `imes`
- `o` -> `ober`
- `u` -> `ufat`

### Proceso de Desencriptación

Durante el proceso de desencriptación, las cadenas encriptadas se transforman de vuelta a las vocales originales:

- `ai` -> `a`
- `enter` -> `e`
- `imes` -> `i`
- `ober` -> `o`
- `ufat` -> `u`

## Funcionalidades

- **Encriptación de texto:** Convierte un texto introducido por el usuario reemplazando vocales específicas por cadenas predefinidas.
- **Desencriptación de texto:** Revierte el proceso de encriptación, devolviendo el texto a su estado original.
- **Validación de texto:** Solo permite texto en minúsculas sin acentos ni caracteres especiales.
- **Botón de copia:** Una vez encriptado o desencriptado el texto, el botón de copia se hace visible para facilitar la acción de copiar el resultado.

## Estructura del código

### Funciones principales

- **`textTransform(inputText, regex, dictionary)`**: Realiza la transformación del texto reemplazando coincidencias encontradas por valores en el diccionario.

- **`hiddenShow(elementTag, displayState)`**: Muestra u oculta elementos del DOM, como el botón de copiar, según el estado indicado.

- **`toggleCopyButton(text)`**: Alterna la visibilidad del botón de copia dependiendo de si hay texto disponible para copiar.

- **`validationText(text)`**: Valida que el texto de entrada contenga únicamente letras minúsculas y espacios.

- **`encryptText()`**: Encripta el texto introducido en el campo de entrada.

- **`decryptText()`**: Desencripta el texto encriptado.

- **`copyText()`**: Copia el texto encriptado al campo de entrada para facilitar su manipulación.

