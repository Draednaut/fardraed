// This is the custom javascript file 

jQuery(document).ready(function($) {
    "use strict";

    // === Header Menu Button ===
    $('#menu-button').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('close-icon');
        $('#main-nav').toggleClass('fade');
    });
    $('#main-nav').on('click',function(){
        $('#menu-button').removeClass('close-icon');
        $('#main-nav').removeClass('fade');
    });

    // === LightGallery Home ===
    if ($('#gallery').length>0) {
        $("#gallery").lightGallery();
    }

    
    // === Countdown index.html config ===
    if ($('#countdown-home-1').length>0) {
       $("#countdown-home-1").countdown({
            date: "24 may 2017 12:00:00", // Edit this line
            format: "on"
        },
        function() {
          // This will run when the countdown ends
        });
    }

    // === Countdown track.html config ===
    if ($('#countdown-1').length>0) {
        $("#countdown-1").countdown({
            date: "24 may 2017 12:00:00", // Edit this line
            format: "on"
        },
        function() {
          // This will run when the countdown ends
        });
    }
    if ($('#countdown-2').length>0) {
        $("#countdown-2").countdown({
            date: "24 may 2017 12:00:00", // Edit this line
            format: "on"
        },
        function() {
          // This will run when the countdown ends
        });
    }
 
    // === Form Validation ===
    // Contact Page Form
     if ($('#contact-form').length>0) {
        $('#contact-form').validate({
            rules: {
                email: {
                    required: true,
                    email: true
                }
            }, //end rules
            messages: {
                email: {
                    required: "Please type a e-mail address.",
                    email: "This is not a valid email address."
                }
            }
        });// end validate 
    }
    //
  
    
    // === Responsive Videos ===
    if ($('.embed-video').length>0) {
        $('.embed-video').fitVids();
    }

    // === ScrollTo annimation ===
    $('.scrollTo').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);
        if ($(target).length>0) {
            $('body, html').stop().animate({
                'scrollTop': $(target).offset().top-0
            }, 1000, 'swing', 
            function() {
                window.location.hash = target;
            });
        }
    }); // End Click  

    // === Go to top ===
    $('.go-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    }); 

    // === Header Nav BG ===
    $(window).scroll(function(){
        if($(document).scrollTop() > 150)
        {    
            $('.navigation-bar').addClass('scroll-BG');
        }
        else
        {  
           $('.navigation-bar').removeClass('scroll-BG');
        }
    });

    // === Header Parallax Image Style ===
    $(window).on('scroll', function(){
        var curPos = $(window).scrollTop();
        $('.header-parallax-image').css('background-position', 'center bottom -' + curPos * .8 + 'px');
        //fadePanels(curPos);
    }).scroll();

});// END READY