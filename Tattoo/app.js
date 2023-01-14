//Preloader Gif animation Loading screen

// window.addEventListener("load", function() {
//   var preloader = document.getElementById("preloader");
//   const xelement = document.querySelector('.bakimg');
//   const zelement = document.querySelector('.title-name');
//   const belement = document.querySelector('.fadeX');
//   setTimeout(function() {
//     preloader.style.display = "none";
//     xelement.style.animationPlayState = 'running';
//     zelement.style.animationPlayState = 'running';
//     belement.style.animationPlayState = 'running';
//   }, 1000); // milliseconds
//   });

//animate on preload
  window.addEventListener("load", function() {
    var preloader = document.getElementById("preloader");
    const xelement = document.querySelector('.bakimg');
    const zelement = document.querySelector('.title-name');
    const belement = document.querySelector('.fadeX');
    setTimeout(function() {
      preloader.style.animationPlayState = 'running';
      xelement.style.animationPlayState = 'running';
      zelement.style.animationPlayState = 'running';
      belement.style.animationPlayState = 'running';
      setTimeout(() => {
          preloader.style.display = "none";
      }, 1000);
    }, 0); // milliseconds
  });
  //end
  

// Swiper animate Auto
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
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
  //end


  // Oberver Intersection animate when scrolling
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.25) {
        // The element is visible on at least 25% of the view
        entry.target.style.animationPlayState = "running";
      } else {
        entry.target.style.animationPlayState = "paused";
      }
    });
  }, { threshold: [0.25] });
  const artistImgElements = document.querySelectorAll(".artist-img");
  artistImgElements.forEach(element => {
    observer.observe(element);
  });
//end
  



// Toggle Menu
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
  }//end