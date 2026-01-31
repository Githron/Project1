const boxes = document.querySelectorAll(".box");
const defaultColor = boxes[0].style.backgroundColor;
const hR = document.querySelector(".hR");
const cColor = document.querySelector(".pCenter");
const bColor = document.querySelector(".pBelow");

boxes.forEach((box) => {
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


