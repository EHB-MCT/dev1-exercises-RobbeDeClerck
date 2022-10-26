"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

var height = window.innerHeight;
var width = window.innerWidth;

let bubbleHeight = window.innerHeight - 400;
let bubblewidth = window.innerWidth - 400;

context.fillStyle = "black";
context.fillRect(0, 0, width, height);

drawRandomColouredBubbles();

function drawRandomColouredBubbles(){
    for(var i=0; i <= 100; i++){
        
        context.fillStyle = Utils.hsla(Math.floor(Math.random() * 361), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.random() * 2);
        // console.log(Math.floor(Math.random() * 361), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.random() * 2);

        var circleX = Math.floor(Math.random() * bubblewidth) + 200;
        var circleY = Math.floor(Math.random() * bubbleHeight) + 200;
        var circleR = Math.floor(Math.random() * 1 * i);

        Utils.fillCircle(circleX, circleY, circleR);
    }

}