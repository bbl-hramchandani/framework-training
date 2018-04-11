import { AtmClientClass } from "./AtmClientClass";

//let atm001 = new AtmClass;
var atm001 : AtmClientClass = new AtmClientClass();

console.log("Initializing ATM...")
atm001.setInitialBalance();

console.log("Checking Balance...")
atm001.viewBalance();

console.log("Depositing 200...")
atm001.deposit();

console.log("Checking Balance...")
atm001.viewBalance();

console.log("Withdrawing 100...")
atm001.withdraw();

console.log("Checking Balance...")
atm001.viewBalance();
