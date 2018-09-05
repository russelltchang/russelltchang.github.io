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