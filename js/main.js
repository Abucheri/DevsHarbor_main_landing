 jQuery(document).ready(function(){
     
   "use strict"
    $('.slider').ripples({
      dropRadius: 11,
      perturbance: 0.01,
       
    });
  
     $(".text").typed({
        strings:["<strong>Welcome to Developers</strong><strong class='primary'> Harbor.</strong>",
        "<strong>Connect, Collaborate,</strong><strong class='primary'> and Code!!.</strong>",
      "<strong class='primary>scroll down for more info...</strong>"],
         typespeed:1,
         loop:true
         
     });
     
    $(window).scroll(function(){
        
       var top = $(window).scrollTop();
        if(top>=60){
          $("nav").addClass('secondary'); 
        }
        
        else 
            if($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary'); 
            }
    });

      $('.work').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
      enabled: true
       } 
                               
    });
     
      $("#team-members").owlCarousel({
          items:3,
          autoplay:true,
          smartSpeed:700,
          loop:true,
          autoplayHoverPause:true,
            responsive:{
              0:{

                 items:1
              },
             480:{

                 items:2
              },

             768:{

                 items:3
              }
            }
          
          
          
      });
     $('.counter').counterUp({
                delay: 10,
                time: 4000
            });
     
      $("a.smooth-scroll").click(function (event) {

        event.preventDefault();
        
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
    });
     new WOW().init();
     
 });