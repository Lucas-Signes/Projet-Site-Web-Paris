var btneiffel = document.querySelector("#butoneiffel"); // pour appeler le bouton
var txteiffel= document.querySelector("#eiffel"); // pour appeler le texte


function updateBtneiffel() {  // fonction pour changer la valeur du bouton
  if (btneiffel.value === 'afficher plus') { // condition si la valeur du bouton est affiché plus
    btneiffel.value = 'afficher moins'; // on change la valeur du bouton
     txteiffel.textContent = txteiffel.textContent + "Construite en deux ans par Gustave Eiffel et ses collaborateurs pour l'Exposition universelle de Paris de 1889, célébrant le centenaire de la Révolution française, et initialement nommée « tour de 300 mètres », elle est devenue le symbole de la capitale française et un site touristique de premier plan : il s’agit du troisième site culturel français payant le plus visité en 2015, avec 5,9 millions de visiteurs en 2016. Depuis son ouverture au public, elle a accueilli plus de 300 millions de visiteurs."; // on change la valeur du texte
  } else { // sinon la valeur du bouton est affiché moins /
    btneiffel.value = 'afficher plus'; // on change la valeur du bouton
    txteiffel.textContent = "La tour Eiffel est une tour de fer puddlé de 330 mètres de hauteur (avec antennes) située à Paris, à l’extrémité nord-ouest du parc du Champ-de-Mars en bordure de la Seine dans le 7e arrondissement."; // on change la valeur du texte
  }
}

btneiffel.addEventListener('click', updateBtneiffel); // on active la fonction lorsqu'on appuie sur le bouton



var btnarc = document.querySelector("#butonarc");
var txtarc = document.querySelector("#arc");

btnarc.addEventListener('click', updateBtnarc);

function updateBtnarc() {
  if (btnarc.value === 'afficher plus') {
    btnarc.value = 'afficher moins';
    txtarc.textContent = "L'arc de triomphe de l’Étoile, souvent appelé simplement l'Arc de Triomphe1, est un monument situé à Paris, en un point haut à la jonction des territoires des 8e, 16e et 17e arrondissements, notamment au sommet de l'avenue des Champs-Élysées et de l'avenue de la Grande-Armée. La place de l'Étoile forme un énorme rond-point de douze avenues percées au XIXe siècle sous l’impulsion de Napoléon III et du baron Haussmann, alors préfet du département de la Seine. Ces avenues « rayonnent » en étoile autour de la place, notamment l’avenue Kléber, l'avenue de la Grande-Armée, l’avenue de Wagram et, la plus connue, l’avenue des Champs-Élysées. Des pavés de couleurs différentes dessinent sur le sol de la place deux étoiles dont les pointes arrivent pour l'une au milieu des avenues, pour l'autre entre les avenues. ";
  } else {
    btnarc.value = 'afficher plus';
    txtarc.textContent = "L'arc de triomphe de l’Étoile, souvent appelé simplement l'Arc de Triomphe1, est un monument situé à Paris, en un point haut à la jonction des territoires des 8e, 16e et 17e arrondissements, notamment au sommet de l'avenue des Champs-Élysées et de l'avenue de la Grande-Armée. ";
  }
}





var btnconcorde = document.querySelector("#butonconcorde");
var txtconcorde = document.querySelector('#concorde');

btnconcorde.addEventListener('click', updateBtnconcorde);

function updateBtnconcorde() {
  if (btnconcorde.value === 'afficher plus') {
    btnconcorde.value = 'afficher moins';
    txtconcorde.textContent = "La place de la Concorde, qui s’étend sur 8,64 hectares, est la plus grande place de Paris. Le nom aurait été choisi par le Directoire pour marquer la réconciliation des Français après les excès de la Terreur. Située sur la rive droite dans le 8e arrondissement, au pied des Champs-Élysées, elle relie ceux-ci, qui montent vers le nord-ouest, au jardin des Tuileries qui s'étend vers le sud-est. Par la rue Royale, elle ouvre au nord sur l'église de la Madeleine et au sud, par le pont de la Concorde qui traverse la Seine vers le 7e arrondissement, sur le palais Bourbon. Administrativement, la place elle-même est située dans le quartier des Champs-Élysées dont elle est l’extrémité orientale.";
  } else {
    btnconcorde.value = 'afficher plus';
    txtconcorde.textContent = "La place de la Concorde, qui s’étend sur 8,64 hectares, est la plus grande place de Paris. Le nom aurait été choisi par le Directoire pour marquer la réconciliation des Français après les excès de la Terreur.";
  }
}



var butoncolor = document.querySelector('#btncolor');

function changecolor(event) { // fonction pour changer de couleur
  if ( event.target.textContent === "changer en mode sombre" ) {
event.target.textContent = "changer en mode clair";
  document.body.style.background = 'black';
  document.getElementById("eiffel").className = "blanc";
  document.getElementById("arc").className = "blanc";
  document.getElementById("concorde").className = "blanc";
  }
  else
  {event.target.textContent = "changer en mode sombre";
  document.body.style.background = 'white';
  document.getElementById("eiffel").className = "noir";
  document.getElementById("arc").className = "noir";
  document.getElementById("concorde").className = "noir";
  }
}

butoncolor.addEventListener('click', changecolor);

function popupimg() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
