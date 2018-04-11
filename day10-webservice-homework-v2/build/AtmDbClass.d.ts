import { AtmDbInterface } from "./AtmDbInterface";
export declare class AtmDbClass implements AtmDbInterface {
    currentBalance: number;
    constructor();
    setInitialBalance(arg: number): void;
    getBalance(): number;
    deposit(arg: number): void;
    withdraw(arg: number): void;
}
