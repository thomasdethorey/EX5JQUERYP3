$(function(){
  var heightWindow = $(window).height(); // initialisation d'une variable avec la hauteur de la fenêtre du navigateur
  var widthWindow = $(window).width(); // initialisation d'une variable avec la largeur de la fenêtre du navigateur
  console.log(heightWindow, widthWindow);
  $(document).keyup(function(event) // A chaque touche du clavier relachée, on exécute la fonction avec le parametre event
  {
    // var leftPosition = parseInt($('div').css('left')); // variable avec la positoin gauche de la div (carré dans l'exercice)
    var leftPosition = $('div').offset().left;
    // var topPosition = parseInt($('div').css('top')); // variable avec la positoin haute de la div (carré dans l'exercice)
    var topPosition = $('div').offset().top;
    console.log(leftPosition, topPosition);
    // exerciceJS/Partie-2/ex3 pour les valeurs unicode des touches du clavier
    // Avec event.which, on a l'unicode de la touche du clavier relaché
    // switch(event.keyCode)
    switch(event.which)
      { // switch est comme un sélecteur, en fonction de l'expression (event.which), il exécute les instructions correspondant à la valeur
        case 37: // flèche gauche
        // en appuyant sur la flèche gauche, event.which est de 37 donc les instructions dans la case 37 sont exécutés, ici déplacment de 10 px sur la gauche
        if(leftPosition > 0) {
        $('div').animate({left: '-=10'}, 'fast'); // animate pour animer la div
      } else { // Mais condition si la div est au bord gauche de la fenetre du navigateur
          $('div').css('left', widthWindow); // on donne une nouvelle position à la div, qui est la largeur de la fenetre du navigateur, donc se retrouvera tout à droite
        }
        break; // break permet de s'assurer que seules les instructions associées à ce cas seront exécutées sinon ça continue...
        case 38: // flèche avant
        if (topPosition > 0) {
        $('div').animate({top: '-=10'}, 'fast');
        } else {
          $('div').css('top', heightWindow);
        }
        break;
        case 39: //flèche droite
        if(leftPosition < widthWindow) {
        $('div').animate({left: '+=10'}, 'fast');
        } else {
          $('div').css('left', 0);
        }
        break;
        case 40: //flèche bas
        if (topPosition < heightWindow) {
        $('div').animate({top: '+=10'}, 'fast');
        } else {
          $('div').css('top', 0);
        }
        break;
      }
  });
});
