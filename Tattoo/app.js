
window.addEventListener("load", function() {
  var preloader = document.getElementById("preloader");
  setTimeout(function() {
    preloader.style.display = "none";
  }, 200); // milliseconds
  });
  

var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function toggle() {
    var element = document.getElementById("myDiv");
    if (element.style.opacity == 0) {
      element.style.display = 'flex';
      element.style.opacity = 0;
      setTimeout(function() {
        element.style.opacity = .95;
      }, 10);
    } else {
      setTimeout(function() {
        element.style.display = 'none';
      }, 1000);
      element.style.opacity = 0;
    }
  }