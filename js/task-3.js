"use strict";

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const handleKeypress = (event) => {
    const trimmedValue = event.target.value.trim();
    
  output.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
};
textInput.addEventListener("input", handleKeypress);