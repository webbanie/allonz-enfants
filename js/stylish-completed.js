(function($) {
  "use strict"; // Start of use strict

  jQuery(function(){
      jQuery("#P1").YTPlayer();
    });

})(jQuery); // End of use strict
//$('.ml7 .letters').css("display", "none").css("display", "inline-block");

$('.ml7 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));

});

anime.timeline({loop: false})
  .add({
    offset: 850,
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    //duration: 750,
    easing: "easeOutExpo",
    delay: function(el, i) {
      return 60 * i;
    }
  });

$( document ).ready(function() {
  // Wrap every letter in a span



});

//////vue.js

var app = new Vue({
  el: '#ModalCenter',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var popUps = new Vue({
  el: '#pop-Ups',
  data: {
    items: [
      { 
        title: "L'histoire du foot",
        message: 'Une vidéo illustant la naissance du Football à nos jours',
        image : 'image25'
      },
      { 
        title: 'La dictée',
        message: "Pour mémoriser et travailler l'orthographe",
        image : 'image4'
      },
      { 
        title: 'Stop Motion',
        message: "Ce que l'on peut faire avec un ciseau et une caméra" ,
        image : 'image32'
      },
    ]
  }
})

var popUps2 = new Vue({
  el: '#pop-Ups2',
  data: {
    items2: [
      { 
        title: 'Votre équipe de Football (JEU)',
        message: 'Imaginer et créer à votre envie',
        image : 'image1',
        link : 'http://foot.banlieues-creatives.org/jeu_foot/jeu2/index.html',
      },
      { 
        title: 'Dessine pour les joueurs (JEU)',
        message: 'Faire preuve de créativité et envoyer votre dessin à votre joueur favori',
        image : 'image25',
        link : 'http://foot.banlieues-creatives.org/jeu_foot/jeu1/page1.html',
      },
      
    ]
  }
})

var vm = new Vue({
  data: {
    
  }
})