"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

let margin = 50;

let yAxis = 50;

drawLines(margin);

function drawLines(margin){
    context.beginPath();

    context.moveTo(margin, yAxis);

    context.lineTo(canvas.width - margin, yAxis);
    context.lineTo(margin, yAxis + 100);
    context.lineTo(canvas.width - margin, yAxis + 150);
    context.lineTo(margin, yAxis + 200);
    context.lineTo(canvas.width - margin, yAxis + 250);
    context.lineTo(margin, yAxis + 300);
    context.lineTo(canvas.width - margin, yAxis + 350);
    context.lineTo(margin, yAxis + 400);
    context.lineTo(canvas.width - margin, yAxis + 450);

    context.moveTo(margin, yAxis);
    context.lineTo(canvas.width - margin, yAxis + 450);




    // context.lineTo(400, 50);
    // context.lineTo(50, 100);
    // context.lineTo(400, 150);
    // context.lineTo(50, 200);
    // context.lineTo(400, 250);

    // context.moveTo(50, 50);
    // context.lineTo(400, 250);

    context.stroke();

}