import * as _ from 'lodash';

import { AtmInterface } from './atm.interface';
import { accountList,accountModel,TransactionList,TransactionModel} from './atm.model';
import { DbConnection  } from './database/dbconnection';
 
export class Atm implements AtmInterface {

    private dbConn           : DbConnection = new DbConnection();
    private accountTable     : string = "accounts";
    private transactionTable : string = "transactions";

    private ERROR_MESSAGE    : object = { status : -100, message : "Error. Account Not Found"};

    private transactionList  : TransactionList;
 
    constructor() {

        this.dbConn.connectDb().then (resp => {
            console.log("Database connection successful");
        });

        this.transactionList = new TransactionList();
        
    }

    async findAccountPin (acct: string, pin: string) : Promise<accountModel>  {
        let q = { "accountNumber" : acct , "accountPin" : pin };
        return await this.dbConn.findOne(this.accountTable, q);
    }

    async accountExists (acct: string) : Promise<accountModel>  {
        return await this.dbConn.findOne(this.accountTable, {"accountNumber" : acct });
    }

    async getLastOperations ( acct : string ) : Promise<TransactionList> {
        let q = { 'accountNumber' : acct };
        return await this.dbConn.find(this.transactionTable, q);
    }    

    public getCurrentBalance (acct: string) : Promise<accountModel> {

        return new Promise ( (resolve,reject) => {
               this.accountExists(acct).then (
                 resp => {
                    if (resp != null ) {
                         resolve(resp);
                    } else {
                        reject (this.ERROR_MESSAGE);
                    }
                 },                 
                 err => { reject (this.ERROR_MESSAGE); }
            );
        });

     }

    async withDraw (acct: string, amount: number ) : Promise<accountModel> {

        let resp = await this.accountExists(acct);

        if (resp != null) {

            let q = { 'accountNumber' : acct };

            resp.currentBalance -= amount;

            let updatedValue = await this.dbConn.updateOne(this.accountTable, q, resp);

            let tran = new TransactionModel();
            tran.accountNumber = acct;
            tran.amount  = amount;
            tran.transactionType = "Withdrawal";

            this.dbConn.insertOne(this.transactionTable,tran).then(
                resp => { },
                err=>{
                    console.log("Error saving transaction");
                }
            );

        }

        return resp;   
    }


    async deposit (acct: string, amount: number) : Promise<accountModel> {

        let resp = await   this.accountExists(acct);

        if (resp != null) {

            let q = { 'accountNumber' : acct };

            resp.currentBalance += amount;

            let updatedValue = await this.dbConn.updateOne(this.accountTable, q, resp);

            let tran = new TransactionModel();
            tran.accountNumber = acct;
            tran.amount  = amount;
            tran.transactionType = "Deposit";
            
            this.dbConn.insertOne(this.transactionTable,tran).then(
                resp => { },
                err=>{
                    console.log("Error saving transaction");
                }
            );                

         }

        return resp;   

     }

}
