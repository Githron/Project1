// .moreDetail {
//     font-weight: 350;
//     line-height: 1.75;
//     margin-top: 35px;
//     margin-bottom: 75px;
//     transition: all 1s ease-out;
//     opacity: 0;
//     transform: translateY(-70%);
//     visibility: hidden;
//     display: none;
// }

// .moreDetail.open {
//     transition: all 1s ease-out;
//     transform: translateY(0);
//     visibility: visible;
//     opacity: 1;
// }

// document.addEventListener("DOMContentLoaded", function() {
//     var moreDetail = document.querySelector(".moreDetail");
//     var hideX = document.querySelector(".hideX");
//     var clickMore = document.querySelector(".clickMore");

//     hideX.addEventListener("click", function() {
//         if (moreDetail.classList.contains("open")) {
//             moreDetail.style.opacity = "0";
//             moreDetail.classList.remove("open");
//             setTimeout(function() {
//                 moreDetail.style.display = "none";
//                 clickMore.style.display = "block";
//             }, 1000);
//         } else {
//             moreDetail.style.display = "block";
//             moreDetail.classList.add("open");
//             moreDetail.style.opacity = "1";
//             clickMore.style.display = "none";
//         }
//     });
// });

//typewriter effects starts here
// const textDisplay = document.getElementById("span1");
// const phrases = ["CREATIVE.", "AWARD-WINNING.", "UNIQUE."];
// let i = 0;
// let j = 0;
// let currentPhrase = [];
// let isDeleting = false;
// let isEnd = false;

// function loop() {
//     isEnd = false;
//     textDisplay.innerHTML = currentPhrase.join("");

//     if (i < phrases.length) {
//         if (!isDeleting && j <= phrases[i].length) {
//             currentPhrase.push(phrases[i][j]);
//             j++;
//             textDisplay.innerHTML = currentPhrase.join("");
//         }

//         if (isDeleting && j <= phrases[i].length) {
//             currentPhrase.pop(phrases[i][j]);
//             j--;
//             textDisplay.innerHTML = currentPhrase.join("");
//         }

//         if (j == phrases[i].length) {
//             isEnd = true;
//             isDeleting = true;
//         }

//         if (isDeleting && j === 0) {
//             currentPhrase = [];
//             isDeleting = false;
//             i++;
//             if (i === phrases.length) {
//                 i = 0;
//             }
//         }
//     }
//     const spedUp = Math.random() * (80 - 50) + 50;
//     const normalSpeed = Math.random() * (300 - 200) + 100;
//     const time = isEnd ? 3000 : isDeleting ? spedUp : normalSpeed;
//     setTimeout(loop, time);
// }

// loop();
//typewriter effects ends here



const textDisplay = document.getElementById("span1");
const phrases = [
    "CREATIVE.",
    "AWARD-WINNING.",
    "UNIQUE.",
];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
    isEnd = false;
    textDisplay.innerHTML = currentPhrase.join("");

    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
            textDisplay.innerHTML = currentPhrase.join("");
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j]);
            j--;
            textDisplay.innerHTML = currentPhrase.join("");
        }

        if (j == phrases[i].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            setTimeout(function(){
                currentPhrase = [];
                isDeleting = false;
                i++;
                if (i === phrases.length) {
                    i = 0;
                }
            }, 300);  //wait after deleted
        }
    }
    const spedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 100;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time);
}

loop();





//jQuery slide in/out up/down
$(document).ready(function () {
    $(".hideX").click(function () {
        if ($(".moreDetail").hasClass("open")) {
            // if ($('.moreDetail').css('display') == 'none')
            $(".moreDetail").css("opacity", "0");
            $(".moreDetail").removeClass("open");
            setTimeout(function () {
                $(".moreDetail").css("display", "none");
                $(".clickMore").css("display", "block");
            }, 1000);
        } else {
            $(".moreDetail").css("display", "block");
            $(".moreDetail").animate(
                {
                    opacity: 1,
                },
                1000,
                "linear"
            );
            $(".moreDetail").addClass("open");
            $(".clickMore").css("display", "none");
        }
    });
});

//jQuery slide in/out up/down
$(document).ready(function () {
    $(".hideX2").click(function () {
        if ($(".moreDetail2").hasClass("open")) {
            // if ($('.moreDetail').css('display') == 'none')
            $(".moreDetail2").css("opacity", "0");
            $(".moreDetail2").removeClass("open");
            setTimeout(function () {
                $(".moreDetail2").css("display", "none");
                $(".clickMore2").css("display", "block");
            }, 1000);
        } else {
            $(".moreDetail2").css("display", "block");
            $(".moreDetail2").animate(
                {
                    opacity: 1,
                },
                1000,
                "linear"
            );
            $(".moreDetail2").addClass("open");
            $(".clickMore2").css("display", "none");
        }
    });
});
