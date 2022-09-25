$(document).ready(function(){

    $(window).scroll(function(){
        // scroll-up button show/hide script start
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
        // scroll-up button show/hide script end

// -----------------------------------------------------------------

    // slide-up script start
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    // slide-up script end

// -----------------------------------------------------------------

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

// -----------------------------------------------------------------

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

// -----------------------------------------------------------------

    // typing text animation script start
    var typed = new Typed(".typing", {
        strings: ["Front end developer", "Back end developer", "Web enthusiast", "Coder"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Front end developer", "Back end developer", "Web enthusiast", "Coder"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // typing text animation script end

// -----------------------------------------------------------------

 // owl carousel script start 
 $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 3,
            nav: false
        },
        1000:{
            items: 5,
            nav: false
        }
    }
});
 // owl carousel script end 

// ----------------------------------------------------------------------------------
});


