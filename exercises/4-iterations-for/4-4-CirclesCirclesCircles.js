"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

var height = window.innerHeight;
var width = window.innerWidth;

drawCircles();

//still in progress

function drawCircles(){
    for(var i = 0; i <=10; i++){
        for(var x = 0; x <=10; x++){
            context.fillStyle = "lightblue";
            Utils.fillCircle(width, 0, 100);
        }
    }
}