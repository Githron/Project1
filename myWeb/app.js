


//THIS IS JQUERY div id = link
$("#link").click(function(){
  window.location.href = "https://githron.github.io/romelolacida.com/YT%20Clone/";
});




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
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio >= 0.1) {
                // The element is visible on at least 25% of the view
                entry.target.style.animationPlayState = "running";
            } else {
                entry.target.style.animationPlayState = "paused";
            }
        });
    },
    { threshold: [0.1] }
);
const artistImgElements = document.querySelectorAll(".boxIn");
artistImgElements.forEach((element) => {
    observer.observe(element);
});
const boxAnime = document.querySelectorAll(".box");
boxAnime.forEach((element) => {
  observer.observe(element);
});




//for PROJECT PAGES
// Oberver Intersection animate when scrolling





// // hover initial
// // Javascript
const boxes = document.querySelectorAll(".box");
const defaultColor = boxes[0].style.backgroundColor;
const hR = document.querySelector(".hR");
const cColor = document.querySelector(".pCenter");
const bColor = document.querySelector(".pBelow");


boxes.forEach(box => {
  box.addEventListener("mouseover", function () {
      box.style.backgroundColor = "#1f232f";
      this.querySelector(".hR").style.height = "2px";
      this.querySelector(".hR").style.backgroundColor = "rgb(126, 187, 242)";
      this.querySelector(".pCenter").style.color = "white";
      this.querySelector(".pBelow").style.color = "white";
  });
  box.addEventListener("mouseout", function () {
      box.style.backgroundColor = defaultColor;
      this.querySelector(".hR").style.height = "1px";
      this.querySelector(".hR").style.backgroundColor = "gray";
      this.querySelector(".pCenter").style.color = "#1f232f";
      this.querySelector(".pBelow").style.color = "#1f232f";
  });
});
