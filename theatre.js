var butoncolor = document.querySelector('#btncolor');



function changecolor(event) {

  if ( event.target.textContent === "changer en mode sombre" ) {

           event.target.textContent = "changer en mode clair";

  document.body.style.background = 'black';

  document.getElementById("comedie_francaise").className = "blanc";

  document.getElementById("edouard").className = "blanc";

  document.getElementById("paris").className = "blanc";

        document.getElementById("favComedie").className = "noir";

    document.getElementById("favEdouard").className = "noir";

    document.getElementById("favParis").className = "noir";

    document.querySelector("#butonfavoris1").value = "🖤";

    document.querySelector("#butonfavoris2").value = "🖤";

    document.querySelector("#butonfavoris3").value = "🖤";

    document.getElementById("tableauFav").className = "blanc";







  }

  else

  {event.target.textContent = "changer en mode sombre";

  document.body.style.background = 'white';

  document.getElementById("comedie_francaise").className = "noir";

  document.getElementById("edouard").className = "noir";

  document.getElementById("paris").className = "noir";

   document.getElementById("favComedie").className = "blanc";

    document.getElementById("favEdouard").className = "blanc";

    document.getElementById("favParis").className = "blanc";

    document.querySelector("#butonfavoris1").value = "🤍";

    document.querySelector("#butonfavoris2").value = "🤍";

    document.querySelector("#butonfavoris3").value = "🤍";

    document.getElementById("tableauFav").className = "noir";

  }

}



butoncolor.addEventListener('click', changecolor);







var btn = document.querySelector("#butoncomedie");

var txt = document.querySelector('#comedie_francaise');





function updateBtn() {

  if (btn.value === 'afficher plus') {

    btn.value = 'afficher moins';

    txt.textContent = "La Comédie-Française ou Théâtre-Français (souvent appelé simplement « le Français ») est une institution culturelle française fondée en 1680 et résidant depuis 1799 salle Richelieu au cœur du Palais-Royal dans le 1er arrondissement de Paris. Établissement public à caractère industriel et commercial depuis 1995, c'est le seul théâtre national en France disposant d'une troupe permanente de comédiens, la Troupe des Comédiens-Français. Bien que mort depuis sept ans quand la troupe a été créée, Molière est considéré comme le « patron » de l'institution, surnommée la « Maison de Molière ». Le fauteuil dans lequel il entra en agonie lors d'une représentation du Malade imaginaire est toujours exposé au fond de la galerie des bustes, après le Foyer Public";

  } else {

    btn.value = 'afficher plus';

    txt.textContent = "La Comédie-Française ou Théâtre-Français (souvent appelé simplement « le Français ») est une institution culturelle française fondée en 1680 et résidant depuis 1799 salle Richelieu au cœur du Palais-Royal dans le 1er arrondissement de Paris.";

  }

}







btn.addEventListener('click', updateBtn);







var btn2 = document.querySelector("#butonedouard"); // pour appeler le bouton

var txt2 = document.querySelector('#edouard'); // pour appeler le texte



