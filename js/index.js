$("#anchor1").click(function() {
  $('html, body').animate({
    scrollTop: $("#projects").offset().top
  }, 1000);
});

$("#anchor2").click(function() {
  $('html, body').animate({
    scrollTop: $("footer").offset().top
  }, 1500);
});