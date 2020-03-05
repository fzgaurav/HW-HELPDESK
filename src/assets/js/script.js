
$(document).ready(function(){
   

    $('.owl-carousel.hero-home-banner').owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      navText: [
        "<i class='fa fa-caret-left'></i>",
        "<i class='fa fa-caret-right'></i>"
      ],
      autoplay: false,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2
        },
        577:{
          items: 4
        },
        1000: {
          items: 6
        },
        1110:{
          items:6
        }
      }
    });
 
});

