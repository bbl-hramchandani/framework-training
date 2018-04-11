import { AtmDbInterface } from "./AtmDbInterface";

export class AtmDbClass implements AtmDbInterface {

    currentBalance: number;

    constructor () {};

    setInitialBalance(arg: number): void {
        this.currentBalance = arg;
    }

    getBalance(): number {
        return this.currentBalance;
    }

    deposit(arg: number): void {
        this.currentBalance = (Math.floor(this.currentBalance) + Math.floor(arg));
    }

    withdraw(arg: number): void {
        this.currentBalance = (this.currentBalance - arg);
    }

}