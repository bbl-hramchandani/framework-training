import { AtmClientInterface } from "./AtmClientInterface";
export declare class AtmClientClass implements AtmClientInterface {
    currentBalance: number;
    constructor();
    setInitialBalance(): void;
    viewBalance(): void;
    deposit(): void;
    withdraw(): void;
}
