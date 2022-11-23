"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

var height = context.canvas.height;
var width =  context.canvas.width;

window.onmousemove = drawCrosshair;

drawCrosshair();

/**
 * @param {MouseEvent} eventData
 */

function drawCrosshair(eventData){
    var x = eventData.pageX;
    var y = eventData.pageY;

    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "red";
    context.lineWidth = 3;

    Utils.drawLine(x, 0, x, height);
    Utils.drawLine(0, y, width, y);

}