var nbmonu = 0
var monu = document.getElementById('monument');

function aimermonument() {  // cette fonction permet de liker loption
var btnm = document.querySelector("#monument");
if (btnm.value === '🤍') {
  btnm.value = '🖤';}
else {
  btnm.value = '🤍'
}
  if (nbmonu === 0) {
    alert("Je vous conseille de visiter la tour eiffel");
  }
  if (nbmonu === 1) {
    alert("Je vous conseille de visiter l'arc de triomphe");
  }
  if (nbmonu === 2) {
    alert("Je vous conseille de visiter la place de la concorde");
  }
  nbmonu = nbmonu + 1
  if (nbmonu === 3) {
    nbmonu = 0;
  }
}

monu.addEventListener('click', aimermonument);

var nbrestau = 0
var restau = document.getElementById('restaurant');

function aimerrestau() { // cette fonction permet de liker loption
var btnr = document.querySelector("#restaurant");
if (btnr.value === '🤍') {
  btnr.value = '🖤'; }
else {
  btnr.value = '🤍'
}
  if (nbrestau === 0) {
    alert("Je vous conseille de visiter la tour d'argent");
  }
  if (nbrestau === 1) {
    alert("Je vous conseille de visiter L'As de Fallafel");
  }
  if (nbrestau === 2) {
    alert("Je vous conseille de visiter le relais de l'entre-côte");
  }
  nbrestau = nbrestau + 1
  if (nbrestau === 3) {
    nbrestau = 0;
  }
}

restau.addEventListener('click', aimerrestau);

var nbmusee = 0
var musee = document.getElementById('musee');

function aimermusee() { // cette fonction permet de liker loption
var btnmu = document.querySelector("#musee");
if (btnmu.value === '🤍') {
btnmu.value = '🖤';}
else {
  btnmu.value = '🤍'
}
  if (nbmusee === 0) {
    alert("Je vous conseille de visiter le Musée du Louvre");
  }
  if (nbmusee === 1) {
    alert("Je vous conseille de visiter Le Musée Carnavalet");
  }
  if (nbmusee === 2) {
    alert("Je vous conseille de visiter le relais de le Musée d'Orsay");
  }
  nbmusee = nbmusee + 1
  if (nbmusee === 3) {
    nbmusee = 0;
  }
}

musee.addEventListener('click', aimermusee);
