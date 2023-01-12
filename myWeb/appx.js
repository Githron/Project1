



// @keyframes fadeIn {
//     0% {opacity: 0;}
//     100% {opacity: 1;}
// }

// @keyframes fadeOut {
//     0% {opacity: 1;}
//     100% {opacity: 0;}
// }

// let lastScroll = 0;
// let element = document.getElementById("target-div");

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
        element.style.animation = "fadeOut .5s ease-in-out forwards";
        setTimeout(() => {
          element.style.display = 'none';
        }, 500);
    } else {
        element.style.display = 'block';
        element.style.animation = "fadeIn .5s ease-in-out forwards";
    }
    lastScroll = currentScroll;
});





// let lastScroll = 0;
// let element = document.getElementById("target-div");
// let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// if(isMobile){
//     window.addEventListener("touchmove", function (e) {
//     e.preventDefault();
//     let currentScroll = window.pageYOffset;
//     if (currentScroll > lastScroll) {
//         element.style.animation = "fadeOut .5s ease-in-out forwards";
//         setTimeout(() => {
//           element.style.display = 'none';
//         }, 500);
//     } else {
//         element.style.display = 'block';
//         element.style.animation = "fadeIn .5s ease-in-out forwards";
//     }
//     lastScroll = currentScroll;
// });
// }else{
//     window.addEventListener("scroll", function () {
//     let currentScroll = window.pageYOffset;
//     if (currentScroll > lastScroll) {
//         element.style.animation = "fadeOut .5s ease-in-out forwards";
//         setTimeout(() => {
//           element.style.display = 'none';
//         }, 500);
//     } else {
//         element.style.display = 'block';
//         element.style.animation = "fadeIn .5s ease-in-out forwards";
//     }
//     lastScroll = currentScroll;
// });
// }

// below is same

// let lastScroll = 0;
// let element = document.getElementById("target-div");

// window.addEventListener("touchmove", function (e) {
//     e.preventDefault();
//     let currentScroll = window.pageYOffset;
//     if (currentScroll > lastScroll) {
//         element.style.animation = "fadeOut .5s ease-in-out forwards";
//         setTimeout(() => {
//           element.style.display = 'none';
//         }, 500);
//     } else {
//         element.style.display = 'block';
//         element.style.animation = "fadeIn .5s ease-in-out forwards";
//     }
//     lastScroll = currentScroll;
// });

let lastScroll = 0;
let element = document.getElementById("target-div");

window.addEventListener("touchmove", function (e) {
    let currentScroll = window.pageYOffset;
    let scrollDirection;
    if (currentScroll > lastScroll) {
        scrollDirection = "down";
    } else if (currentScroll < lastScroll) {
        scrollDirection = "up";
    }
    if ((currentScroll === 0 || currentScroll + window.innerHeight === document.body.scrollHeight) && (scrollDirection)) {
        e.preventDefault();
        if (scrollDirection === "down") {
            element.style.animation = "fadeOut .5s ease-in-out forwards";
            setTimeout(() => {
                element.style.display = 'none';
            }, 500);
        } else if (scrollDirection === "up") {
            element.style.display = 'block';
            element.style.animation = "fadeIn .5s ease-in-out forwards";
        }
        lastScroll = currentScroll;
    }
});




// let lastScroll = 0;
// let element = document.getElementById("target-div");
// let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// if(isMobile){
//     window.addEventListener("touchmove", handleScroll);
// }else{
//     window.addEventListener("scroll", handleScroll);
// }

// function handleScroll(event) {
//     let currentScroll = window.pageYOffset;
//     if (isMobile) {
//         event.preventDefault();
//     }
//     if (currentScroll > lastScroll) {
//         element.style.animation = "fadeOut .5s ease-in-out forwards";
//         setTimeout(() => {
//           element.style.display = 'none';
//         }, 500);
//     } else {
//         element.style.display = 'block';
//         element.style.animation = "fadeIn .5s ease-in-out forwards";
//     }
//     lastScroll = currentScroll;
// }
