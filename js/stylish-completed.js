(function($) {
  "use strict"; // Start of use strict

});

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
})(jQuery); // End of use strict

