"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;
    while (i <= 6) {
        let canvasSize = 300;
        let smallOffset = 50;
        let bigOffset = 200;
        let step = 25;
        Utils.drawLine((i * step) + smallOffset, (i * step) + bigOffset, (i * step) + bigOffset, (i * step) + smallOffset);
        Utils.drawLine(bigOffset - (i * step), smallOffset + (i * step), (canvasSize + smallOffset) - (i * step), bigOffset + (i * step)); 
        i++;
    }