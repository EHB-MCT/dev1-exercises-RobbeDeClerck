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
    context.ellipse(165, 300, 75, 40, 2* Math.PI / 2, 0, 1 * Math.PI);
    context.fillStyle = "yellow";
    context.fill();


}