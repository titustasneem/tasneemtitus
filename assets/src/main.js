/*============================= SKILLS MODAL ============================*/
const modalViews = document.querySelectorAll(".skills__modal"),
  modalBtns = document.querySelectorAll(".skills__button"),
  modalCloses = document.querySelectorAll(".skills__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*============================= SCROLL UP BUTTON ============================*/

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

  /*============================= TYPING EFFECT ============================*/

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

  /*============================= OWL CAROUSEL ============================*/

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: false,
      },
    },
  });
});
