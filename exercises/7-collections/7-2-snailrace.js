"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


let snailxPos = [50, 50, 50, 50, 50];


setup();
draw();

function setup() {
    context.textAlign = "center";
    context.fillStyle = "white";
}

function draw() {
    let space = height / 5;
    let isMoving = true;

    //backgrounds
    context.fillStyle = "gray";
    context.fillRect(0, 0, width, space);
    context.fillStyle = "darkgray";
    context.fillRect(0, space, width, space);
    context.fillStyle = "gray";
    context.fillRect(0, space * 2, width, space);
    context.fillStyle = "darkgray";
    context.fillRect(0, space * 3, width, space);
    context.fillStyle = "gray";
    context.fillRect(0, space * 4, width, space);

    //

    for(let i = 0; i <= 4; i++){
        snailxPos[i] += Utils.randomNumber(1, 5);
        drawSnail((space/2) + snailxPos[i], i * space + 100, space, i + 1);

        if(snailxPos[i] + 200 >= width){
            isMoving = false;
            context.fillText("Snail n." + (i + 1) + " has won!", width / 2, (space / 2) + (i * space) + 20);
        }
    }

    if(isMoving == true) {
        requestAnimationFrame(draw);
    }



}

function drawSnail(x, y, sizeY, number) {

    let sizeDiff = sizeY / 4 / 5;
    context.beginPath();
    context.fillStyle = "green";
    context.ellipse(x + sizeY / 24, y + sizeY / 4, sizeY / 2, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2, y + sizeY / 8, sizeY / 4, sizeY / 8, Math.PI / 4 * 3, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2 + sizeY / 16, y - sizeY / 8, sizeY / 16, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "orange";
    context.fillStyle = "darkorange";
    for (let i = 0; i < 5; i++) {
        context.beginPath();
        context.arc(x, y, sizeY / 3 - sizeDiff * i, 0, Math.PI * 2);
        context.fill();
        context.stroke();
    }
    context.fillStyle = "black";
    context.font = "bold " + sizeY / 5 + "pt Arial";
    context.fillText(number, x, y + sizeY / 8);
}