//THIS IS JQUERY div id = link anchor hrrf function
$(document).ready(function () {

    
    $("#link3").click(function () {
        window.location.href =
            "https://mern-quiz-frontend.onrender.com/";
    });

    $("#link4").click(function () {
        window.location.href =
            "https://githron.github.io/RonDev/space-tourism-website-main/starter-code/";
    });

    // ............

    $("#link").click(function () {
        window.location.href =
            "https://githron.github.io/romelolacida.com/YT%20Clone/";
    });

    $("#link2").click(function () {
        window.location.href =
            "https://githron.github.io/Project1/quiz-app%20frontEnd/";
    });

    $(".botton").click(function () {
        window.location.href = "index.html";
    });

    $("#aboutLink").click(function () {
        window.location.href = "about.html";
    });

    $("#contactLink").click(function () {
        window.location.href = "contact.html";
    });

    $(".l1").click(function () {
        window.location.href = "mailto:lacidaromelo@gmail.com";
    });

    $(".l2").click(function () {
        window.location.href =
            "https://www.facebook.com/ron.lacida?mibextid=ZbWKwL";
    });

    $(".l3").click(function () {
        window.location.href = "https://www.fiverr.com/share/yprPoG";
    });

    $(".l4").click(function () {
        window.location.href = "https://www.frontendmentor.io/profile/Githron";
    });
});
//end

// @keyframes fadeIn {
//     0% {opacity: 0;}
//     100% {opacity: 1;}
// }

// @keyframes fadeOut {
//     0% {opacity: 1;}
//     100% {opacity: 0;}
// }

//NavBar Menu visible when scrollUp else hidden
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
//end

//Oberver Intersection animate Content when visible on scrolling
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
// Home Page
const artistImgElements = document.querySelectorAll(".boxIn");
artistImgElements.forEach((element) => {
    observer.observe(element);
});
//Project page Scroll animate
const boxAnime = document.querySelectorAll(".box");
boxAnime.forEach((element) => {
    observer.observe(element);
});
//end

//Javascript Mouse hover
// const boxes = document.querySelectorAll(".box");
// const defaultColor = boxes[0].style.backgroundColor;
// const hR = document.querySelector(".hR");
// const cColor = document.querySelector(".pCenter");
// const bColor = document.querySelector(".pBelow");

// boxes.forEach((box) => {
//     box.addEventListener("mouseover", function () {
//         box.style.backgroundColor = "#1f232f";
//         this.querySelector(".hR").style.height = "2px";
//         this.querySelector(".hR").style.backgroundColor = "rgb(126, 187, 242)";
//         this.querySelector(".pCenter").style.color = "white";
//         this.querySelector(".pBelow").style.color = "white";
//     });
//     box.addEventListener("mouseout", function () {
//         box.style.backgroundColor = defaultColor;
//         this.querySelector(".hR").style.height = "1px";
//         this.querySelector(".hR").style.backgroundColor = "gray";
//         this.querySelector(".pCenter").style.color = "#1f232f";
//         this.querySelector(".pBelow").style.color = "#1f232f";
//     });
// });

//end
