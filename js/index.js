$("#down").click(function() {
  $('html, body').animate({
    scrollTop: $("#about").offset().top
  }, 1000);
});

$("#anchor1").click(function() {
  $('html, body').animate({
    scrollTop: $("#about").offset().top
  }, 1000);
});

$("#anchor2").click(function() {
  $('html, body').animate({
    scrollTop: $("#projects").offset().top
  }, 1000);
});

$("#anchor3").click(function() {
  $('html, body').animate({
    scrollTop: $("footer").offset().top
  }, 1500);
});

$(window).scroll(function() {
  $('#summary').each(function() {
    var bottom_of_object = $(this).position().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > bottom_of_object ) {
      $(this).addClass("animate");     
    }   
  }); 
});