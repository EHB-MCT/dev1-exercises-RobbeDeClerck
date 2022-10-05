"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName(){

    context.lineWidth = 5;
    context.strokeStyle = "black";

    //R
    context.beginPath();
    context.moveTo(20, 20);
    context.lineTo(20, 100);

    context.moveTo(60, 20);
    context.lineTo(20, 20);

    context.moveTo(60, 20);
    context.lineTo(60, 40);
    context.lineTo(20, 40);

    context.moveTo(60, 100);
    context.lineTo(20, 40);

    context.stroke();

    //O
    context.beginPath();
    context.moveTo(100, 20);
    context.lineTo(150, 20);
    context.lineTo(150, 100);
    context.lineTo(100, 100);
    context.lineTo(100, 20);

    context.stroke();

    //B
    context.beginPath();
    context.moveTo(180, 20);
    context.lineTo(220, 20);

    context.moveTo(180, 65);
    context.lineTo(220, 65);

    context.moveTo(180, 75);
    context.lineTo(240, 75);

    context.moveTo(220, 20);
    context.lineTo(220, 65);

    context.moveTo(240, 75);
    context.lineTo(240, 100);

    context.moveTo(180, 100);
    context.lineTo(180, 20);

    context.moveTo(180, 100);
    context.lineTo(240, 100);

    context.stroke();

    //B

    context.beginPath();
    context.moveTo(280, 20);
    context.lineTo(320, 20);

    context.moveTo(280, 65);
    context.lineTo(320, 65);

    context.moveTo(280, 75);
    context.lineTo(340, 75);

    context.moveTo(320, 20);
    context.lineTo(320, 65);

    context.moveTo(340, 75);
    context.lineTo(340, 100);

    context.moveTo(280, 100);
    context.lineTo(280, 20);

    context.moveTo(280, 100);
    context.lineTo(340, 100);

    context.stroke();

    //E

    context.beginPath();
    context.moveTo(380, 20);
    context.lineTo(380, 100);

    context.moveTo(380, 20);
    context.lineTo(420, 20);

    context.moveTo(380, 60);
    context.lineTo(420, 60);

    context.moveTo(380, 100);
    context.lineTo(420, 100);

    context.stroke();
}