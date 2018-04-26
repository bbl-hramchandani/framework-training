export class TransactionModel {
    accountNumber: String = '';
    dateOfTransaction: Date = new Date();
    transactionType: String = '';
    amount: Number = 0;
}

export interface AtmTransactionListResponseInterface {
    accountNumber: String;
    transactions: Array<TransactionModel>;
}
