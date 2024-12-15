"use strict";
const loginForm = document.querySelector(".login-form");

const handleClick = (event) => {
  event.preventDefault(); 

  const {
    elements: { email, password },
  } = event.target;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  event.target.reset(); 
  console.log(formData);
};

loginForm.addEventListener("submit", handleClick);
