(function($) {
  "use strict"; // Start of use strict

  jQuery(function(){
      jQuery("#P1").YTPlayer();
    });
  //$('#directional-icons').css("display", "none");


})(jQuery); // End of use strict
//$('.ml7 .letters').css("display", "none").css("display", "inline-block");
//$('#directional-icons').hide().delay(2000).show();
//$('#directional-icons').fadeOut();
//$('#directional-icons').fadeIn(3000);

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

/*function FaireClignoterImage (){ 
   $("#test").fadeOut(200).delay(50).fadeIn(500); 
} */


$( document ).ready(function() {




function FaireClignoterImage (){
  $("#directional-icons").fadeOut(200).stop().fadeIn(500);
};
setInterval('FaireClignoterImage()',1000);

/*setTimeout(function() {
  $('#directional-icons').css("display", "block");

}, 2000);*/



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
});

var popUps = new Vue({
  el: '#pop-Ups',
  data: {
    items: [
      { 
        title: "Mode d'emploi",
        message: "Ici toutes les règles des activités",
        image : 'image24'
      },
      { 
        title: "L'histoire du foot",
        message: "Le Football d'hier à aujourd'hui",
        image : 'image9'
      },
      { 
        title: 'Stop Motion',
        message: "Ce que l'on peut faire avec un ciseau et une caméra" ,
        image : 'image32'
      },
    ]
  }
});

var popUps2 = new Vue({
  el: '#pop-Ups2',
  data: {
    items2: [
      { 
        title: 'La dictée',
        message: "Mémoriser et travailler l'orthographe",
        image : 'image17',
        link : 'http://foot.banlieues-creatives.org/dictee.pdf',
      },
      { 
        title: 'Votre équipe de Football (JEU)',
        message: 'Imaginer et créer à votre envie',
        image : 'image1',
        link : 'http://foot.banlieues-creatives.org/jeu_foot/jeu2/index.html',
      },
      { 
        title: 'Dessiner et Envoyer à votre joueur (JEU)',
        message: 'Faire preuve de créativité',
        image : 'image25',
        link : 'http://foot.banlieues-creatives.org/jeu_foot/jeu1/page1.html',
      },
      
    ]
  }
});
