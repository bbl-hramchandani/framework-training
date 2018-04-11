"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AtmDbClass {
    constructor() { }
    ;
    setInitialBalance(arg) {
        this.currentBalance = arg;
    }
    getBalance() {
        return this.currentBalance;
    }
    deposit(arg) {
        this.currentBalance = (Math.floor(this.currentBalance) + Math.floor(arg));
    }
    withdraw(arg) {
        this.currentBalance = (this.currentBalance - arg);
    }
}
exports.AtmDbClass = AtmDbClass;
