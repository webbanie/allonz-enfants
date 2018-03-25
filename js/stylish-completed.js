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
        title: 'Stationary',
        message: 'A yellow pencil with envelopes on a clean, blue backdrop!',
        image : 'image4'
      },
      { 
        title: 'Stationary',
        message: 'A yellow pencil with envelopes on a clean, blue backdrop!',
        image : 'image32'
      },
      { 
        title: 'Stationary',
        message: 'A yellow pencil with envelopes on a clean, blue backdrop!',
        image : 'image16'
      },
      { 
        title: 'Stationary',
        message: 'A yellow pencil with envelopes on a clean, blue backdrop!',
        image : 'image1'
      },
      { 
        title: 'Stationary',
        message: 'A yellow pencil with envelopes on a clean, blue backdrop!',
        image : 'image25'
      },
      
    ]
  }
})

