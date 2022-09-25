$(document).ready(function(){
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

       $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
       

});