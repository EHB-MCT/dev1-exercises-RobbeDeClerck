"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

var height = window.innerHeight;
var width = window.innerWidth;

drawBricks();

function drawBricks(){
    context.fillStyle = "#8b0000";
    for(var x = 2; x <= 7; x++){
        for(var i = 1; i <= 6; i++){
            var spacer = (x % 2) * 50;
            context.fillRect(spacer + 150 * i, 100 * x, 50, 20);
        }
    }

    // for(var i = 0; i <= 5; i++){
    //     context.fillStyle = "#8b0000";
    //     context.fillRect(100 + (220 * i), 60 * 3, 200, 100);
    // }


}