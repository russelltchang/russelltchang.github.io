$(document).ready(function() {

  $("#down").click(function() {
    $('html, body').animate({
      scrollTop: $(".portfolio").offset().top 
    }, 800);
  }); 

  $("#about").click(function() {
    $('html, body').animate({
      scrollTop: $(".about").offset().top-10 // -10 to respect padding
    }, 400);
  });
    
  $("#portfolio").click(function() {
    $('html, body').animate({
      scrollTop: $(".portfolio").offset().top 
    }, 800);
  }); 
    
  $("#contact").click(function() {
    $('html, body').animate({
      scrollTop: $(".contact").offset().top
    }, 1000);
  });
    
});