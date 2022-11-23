"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

calculateAverage();

function calculateAverage(){
    var numberArray = new Array();
    numberArray = [Utils.randomNumber(0, 100), Utils.randomNumber(0, 100), Utils.randomNumber(0, 100), Utils.randomNumber(0, 100), Utils.randomNumber(0, 100), Utils.randomNumber(0, 100), Utils.randomNumber(0, 100), Utils.randomNumber(0, 100), Utils.randomNumber(0, 100), Utils.randomNumber(0, 100)];
    var summary = 0;

    for(var number of numberArray){
        summary += number;
    }

    var average =  summary/numberArray.length;
    console.log(average);
}