

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