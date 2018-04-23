export interface AtmClientInterface {
    currentBalance: number;
    setInitialBalance(): void;
    viewBalance(): void;
    deposit(): void;
    withdraw(): void;
}
