// script.js

// Character sets
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lcase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_+";

// DOM elements
const plength = document.querySelector(".p-length");
const upperCase = document.querySelector(".Uppercase");
const lowerCase = document.querySelector(".Lowercase");
const pNumber = document.querySelector(".p-number");
const pSymbol = document.querySelector(".p-symbol");
const submit = document.querySelector(".generate");
const password = document.querySelector(".password");
const copyButton = document.querySelector(".copy");

// Generate password function
function generatePassword() {
  let initialPassword = "";

  upperCase.checked ? (initialPassword += uCase) : "";
  lowerCase.checked ? (initialPassword += lcase) : "";
  pNumber.checked ? (initialPassword += number) : "";
  pSymbol.checked ? (initialPassword += symbol) : "";

  let pass = "";

  for (let i = 0; i < plength.value; i++) {
    pass += initialPassword.charAt(
      Math.floor(Math.random() * initialPassword.length)
    );
  }
  return pass;
}

// Event listener for the "Generate Password" button
submit.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission
  const generatedPassword = generatePassword();
  password.value = generatedPassword;
});

// Event listener for the "Copy" button
copyButton.addEventListener("click", () => {
  if (password.value) {
    password.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  } else {
    alert("No password to copy!");
  }
});
