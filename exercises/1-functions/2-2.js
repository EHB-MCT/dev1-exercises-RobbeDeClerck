"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

let margin = 50;
let sizeSquare = 600;

let colorRandom;
let colorRandomTwo;
let colorRandomThree;
let colorSum;

for(var i = 0; i<8;i++){
    drawRandomColors(margin, sizeSquare, colorSum);
}

function drawRandomColors(startpos, size, color){

    let colorRandom = Math.floor(Math.random() * 9);
    let colorRandomTwo = Math.floor(Math.random() * 9);
    let colorRandomThree = Math.floor(Math.random() * 9);
    let colorSum = "#" + colorRandom + colorRandom + colorRandomTwo + colorRandomTwo + colorRandomThree + colorRandomThree;
    
    context.beginPath();
    context.rect(startpos, startpos, size, size);
    context.fillStyle = color;
    context.fill();

    console.log(context.fillStyle = colorSum);
    margin += 50;
    sizeSquare -= 100;

}