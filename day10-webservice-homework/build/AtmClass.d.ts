import { AtmInterface } from "./AtmInterface";
export declare class AtmClass implements AtmInterface {
    currentBalance: number;
    constructor();
    setInitialBalance(arg: number): void;
    getBalance(): number;
    deposit(arg: number): void;
    withdraw(arg: number): void;
}
