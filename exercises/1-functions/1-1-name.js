"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName(){

    context.lineWidth = 5;
    context.strokeStyle = "red";
    //vorm start (tekening)
    context.beginPath();
    context.rect(0, 0, 400, 500);
    context.stroke();
    context.fill();

}