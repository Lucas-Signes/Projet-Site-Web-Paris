var butoncolor = document.querySelector('#btncolor');



function changecolor(event) {

  if ( event.target.textContent === "changer en mode sombre" ) {

           event.target.textContent = "changer en mode clair";

  document.body.style.background = 'black';

  document.getElementById("tour_argent").className = "blanc";

  document.getElementById("resto2").className = "blanc";

  document.getElementById("relais").className = "blanc";

        document.getElementById("favArgent").className = "noir";

    document.getElementById("favFallafel").className = "noir";

    document.getElementById("favRelais").className = "noir";

    document.querySelector("#butonfavoris1").value = "🖤";

    document.querySelector("#butonfavoris2").value = "🖤";

    document.querySelector("#butonfavoris3").value = "🖤";

    document.getElementById("tableauFav").className = "blanc";







  }

  else

  {event.target.textContent = "changer en mode sombre";

  document.body.style.background = 'white';

  document.getElementById("tour_argent").className = "noir";

  document.getElementById("resto2").className = "noir";

  document.getElementById("relais").className = "noir";

   document.getElementById("favArgent").className = "blanc";

    document.getElementById("favFallafel").className = "blanc";

    document.getElementById("favRelais").className = "blanc";

    document.querySelector("#butonfavoris1").value = "🤍";

    document.querySelector("#butonfavoris2").value = "🤍";

    document.querySelector("#butonfavoris3").value = "🤍";

    document.getElementById("tableauFav").className = "noir";

  }

}



butoncolor.addEventListener('click', changecolor);







var btn = document.querySelector("#butonargent"); // pour appeler le bouton

var txt = document.querySelector('#tour_argent'); // pour appeler le texte





function updateBtn() { // fonction pour changer la valeur du bouton

  if (btn.value === 'afficher plus') {  // condition si la valeur du bouton est affiché plus

    btn.value = 'afficher moins'; // on change la valeur du bouton

    txt.textContent = "La Tour d’Argent est un restaurant français du 5e arrondissement de Paris, souvent cité comme étant parmi les plus anciens restaurant de France, qu'on prétend avoir été fondé en 1582 par Rourteau. Situé au 15-17, quai de la Tournelle (à l'angle de la rue du Cardinal-Lemoine), il est notamment connu pour la vue panoramique qu'il offre sur la Seine et sur la cathédrale Notre-Dame de Paris de l'île de la Cité. Inventé en 1890 par Frédéric Delair, le « canard Tour d'Argent », numéroté, est fini d'élaborer devant le client et accompagné d'un rituel de service4. Le canard semi-sauvage élevé par la maison Burgaud de Challans en Vendée, est découpé devant le client par un canardier puis la carcasse est pressée dans un pressoir en argent de la Maison Christofle (vendu 9 500 € en boutique) et exsude la dernière goutte dans la sauce (bouillon et foie du canard) à laquelle est ajouté un trait de cognac, de citron et de madère. Les magrets finissent de cuire sur un réchaud. Les pommes soufflées, puis les cuisses grillées, font l'objet de deux services supplémentaires"; // on change la valeur du texte

  } else { // sinon la valeur du bouton est affiché moins

    btn.value = 'afficher plus';

    txt.textContent = "La Tour d’Argent est un restaurant français du 5e arrondissement de Paris, souvent cité comme étant parmi les plus anciens restaurant de France, qu'on prétend avoir été fondé en 1582 par Rourteau. Situé au 15-17, quai de la Tournelle (à l'angle de la rue du Cardinal-Lemoine), il est notamment connu pour la vue panoramique qu'il offre sur la Seine et sur la cathédrale Notre-Dame de Paris de l'île de la Cité."; // on change la valeur du texte

  }

}







btn.addEventListener('click', updateBtn); // on active la fonction lorsqu'on appuie sur le bouton







var btn2 = document.querySelector("#butonresto2");

var txt2 = document.querySelector('#resto2');



