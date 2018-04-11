export interface AtmClientInterface {
    currentBalance: number;
    setInitialBalance(): void;
    viewBalance(): void;
    deposit(arg: number): void;
    withdraw(arg: number): void;
}
