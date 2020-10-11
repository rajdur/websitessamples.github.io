$(document).ready(function () {
    $(".button-collapse").sideNav();
  });
        
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});
$("#test").carousel({fullWidth:true});

setInterval(() => {
  $("#test").carousel('next');
}, 3000);
window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
    var element = document.getElementById("navbar")
   if (document.body.scrollTop >100 || document.documentElement.scrollTop >100) {
      element.classList.add("header")
    
   } else {
     element.classList.remove("header")
     
 
   }
 }