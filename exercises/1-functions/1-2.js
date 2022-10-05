"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawRectangles();

function drawRectangles(){

    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "red";

    context.moveTo(50, 50);
    context.lineTo(200, 200);   
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "red";

    context.moveTo(200, 50);
    context.lineTo(50, 200);   
    context.stroke();


    context.lineWidth = 5;
    context.strokeStyle = "black";

    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(200, 50);
    context.lineTo(200, 200);
    context.lineTo(50, 200);
    context.lineTo(50, 50);
    context.stroke();




}