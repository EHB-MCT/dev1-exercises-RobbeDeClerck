"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawLayers();

function drawLayers(){

    context.beginPath();
    context.lineWidth = 0;
    context.fillStyle = "orange";

    context.rect(50, 50, 250, 300);
    context.fill();

    context.beginPath();
    context.lineWidth = 0;
    context.fillStyle = "blue";

    context.rect(50, 300, 250, 100);
    context.fill();

    context.beginPath();
    context.arc(175, 300, 75, 0, Math.PI,true);
    context.fillStyle = "yellow";
    context.fill();


}