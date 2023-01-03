const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]
const artistButton = document.getElementsByClassName('artist-btn')[0]
const homeButton = document.getElementsByClassName('home-btn')[0]
const aboutButton = document.getElementsByClassName('about-btn')[0]
const galleryButton = document.getElementsByClassName('gallery-btn')[0]



toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

galleryButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

artistButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

homeButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

aboutButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

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
