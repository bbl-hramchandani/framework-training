"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
console.log("Start");
/*const bought = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve("My mom bought an iPhone");
    }, 2000);
});

const show = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve("I will show it off");
    }, 6000);
});*/
/*modelbought.then(
    (result)=> {
        console.log(result);
        modelshow.then(
            (result)=> {
                console.log(result);
            }
        )
    }
)*/
var model = new model_1.ModelClass();
/*model.bought.then(
    (result)=> {
        console.log(result);
        model.show.then(
            (result)=> {
                console.log(result);
            }
        )
    }
)*/
model.functionbought().then((result) => {
    console.log(result);
    model.functionshow().then((result) => {
        console.log(result);
    });
});
console.log("End");
