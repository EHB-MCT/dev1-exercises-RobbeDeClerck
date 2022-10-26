"use strict";
import context from "../../scripts/context.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalSquares();
}

function drawDiagonalSquares() {
    let i = 1;
    while (i < 8) {
        context.strokeRect(50 + 25 * i, 50 + 25 * i, 100, 100);
        i++;
    }
}