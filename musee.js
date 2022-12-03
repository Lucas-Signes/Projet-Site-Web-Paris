var btnlouvre = document.querySelector("#butonlouvre");
var txtlouvre= document.querySelector("#louvre");


function updateBtnlouvre() {
  if (btnlouvre.value === 'afficher plus') {
    btnlouvre.value = 'afficher moins';
     txtlouvre.textContent = txtlouvre.textContent + "Une préfiguration en est imaginée en 1775-1776 par le comte d'Angiviller, directeur général des Bâtiments du roi, comme lieu de présentation des chefs-d'œuvre de la collection de la Couronne. Ce musée n'a été inauguré qu'en 1793 sous l'appellation de Muséum central des arts de la République dans le palais du Louvre, ancienne résidence royale située au centre de Paris, et il est aujourd'hui le plus grand musée d'art et d'antiquités au monde. Sa surface d'exposition est de 72 735 m2.";
  } else {
    btnlouvre.value = 'afficher plus';
    txtlouvre.textContent = "Le musée du Louvre est un musée situé dans le 1er arrondissement de Paris, en France.";
  }
}

btnlouvre.addEventListener('click', updateBtnlouvre);








var btncarnavalet = document.querySelector("#butoncarnavalet");
var txtcarnavalet = document.querySelector("#carnavalet");

btncarnavalet.addEventListener('click', updateBtncarnavalet);

function updateBtncarnavalet() {
  if (btncarnavalet.value === 'afficher plus') {
    btncarnavalet.value = 'afficher moins';
    txtcarnavalet.textContent = txtcarnavalet.textContent + "Situé dans le quartier du Marais au no 23 rue de Sévigné à Paris, dans le 3e arrondissement, il présente des collections sur des thématiques variées : souvenirs de la Révolution française, peintures historiques, sculptures, mobilier et décors des xviie et xviiie siècles, objets d'art, estampes, etc.";
  } else {
    btncarnavalet.value = 'afficher plus';
    txtcarnavalet.textContent = "Le musée Carnavalet - Histoire de Paris est le musée municipal parisien consacré à l'histoire de Paris des origines de la ville à nos jours.";
  }
}





var btnorsay = document.querySelector("#butonorsay");
var txtorsay = document.querySelector('#orsay');

btnorsay.addEventListener('click', updateBtnorsay);

function updateBtnorsay() {
  if (btnorsay.value === 'afficher plus') {
    btnorsay.value = 'afficher moins';
    txtorsay.textContent =  txtorsay.textContent + "Situé dans le 7e de Paris le long de la rive gauche de la Seine, en surplomb de la promenade Édouard-Glissant, il est installé dans l’ancienne gare d'Orsay, construite par Victor Laloux de 1898 à 1900 et réaménagée en musée sur décision du président de la République Valéry Giscard d'Estaing. Ses collections présentent l’art occidental de 1848 à 1914, dans toute sa diversité : peinture, sculpture, arts décoratifs, art graphique, photographie, architecture, etc. Il est l’un des plus grands musées d’Europe pour cette période.";
  } else {
    btnorsay.value = 'afficher plus';
    txtorsay.textContent = "Le musée d’Orsay (officiellement « établissement public du musée d'Orsay et du musée de l'Orangerie – Valéry Giscard d'Estaing » depuis 2021) est un musée national inauguré en 1986.";
  }
}



var butoncolor = document.querySelector('#btncolor');

function changecolor(event) {
  if ( event.target.textContent === "changer en mode sombre" ) {
event.target.textContent = "changer en mode clair";
  document.body.style.background = 'black';
  document.getElementById("louvre").className = "blanc";
  document.getElementById("carnavalet").className = "blanc";
  document.getElementById("orsay").className = "blanc";
  }
  else
  {event.target.textContent = "changer en mode sombre";
  document.body.style.background = 'white';
  document.getElementById("louvre").className = "noir";
  document.getElementById("carnavalet").className = "noir";
  document.getElementById("orsay").className = "noir";
  }
}

butoncolor.addEventListener('click', changecolor);

function popupimg() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
