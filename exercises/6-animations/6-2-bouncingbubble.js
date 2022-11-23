"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

var height = context.canvas.height;
var width =  context.canvas.width;

let frameCount = 50;

var circlePositionX = 100;
var circlePositionY = 100;

var horizontalSpeed = 10;
var verticalSpeed = 10;

context.fillStyle = "white";
context.fillRect(0, 0, width, height);

window.onmousedown = stopCircle;

drawCircle();
moveCircle();

function drawCircle(){

    
}

function moveCircle(){

    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    frameCount++;

    context.fillStyle = "blue";
    Utils.fillCircle(circlePositionX, circlePositionY, 50);

    requestAnimationFrame(moveCircle);


    if(circlePositionX >= width - 50){
        horizontalSpeed *= -1;
    }

    if(circlePositionX - 50 <= 0){
        horizontalSpeed *= -1;
    }

    if(circlePositionY >= height - 50){
        verticalSpeed *= -1;
    }

    if(circlePositionY - 50 <= 0){
        verticalSpeed *= -1;
    }
 
    circlePositionX += horizontalSpeed;
    circlePositionY += verticalSpeed;

    Utils.fillCircle(circlePositionX, circlePositionY, 50);

}


/**
 * @param {MouseEvent} eventData
 */

 function stopCircle(eventData){
    console.log(eventData.pageX);

    posx = eventData.pageX;
    posy = eventData.pageY;

    if(posx = circlePositionX){
        horizontalSpeed = 0;
    } else {
        horizontalSpeed = 10;
    }


    if(posy = circlePositionY){
        verticalSpeed = 0;
    } else {
        verticalSpeed = 10;
    }

}