function updateBtn2() { // fonction pour changer la valeur du bouton

  if (btn2.value === 'afficher plus') { // condition si la valeur du bouton est affiché plus

    btn2.value = 'afficher moins'; // on change la valeur du bouton

    txt2.textContent = "Le Théâtre Édouard VII est une salle de spectacles installée dans le 9e arrondissement de Paris, entre la place de la Madeleine et la place de l'Opéra. Il est situé au cœur du quartier Édouard VII, constitué notamment d'une voie et d'une place piétonnes. Il est à lui seul un paradoxe : offert à la capitale par un souverain anglais aux bons soins d’un architecte anglais, il fut d’abord une des premières salles de cinéma à Paris lors de son inauguration en 1913 et devint théâtre trois ans plus tard. Le fantôme de Sacha Guitry le hante encore et c’est tout naturellement qu’il fut la maison du théâtre anglo-saxon en faisant découvrir tour à tour Tennessee Williams, Samuel Beckett et bien d’autres."; // on change la valeur du texte

  } else { { // sinon la valeur du bouton est affiché moins

    btn2.value = 'afficher plus';

    txt2.textContent = "Le Théâtre Édouard VII est une salle de spectacles installée dans le 9e arrondissement de Paris, entre la place de la Madeleine et la place de l'Opéra. Il est situé au cœur du quartier Édouard VII, constitué notamment d'une voie et d'une place piétonnes."; // on change la valeur du texte

  }

}







btn2.addEventListener('click', updateBtn2); // on active la fonction lorsqu'on appuie sur le bouton









var btn3 = document.querySelector("#butonparis");

var txt3 = document.querySelector('#paris');





function updateBtn3() {

  if (btn3.value === 'afficher plus') {

    btn3.value = 'afficher moins';

    txt3.textContent = "Le théâtre de Paris est une salle de spectacles située 15, rue Blanche, dans le 9ᵉ arrondissement de Paris. Il abrite une deuxième salle plus petite, la « salle Réjane », anciennement appelée le « Petit Théâtre de Paris »Vers 1730, sous le règne de Louis XV, le duc de Richelieu se fait construire un lieu où il peut organiser des spectacles de son choix dans une vaste campagne plantée d'arbres. En 1779, le baron d'Ogni achète l'endroit, qu'il rebaptise Folie-Richelieu. Elle est dirigée par Fortunée Hamelin, une jeune femme très en vue du tout-Paris mondain sous le Premier Empire.";

  } else {

    btn3.value = 'afficher plus';

    txt3.textContent = "Le théâtre de Paris est une salle de spectacles située 15, rue Blanche, dans le 9ᵉ arrondissement de Paris. Il abrite une deuxième salle plus petite, la « salle Réjane », anciennement appelée le « Petit Théâtre de Paris »";

  }

}







btn3.addEventListener('click', updateBtn3);









var btnD1 = document.querySelector("#butondefile1");





function autre_img1() {



  if (document.getElementById("img1").src === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeL14xPQ1nXgJnOO7_XlcSNzvo87PxCiuyg&usqp=CAU") {



    document.getElementById("img1").src = "https://cdn.pixabay.com/photo/2018/05/21/10/15/palace-3417839_1280.jpg";



  }

  else {



    if (document.getElementById("img1").src === "https://cdn.pixabay.com/photo/2018/05/21/10/15/palace-3417839_1280.jpg") {



      document.getElementById("img1").src = "https://live.staticflickr.com/4675/40135136621_f5764f247f_b.jpg"

    }



    else {

      if (document.getElementById("img1").src === "https://live.staticflickr.com/4675/40135136621_f5764f247f_b.jpg") {



        document.getElementById("img1").src = "https://cdn35.picryl.com/photo/1815/01/01/le-peristyle-du-theatre-de-la-comedie-francaise-vers-1820-un-soir-de-representation-a9d832-1024.jpg"

      }



      else {

        if (document.getElementById("img1").src === "https://cdn35.picryl.com/photo/1815/01/01/le-peristyle-du-theatre-de-la-comedie-francaise-vers-1820-un-soir-de-representation-a9d832-1024.jpg") {



          document.getElementById("img1").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeL14xPQ1nXgJnOO7_XlcSNzvo87PxCiuyg&usqp=CAU"

        }

      }

    }

  }

}



btnD1.addEventListener('click', autre_img1);



  // dans cette fonction on appelle une image grace a son id et on change la source de cette image pour la modifier















var btnD2 = document.querySelector("#butondefile2");



function autre_img2() {



  if (document.getElementById("img2").src === "https://upload.wikimedia.org/wikipedia/commons/6/6f/Paris_Boulevard_Des_Capucines_Annonce_Theatre_Edouard_VII_02042016_-_panoramio_%281%29.jpg") {



    document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Paris_Theatre_Edouard_VII_Scene_02042016_-_panoramio.jpg";



  }

  else {



    if (document.getElementById("img2").src === "https://upload.wikimedia.org/wikipedia/commons/0/0b/Paris_Theatre_Edouard_VII_Scene_02042016_-_panoramio.jpg") {



      document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/4/48/Paris_Theatre_Edouard_VII_Salle_02042016_-_panoramio.jpg"

    }



    else {

      if (document.getElementById("img2").src === "https://upload.wikimedia.org/wikipedia/commons/4/48/Paris_Theatre_Edouard_VII_Salle_02042016_-_panoramio.jpg") {



        document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/6/6e/Paris_Rue_Edouard_VII_02042016_-_panoramio.jpg"

      }



      else {

        if (document.getElementById("img2").src === "https://upload.wikimedia.org/wikipedia/commons/6/6e/Paris_Rue_Edouard_VII_02042016_-_panoramio.jpg") {



          document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/6/6f/Paris_Boulevard_Des_Capucines_Annonce_Theatre_Edouard_VII_02042016_-_panoramio_%281%29.jpg"

        }

      }

    }

  }

}



btnD2.addEventListener('click', autre_img2);









var btnD3 = document.querySelector("#butondefile3");





function autre_img3() {



  if (document.getElementById("img3").src === "https://live.staticflickr.com/6206/6099623506_fc608ae5ac_b.jpg") {



    document.getElementById("img3").src = "https://cdn.pixabay.com/photo/2014/10/09/20/24/the-paris-opera-482463_1280.jpg";



  }

  else {



    if (document.getElementById("img3").src === "https://cdn.pixabay.com/photo/2014/10/09/20/24/the-paris-opera-482463_1280.jpg") {



      document.getElementById("img3").src = "https://upload.wikimedia.org/wikipedia/commons/4/41/Paris_theatre_de_la_Renaissance.jpg"

    }



    else {

      if (document.getElementById("img3").src === "https://upload.wikimedia.org/wikipedia/commons/4/41/Paris_theatre_de_la_Renaissance.jpg") {



        document.getElementById("img3").src = "https://upload.wikimedia.org/wikipedia/commons/e/e7/Le_Trianon_Paris%2C_salle_de_th%C3%A9%C3%A2tre_vue_depuis_la_sc%C3%A8ne.jpg"

      }



      else {

        if (document.getElementById("img3").src === "https://upload.wikimedia.org/wikipedia/commons/e/e7/Le_Trianon_Paris%2C_salle_de_th%C3%A9%C3%A2tre_vue_depuis_la_sc%C3%A8ne.jpg") {



          document.getElementById("img3").src = "https://live.staticflickr.com/6206/6099623506_fc608ae5ac_b.jpg"

        }

      }

    }

  }

}



btnD3.addEventListener('click', autre_img3);





















var btnF1 = document.querySelector("#butonfavoris1");

var fav = document.querySelector("#tableauFav");





function ajouter_fav() {

  if (btnF1.value === '🤍'){

    btnF1.value = '🖤';

  document.getElementById("favComedie").className = "noir";



  } else {

    btnF1.value = '🤍';

  document.getElementById("favComedie").className = "blanc";

  }



}



btnF1.addEventListener('click', ajouter_fav);



  // cette fonction permet de changer la couleur des theatres dans le tableau dans une couleur qui permet de voir le theatre en question lorsque c'est voulu







var btnF2 = document.querySelector("#butonfavoris2");



function ajouter_fav2() {

  if (btnF2.value === '🤍'){

    btnF2.value = '🖤';

  document.getElementById("favEdouard").className = "noir";

  } else {

    btnF2.value = '🤍';

  document.getElementById("favEdouard").className = "blanc";

  }

}



btnF2.addEventListener('click', ajouter_fav2);







var btnF3 = document.querySelector("#butonfavoris3");



function ajouter_fav3() {

  if (btnF3.value === '🤍') {

    btnF3.value = '🖤';

  document.getElementById("favParis").className = "noir";

  } else {

    btnF3.value = '🤍';

  document.getElementById("favParis").className = "blanc";

  }





}



btnF3.addEventListener('click', ajouter_fav3);

function popupimg() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
