"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawLayers();

function drawLayers(){

    //RED

    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.fillStyle = "lightblue";

    context.rect(50, 50, 350, 350);
    context.stroke();
    context.fill();


    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.lineWidth = 1;
    context.rect(50, 50, 300, 300);
    context.rect(100, 50, 250, 250);
    context.rect(150, 100, 200, 200);
    context.rect(150, 150, 150, 150);
    context.stroke();


}