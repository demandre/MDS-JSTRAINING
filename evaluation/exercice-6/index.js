'use strict';

/*
  Checks if values in the form are correct
*/
function checkForm() {
  var phone = document.querySelector("#phone").value;
  var phoneValidation = document.querySelector("#phone-validation");

  phoneValidation.textContent = "Ok!";

  if(!checkPhoneNumber(phone)) {
    phoneValidation.textContent = "Veuillez saisir un numéro de téléphone valide (10 chiffres, commençant par 01, 06 ou 07)";
  }
}

/*
  Checks if string given is a valid phone number
*/
function checkPhoneNumber (number) {
  var regex = /^0[167][0-9]{8}$/i;
  return regex.exec(number);
}
