"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let rectangleSmallWidth = window.innerWidth/3;
let rectangleSmallHeight = window.innerHeight/2;

drawPattern(0, 0 + (rectangleSmallHeight), "lightblue", rectangleSmallWidth, rectangleSmallHeight * 1);
drawPattern(0, 0, "darkblue", rectangleSmallWidth, rectangleSmallHeight * 1.5);
drawPattern(0 + (rectangleSmallWidth * 2), 0 + (rectangleSmallHeight), "lightblue", rectangleSmallWidth, rectangleSmallHeight * 1);
drawPattern(0 + (rectangleSmallWidth * 2), 0, "darkblue", rectangleSmallWidth, rectangleSmallHeight * 1.5);
drawPattern(0 + (rectangleSmallWidth * 1), 0, "lightgray", rectangleSmallWidth, rectangleSmallHeight * 2);
drawPattern(0, 200, "red", rectangleSmallWidth * 3, rectangleSmallHeight / 1.5);

function drawPattern(x,y, color, squareWidth, squareHeight){    
    context.beginPath();
    context.rect(x, y, squareWidth, squareHeight);
    context.fillStyle = color;
    context.fill();
}