function updateBtn2() {

  if (btn2.value === 'afficher plus') {

    btn2.value = 'afficher moins';

    txt2.textContent = "Tant pis encore si la réservation reste toujours impossible, et tant pis encore si il faut parfois patienter un bon moment pour obtenir l'une des petites tables où l'on peut se retrouver au coude à coude avec un illustre inconnu... ou même parfois avec Youri Djorkaeff, Lenny Kravitz, Arthur, Alabina ou Vanessa Paradis, qui ont ici leurs habitudes.La récompense est au bout de cette patience : des fallafels au top du genre. Mais la carte ne se limite quand même pas aux fallafels, et propose également une irréprochable cuisine israëlo-orientale cacher sous le contrôle du Beth-Din : foie haché, poivrons grillés, schawarma, chiche kebab, gâteau au pavot et strudel de pommes. Quelques vins casher, israéliens ou français, vous sont également proposés mais la boisson officielle est ici une excellente citronnade maison. Comptez environ 25 € hors boissons.";

  } else {

    btn2.value = 'afficher plus';

    txt2.textContent = "Tant pis encore si la réservation reste toujours impossible, et tant pis encore si il faut parfois patienter un bon moment pour obtenir l'une des petites tables où l'on peut se retrouver au coude à coude avec un illustre inconnu... ou même parfois avec Youri Djorkaeff, Lenny Kravitz, Arthur, Alabina ou Vanessa Paradis, qui ont ici leurs habitudes.";

  }

}







btn2.addEventListener('click', updateBtn2);









var btn3 = document.querySelector("#butonrelais");

var txt3 = document.querySelector('#relais');





function updateBtn3() {

  if (btn3.value === 'afficher plus') {

    btn3.value = 'afficher moins';

    txt3.textContent = "De Neuilly à Saint Germain… Tout le beau monde parisien est encore à la recherche de l’ingrédient secret de la divine sauce de « l’Entrecôte », le monument historique de la viande addictive et sans chichi où les Américains de passage, les PDG du CAC et les acteurs se bousculent au portillon… Au programme : pas de réservation et comme d'habitude, leur menu unique : une salade de noix en entrée puis du faux filet tendrissime +  une divine sauce magique un peu verte + frites dorées et craquantes à souhait le tout servi en deux fournées par des petites dames en tablier. Authentique is chic !";

  } else {

    btn3.value = 'afficher plus';

    txt3.textContent = "De Neuilly à Saint Germain… Tout le beau monde parisien est encore à la recherche de l’ingrédient secret de la divine sauce de « l’Entrecôte », le monument historique de la viande addictive et sans chichi où les Américains de passage, les PDG du CAC et les acteurs se bousculent au portillon…";

  }

}







btn3.addEventListener('click', updateBtn3);









var btnD1 = document.querySelector("#butondefile1");





function autre_img1() {



  if (document.getElementById("img1").src === "https://upload.wikimedia.org/wikipedia/commons/e/ed/Tour_dArgent_crop_blur_900_wiki_Img_2171.jpg") {



    document.getElementById("img1").src = "https://live.staticflickr.com/2386/2248470959_71da6c8c44_b.jpg";



  }

  else {



    if (document.getElementById("img1").src === "https://live.staticflickr.com/2386/2248470959_71da6c8c44_b.jpg") {



      document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/0/01/Tour_d%27Argent_D170712_07_-_Caneton_de_Challans.jpg"

    }



    else {

      if (document.getElementById("img1").src === "https://upload.wikimedia.org/wikipedia/commons/0/01/Tour_d%27Argent_D170712_07_-_Caneton_de_Challans.jpg") {



        document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/f/fb/La_Tour_d%27Argent%2C_Paris_201305091D0169_%288752786424%29.jpg"

      }



      else {

        if (document.getElementById("img1").src === "https://upload.wikimedia.org/wikipedia/commons/f/fb/La_Tour_d%27Argent%2C_Paris_201305091D0169_%288752786424%29.jpg") {



          document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/e/ed/Tour_dArgent_crop_blur_900_wiki_Img_2171.jpg"

        }

      }

    }

  }

}



btnD1.addEventListener('click', autre_img1); // dans cette fonction on appelle une image grace a son id et on change la source de cette image pour la modifier













