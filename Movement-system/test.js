
const leftbtn = document.getElementById("left");
const rightbtn = document.getElementById("right");
const ball = document.getElementById("ball");

let posX = 9; /* changeable */

leftbtn.onclick = function() {
posX -= 10
ball.style.left = posX + "px";
};

rightbtn.onclick = function() {
posX += 10
ball.style.left = posX + "px";
};