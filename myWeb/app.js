
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

