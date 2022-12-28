
const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]
const artistButton = document.getElementsByClassName('artist-btn')[0]
const homeButton = document.getElementsByClassName('home-btn')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})



artistButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

homeButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})