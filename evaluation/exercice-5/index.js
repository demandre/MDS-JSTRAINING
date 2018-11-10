'use strict';

/*
  Checks if values in the form are correct
*/
function checkForm() {
  var firstName = document.querySelector("#first-name").value;
  var firstNameValidation = document.querySelector("#first-name-validation");
  var name = document.querySelector("#name").value;
  var nameValidation = document.querySelector("#name-validation");
  var email = document.querySelector("#email").value;
  var emailValidation = document.querySelector("#email-validation");
  var password = document.querySelector("#password").value;
  var passwordValidation = document.querySelector("#password-validation");

  firstNameValidation.textContent = "Ok!";
  nameValidation.textContent = "Ok!";
  emailValidation.textContent = "Ok!";
  passwordValidation.textContent = "Ok!";

  if(!testName(firstName)) {
    firstNameValidation.textContent = "Veuillez saisir un prénom valide (entre 2 et 30 caractères, lettres et tirets)";
  }
  if(!testName(name)) {
    nameValidation.textContent = "Veuillez saisir un nom valide (entre 2 et 30 caractères, lettres et tirets)";
  }
  if(!testMail(email)) {
    emailValidation.textContent = "Veuillez saisir une addresse email valide (exemple: exemple@gmail.com)"
  }
  if(!testPassword(password)) {
    passwordValidation.textContent = "Veuillez saisir un mot de passe entre 8 et 16 caractères, comportant au moins une minuscule, une majuscule, un nombre et un caractère spécial (-+$_% ...)"
  }
}

/*
  Checks if string given is a valid name
*/
function testName (name) {
  var regex = /^[a-z -]{2,30}$/i;
  return regex.exec(name);
}

/*
  Checks if string given is a valid mail
*/
function testMail (mail) {
  var regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.[a-z]{2,4}$/i;
  return regex.exec(mail);
}

/*
  Checks if string given is a valid password
*/
function testPassword (password) {
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}$/i;
  return regex.exec(password);
}
