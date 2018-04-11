"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtmClientClass_1 = require("./AtmClientClass");
//let atm001 = new AtmClass;
var atm001 = new AtmClientClass_1.AtmClientClass();
console.log("Initializing ATM...");
atm001.setInitialBalance();
console.log("Checking Balance...");
atm001.viewBalance();
console.log("Depositing 200...");
atm001.deposit();
console.log("Checking Balance...");
atm001.viewBalance();
console.log("Withdrawing 100...");
atm001.withdraw();
console.log("Checking Balance...");
atm001.viewBalance();