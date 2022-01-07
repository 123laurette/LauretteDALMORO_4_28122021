function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//......MON JAVA SCRIPT....
//  FERMETURE DE LA MODAL
const modalclose = document.querySelector(".close");

modalclose.addEventListener("click", accueil);

function accueil() {
  modalbg.style.display = "none";
  document.getElementsById("form"), reset();
}
//**********************************************/
//  VERIF DU FORMULAIRE
let validation = document.getElementById("valider");

//***********************************************/
// VERIFICATION PRENOM
let prenom = document.getElementById("first");

prenom.addEventListener("change",valid_prenom);

function valid_prenom(inputFirst){
let prenom_v = new RegExp('^[a-zA-Z-\s]+$');
let testPrenom = prenom_v.test(inputFirst.value)

  if(testPrenom || (inputFirst.value == "")){
    prenom.parentElement.setAttribute("data-error-visible", "true");
    prenom.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    return false;
}else{
    prenom.parentElement.setAttribute("data-error-visible", "false");
    prenom.parentElement.setAttribute("data-error", "");
    return true;
}
}
//**********************************************/
//***********************************************/
// VERIFICATION NOM
let nom = document.getElementById("last");

nom.addEventListener("change",valid_nom);

function valid_nom(inputLast){
let nom_v = new RegExp('^[a-zA-Z-\s]+$');
let testNom = nom_v.test(inputLast.value)

  if(testNom || (inputLast.value == "")){
    nom.parentElement.setAttribute("data-error-visible", "true");
    nom.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    return false;
}else{
    nom.parentElement.setAttribute("data-error-visible", "false");
    nom.parentElement.setAttribute("data-error", "");
    return true;
}
}
//**********************************************/
//***********************************************/
// VERIFICATION EMAIL
let email = document.getElementById("email");

email.addEventListener("change",valid_email);

function valid_email(inputEmail){
let email_v = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
let testEmail = email_v.test(inputEmail.value)

  if(!testEmail || (inputEmail.value == "")){
    email.parentElement.setAttribute("data-error-visible", "true");
    email.parentElement.setAttribute("data-error", "Veuillez vérifier votre adresse éléctronique.");
    return false;
}else{
    email.parentElement.setAttribute("data-error-visible", "false");
    email.parentElement.setAttribute("data-error", "");
    return true;
}
}
//**********************************************/
//***********************************************/
// VERIFICATION DATE DE NAISSANCE
let ddn = document.getElementById("birthdate");

ddn.addEventListener("change",valid_ddn);

function valid_ddn(inputBirthdate){
let ddn_v = new RegExp('^[0-9]+$');
let testDdn = ddn_v.test(inputBirthdate.value)

  if(!testDdn || (inputBirthdate.value == "")){
    ddn.parentElement.setAttribute("data-error-visible", "true");
    ddn.parentElement.setAttribute("data-error", "Vous devez entrer votre date de naissance en format JJ/MM/AAAA.");
    return false;
}else{
    ddn.parentElement.setAttribute("data-error-visible", "false");
    ddn.parentElement.setAttribute("data-error", "");
    return true;
}
}
//**********************************************/