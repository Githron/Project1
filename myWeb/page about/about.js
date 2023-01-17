

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









//jQuery slide in/out up/down
$(document).ready(function () {
    $(".hideX").click(function () {
        if ($(".moreDetail").hasClass("open"))
        // if ($('.moreDetail').css('display') == 'none')
        {
            $(".moreDetail").css("opacity", "0");
            $(".moreDetail").removeClass("open");
        setTimeout(function () {
            $(".moreDetail").css("display", "none");
            $(".clickMore").css("display", "block");
        }, 1000);
        } else {
            $(".moreDetail").css("display", "block");
            $(".moreDetail").animate({
                opacity: 1
            }, 1000, 'linear');
            $(".moreDetail").addClass("open");
            $(".clickMore").css("display", "none");
        }
    });
});




//jQuery slide in/out up/down
$(document).ready(function () {
    $(".hideX2").click(function () {
        if ($(".moreDetail2").hasClass("open"))
        // if ($('.moreDetail').css('display') == 'none')
        {
            $(".moreDetail2").css("opacity", "0");
            $(".moreDetail2").removeClass("open");
        setTimeout(function () {
            $(".moreDetail2").css("display", "none");
            $(".clickMore2").css("display", "block");
        }, 1000);
        } else {
            $(".moreDetail2").css("display", "block");
            $(".moreDetail2").animate({
                opacity: 1
            }, 1000, 'linear');
            $(".moreDetail2").addClass("open");
            $(".clickMore2").css("display", "none");
        }
    });
});