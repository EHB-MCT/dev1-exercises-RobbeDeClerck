"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawStar();

function drawStar(){

    context.beginPath();
    context.lineWidth = 6;
    context.strokeStyle = "orange";

    context.rect(50, 50, 300, 300);
    context.stroke();

    context.beginPath();
    //ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise)
    context.ellipse(150, 150, 100, 100, 0.5* Math.PI, 0, 60, false);
    context.fillStyle = "yellow";
    context.fill();

}