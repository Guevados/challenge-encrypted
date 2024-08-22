function textTransform(inputText, regex, dictionary) {
  const encrypted = inputText.replace(regex, (match) => dictionary[match]);
  document.querySelector(".encrypted-text").value = encrypted;
  document.querySelector(".input-text").value = "";
}

function hiddenShow(elementTag, displayState) {
  // addEventListener("click", function () {
    let element = document.querySelector(elementTag);
    element.style.display = displayState;
  // });
}

function toggleCopyButton(text) {
  const copyButton = document.querySelect(".copy-text");
  if (text) {
    copyButton.style.display = "flex";
  } else {
    copyButton.style.display = "none";
  }
}

function validationText(text) {
  const regex = /^[a-z\s]*$/;
  return regex.test(text);

  document.querySelector(".input-text").value = "";
  document.querySelector(".encrypted-text").value = "";
}

function encryptText() {
  const inputText = document.querySelector(".input-text").value;

  const regex = /[aeiou]/g;
  const dictionary = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  if (validationText(inputText)) {
    textTransform(inputText, regex, dictionary);
    hiddenShow(".copy-button", "flex");
  } else {
    alert("Ingrese solo letras en minusculas sin acentos y/o numeros");
  }
}

function decryptText() {
  const inputText = document.querySelector(".input-text").value;

  const regex = /ai|enter|imes|ober|ufat/g;
  const dictionary = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  if (validationText(inputText)) {
    textTransform(inputText, regex, dictionary);
    hiddenShow(".copy-button", "flex");
  } else {
    alert(
      "El mensaje a desencriptar debe tener letras minusculas, sin acentos ni numeros",
    );
  }
}

function copyText() {
  const encryptedText = document.querySelector(".encrypted-text").value;
  document.querySelector(".input-text").value = encryptedText;
  document.querySelector(".encrypted-text").value = "";
  hiddenShow(".copy-button", "none");
}

document.addEventListener('DOMContentLoaded', () => {
  hiddenShow(".copy-button", "none");
})
