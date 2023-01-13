
// @keyframes fadeIn {
//     0% {opacity: 0;}
//     100% {opacity: 1;}
// }

// @keyframes fadeOut {
//     0% {opacity: 1;}
//     100% {opacity: 0;}
// }



let element = document.getElementById("target-div");
let previousScroll = window.pageYOffset;

window.addEventListener("scroll", () => {
    // Get the current scroll position
    const currentScroll = window.pageYOffset;
  
    // Check if the user is scrolling up
    if (currentScroll < previousScroll) {
      element.style.display = "block";
      element.style.animation = "fadeIn .8s ease-in-out forwards";
    } else {
      element.style.display = "none";
    }
  
    // Update the previous scroll position
    previousScroll = currentScroll;
});





// Oberver Intersection animate when scrolling
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.10) {
      // The element is visible on at least 25% of the view
      entry.target.style.animationPlayState = "running";
    } else {
      entry.target.style.animationPlayState = "paused";
    }
  });
}, { threshold: [0.10] });
const artistImgElements = document.querySelectorAll(".boxIn");
artistImgElements.forEach(element => {
  observer.observe(element);
});



// hover
const box = document.querySelector('.box');
const defaultColor = box.style.backgroundColor;
const hR = document.querySelector('.hR');
const cColor = document.querySelector('.pCenter');
const bColor = document.querySelector('.pBelow');



box.addEventListener('mouseover', function() {
  box.style.backgroundColor = '#1f232f';
  hR.style.height = '2px';
  hR.style.backgroundColor = 'rgb(126, 187, 242)';
  cColor.style.color = 'white';
  bColor.style.color = 'white';
});

box.addEventListener('mouseout', function() {
  box.style.backgroundColor = defaultColor;
  hR.style.height = '1px';
  hR.style.backgroundColor = 'gray';
  cColor.style.color = '#1f232f';
  bColor.style.color = '#1f232f';
});

// hR.style.Color = 'rgb(126, 187, 242)';