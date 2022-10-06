$(document).ready(function () {
  $(window).scroll(function () {
    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Front end developer",
      "Back end developer",
      "Web enthusiast",
      "Coder",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Front end developer",
      "Back end developer",
      "Web enthusiast",
      "Coder",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

