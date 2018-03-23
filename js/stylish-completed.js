(function($) {
  "use strict"; // Start of use strict



})(jQuery); // End of use strict



$( document ).ready(function() {
  // Wrap every letter in a span
$('.ml7 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline()
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    //duration: 750,
    //easing: "easeOutExpo",
    delay: function(el, i) {
      return 40 * i;
    }
  });
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

