"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const got = require("got");
class AtmClientClass {
    constructor() { }
    ;
    setInitialBalance() {
        got.get('http://localhost:3000/atm').then((data) => {
            let result = JSON.parse(data.body);
            console.log('Result is ' + result.message);
        }, (err) => {
            console.log('Error from web backend ' + err.message);
        });
    }
    viewBalance() {
        got.get('http://localhost:3000/atm/123-456').then((data) => {
            let result = JSON.parse(data.body);
            console.log('Balance is ' + result.balance);
        }, (err) => {
            console.log('Error from web backend ' + err.message);
        });
    }
    deposit() {
        got.get('http://localhost:3000/atm/deposit/123-456/amount/200').then((data) => {
            let result = JSON.parse(data.body);
            console.log('Result is ' + result.message);
        }, (err) => {
            console.log('Error from web backend ' + err.message);
        });
    }
    withdraw() {
        got.get('http://localhost:3000/atm/withdraw/123-456/amount/100').then((data) => {
            let result = JSON.parse(data.body);
            console.log('Result is ' + result.message);
        }, (err) => {
            console.log('Error from web backend ' + err.message);
        });
    }
}
exports.AtmClientClass = AtmClientClass;
