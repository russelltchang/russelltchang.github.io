$("#down").click(function() {
  $('html, body').animate({
    scrollTop: $("#projects").offset().top
  }, 1000);
});

$("#about").click(function() {
  $('html, body').animate({
    scrollTop: $("#about")
  }, 1000);
});

$("#work").click(function() {
  $('html, body').animate({
    scrollTop: $("#projects").offset().top
  }, 1000);
});

$("#contact").click(function() {
  $('html, body').animate({
    scrollTop: $("footer").offset().top
  }, 1500);
});

var animateHTML = {
  init: function() {
    this.addEventHandlers();
  },
  addEventHandlers : function() {
    window.addEventListener('scroll', this.checkPosition)
    window.addEventListener('resize', this.init)
  },
  checkPosition : function() {
    var elems = document.getElementsByClassName("hidden");
    var h = window.innerHeight;
    for (var i=0; i<elems.length; i++) {
      var posFromTop = elems[i].getBoundingClientRect().top
      if (posFromTop - h <= 0) {
        elems[i].className = elems[i].className.replace('hidden', 'images')
      }
    }
  } 
}

animateHTML.addEventHandlers();