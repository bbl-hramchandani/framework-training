import * as _ from 'lodash';

import { AtmInterface } from './atm.interface';
import { AccountList, AccountModel, TransactionList, TransactionModel} from './atm.model';
import { InitialData } from './atm.data';

export class Atm implements AtmInterface {

     private database : AccountList;
     private transactionList  : TransactionList;

     constructor() {
          this.database = new AccountList();
          this.database.accounts = InitialData;
          this.transactionList = new TransactionList();
     }

     private accountExists(acct : string ) : boolean {
        return _.some(this.database.accounts,{'accountNumber' : acct});
     }


     public getCurrentBalance ( acct : string ) : number {

        if (this.accountExists (acct)) {
                let result = _.filter(this.database.accounts,{'accountNumber' : acct});
                return result[0].currentBalance;
        } else {
               return -100;
        }
     }

     withdraw ( acct : string , amount : number) : number{

        if (this.accountExists (acct)) {

            let result = _.findIndex(this.database.accounts,{'accountNumber' : acct});
            this.database.accounts[result].currentBalance -= amount;

            let txn = new TransactionModel();
            txn.accountNumber = acct;
            txn.amount  = amount;
            txn.transactionType = "Withdraw";

            this.transactionList.transactions.push(txn);

            return this.database.accounts[result].currentBalance;
        } else {
            return -100; 
        }

     }

     deposit ( acct : string , amount : number) : number{

        if (this.accountExists (acct)) {

            let result = _.findIndex(this.database.accounts,{'accountNumber' : acct});
            this.database.accounts[result].currentBalance = Math.floor(this.database.accounts[result].currentBalance) + Math.floor(amount);

            let txn = new TransactionModel();
            txn.accountNumber = acct;
            txn.amount  = amount;
            txn.transactionType = "Deposit";

            this.transactionList.transactions.push(txn);

            return this.database.accounts[result].currentBalance;
        } else {
            return -100; 
        }

     }


     getAllTransactions ( acct : string ) : TransactionList {

        let result : TransactionList = new TransactionList();

        if (this.accountExists(acct)) {
            result.transactions = _.filter(
                this.transactionList.transactions, {
                    'accountNumber' : acct
                }
            );
        }

        return result;

     }

}