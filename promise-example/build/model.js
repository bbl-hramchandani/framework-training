"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModelClass {
    constructor() {
        this.bought = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("My mom model bought an iPhone");
            }, 2000);
        });
        this.show = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("I will model show it off");
            }, 6000);
        });
    }
    functionbought() {
        let varone = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("My mom model bought an iPhone via function");
            }, 2000);
        });
        return varone;
    }
    functionshow() {
        let vartwo = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("I will model show it off via function");
            }, 6000);
        });
        return vartwo;
    }
}
exports.ModelClass = ModelClass;
/*export const modelbought = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve("My mom model bought an iPhone");
    }, 2000);
});

export const modelshow = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve("I will model show it off");
    }, 6000);
});*/ 
