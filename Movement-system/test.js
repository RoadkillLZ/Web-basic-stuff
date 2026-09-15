
const leftbtn = document.getElementById("left");
const rightbtn = document.getElementById("right");
const ball = document.getElementById("ball");

let posX = 9; /* changeable */

leftbtn.onclick = function() {
ball.style.left -= 10 + "px";
};

rightbtn.onclick = function() {
ball.style.left += 10 + "px";
};