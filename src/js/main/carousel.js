$( document ).ready(function() {
    $('.owl-forth .owl-carousel').owlCarousel({
      loop:true,
      margin:30,
    //   nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
      }
    });

    $('.partners .owl-carousel').owlCarousel({
      loop:true,
      margin:30,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2,
          nav:true
        },
        1000:{
          items:3
        }
      }
    });

    $('.owl-2 .owl-carousel').owlCarousel({
      autoplay: ($('.owl-2 .item').length > 2),
      mouseDrag: ($('.owl-2 .item').length > 2),
      loop:($('.owl-2 .item').length > 2),
      margin:0,
      nav: ($('.owl-2 .item').length > 2),
      dots: false,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2,
          nav:true
        },
        1000:{
          items:2
        }
      }
    });

    $('.owl-preferences .owl-carousel').owlCarousel({
      autoplay: ($('.owl-preferences .item').length > 4),
      mouseDrag: ($('.owl-preferences .item').length > 4),
      loop: ($('.owl-preferences .item').length > 4),
      margin:30,
      nav: ($('.owl-preferences .item').length > 4),
      dots: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
      }
    });

    // var totalItems = $('.owl-2 .item').length;

    // if (totalItems <= 2) {
    //   var isLooped = false;
    //   var isNav = false;
    // } 
    // else {
    //   var isLooped = true;
    //   var isNav = true;
    // }

    // var totalItems_preferences = $('.owl-preferences .item').length;

    // if (totalItems_preferences <= 4) {
    //   var isLooped = false;
    //   var isNav = false;
    // } 
    // else {
    //   var isLooped = true;
    //   var isNav = true;
    // }
  });