var btnD2 = document.querySelector("#butondefile2");





var btnD2 = document.querySelector("#butondefile2");



function autre_img2() {



  if (document.getElementById("img2").src === "https://live.staticflickr.com/2464/3899124124_6432acc768_b.jpg") {



    document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/7/75/As_du_falafel_Paris_Le_Marais.jpg";



  }

  else {



    if (document.getElementById("img2").src === "https://upload.wikimedia.org/wikipedia/commons/7/75/As_du_falafel_Paris_Le_Marais.jpg") {



      document.getElementById("img2").src = "https://media-cdn.tripadvisor.com/media/daodao/photo-s/0e/46/9c/2d/photo0jpg.jpg"

    }



    else {

      if (document.getElementById("img2").src === "https://media-cdn.tripadvisor.com/media/daodao/photo-s/0e/46/9c/2d/photo0jpg.jpg") {



        document.getElementById("img2").src = "https://media-cdn.tripadvisor.com/media/photo-p/1a/44/13/c8/photo2jpg.jpg"

      }



      else {

        if (document.getElementById("img2").src === "https://media-cdn.tripadvisor.com/media/photo-p/1a/44/13/c8/photo2jpg.jpg") {



          document.getElementById("img2").src = "https://live.staticflickr.com/2464/3899124124_6432acc768_b.jpg"

        }

      }

    }

  }

}



btnD2.addEventListener('click', autre_img2);









var btnD3 = document.querySelector("#butondefile3");





function autre_img3() {



  if (document.getElementById("img3").src === "http://www.relaisentrecote.fr/wp-content/uploads/2014/05/marbeuf_accptt11.jpg") {



    document.getElementById("img3").src = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Entrec%C3%B4te_frites.jpg";



  }

  else {



    if (document.getElementById("img3").src === "https://upload.wikimedia.org/wikipedia/commons/8/8c/Entrec%C3%B4te_frites.jpg") {



      document.getElementById("img3").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_HjLScQ_sgZuuNnVkiKWMdIW-09pCDMD4gYya2ChHMoh3FQ_Xj9PnlaSGs6Hf_pnb7o&usqp=CAU"

    }



    else {

      if (document.getElementById("img3").src === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_HjLScQ_sgZuuNnVkiKWMdIW-09pCDMD4gYya2ChHMoh3FQ_Xj9PnlaSGs6Hf_pnb7o&usqp=CAU") {



        document.getElementById("img3").src = "https://media-cdn.tripadvisor.com/media/photo-s/1a/ca/8e/8d/relais-de-l-entrecote.jpg"

      }



      else {

        if (document.getElementById("img3").src === "https://media-cdn.tripadvisor.com/media/photo-s/1a/ca/8e/8d/relais-de-l-entrecote.jpg") {



          document.getElementById("img3").src = "http://www.relaisentrecote.fr/wp-content/uploads/2014/05/marbeuf_accptt11.jpg"

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

  document.getElementById("favArgent").className = "noir";



  } else {

    btnF1.value = '🤍';

  document.getElementById("favArgent").className = "blanc";

  }



}



btnF1.addEventListener('click', ajouter_fav);



// cette fonction permet de changer la couleur des theatres dans le tableau dans une couleur qui permet de voir le theatre en question lorsque c'est voulu





var btnF2 = document.querySelector("#butonfavoris2");



function ajouter_fav2() {

  if (btnF2.value === '🤍'){

    btnF2.value = '🖤';

  document.getElementById("favFallafel").className = "noir";

  } else {

    btnF2.value = '🤍';

  document.getElementById("favFallafel").className = "blanc";

  }

}



btnF2.addEventListener('click', ajouter_fav2);



var btnF3 = document.querySelector("#butonfavoris3");



function ajouter_fav3() {

  if (btnF3.value === '🤍') {

    btnF3.value = '🖤';

  document.getElementById("favRelais").className = "noir";

  } else {

    btnF3.value = '🤍';

  document.getElementById("favRelais").className = "blanc";

  }





}



btnF3.addEventListener('click', ajouter_fav3);

function popupimg() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
