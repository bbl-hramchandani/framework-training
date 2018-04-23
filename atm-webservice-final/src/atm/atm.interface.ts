import { TransactionList } from './atm.model';

export interface AtmInterface {

   getCurrentBalance ( acct : string ) : number;
   withdraw ( acct : string , amount : number) : number;
   deposit  ( acct : string , amount  : number ) : number;
   getAllTransactions ( acct : string ) : TransactionList;

}