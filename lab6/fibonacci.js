"use strict";
// console.log("Thank God!, It works!, Christ Loves You!");

const req = require('prompt-sync');
const prompt = req();

let num = prompt("Introduce un número: ");
fibonacci(num);

function fibonacci(num){
    let n, number=0, nextNumber=1;
    for (let index = 1; index <=num; index++) {
        console.log(number);
        n = number + nextNumber;
        number = nextNumber;
        nextNumber = n;
    }
}