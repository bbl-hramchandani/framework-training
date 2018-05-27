import * as express from 'express';
import * as cors from 'cors';

import { Atm } from './atm/atm';
 
export class App {

     public webService : any;
     private atm : Atm;

     private SUCCESS_MESSAGE        : object = { status :    0, message : "Success" };
     private ERROR_MESSAGE          : object = { status : -100, message : "Error"};
     private INSUFFICIENT_FUNDS     : object = { status : -200, message : "Account Has Insufficient Funds"};

     constructor() {

         this.webService = express();
         this.webService.use(cors());
         
         this.atm = new Atm();
         this.mountAtmRoutes();

     }

    private mountAtmRoutes(){

       const atmLive = express.Router();
       const atmFind = express.Router();
       const atmWithdrawal = express.Router();
       const atmDeposit  = express.Router();
       const atmBalance = express.Router();
       const atmTransactions = express.Router();

       atmLive.get('/atm', (req,resp) => {
              resp.json (this.SUCCESS_MESSAGE);
        });

        atmFind.get('/atm/find/:acct/pin/:pin', (req,resp) => {

            this.atm.findAccountPin(req.params.acct,req.params.pin).then (
                result => {
                    resp.json(this.SUCCESS_MESSAGE);
                },
                err => {
                    resp.json(this.ERROR_MESSAGE);
                }
            );

        });

        atmBalance.get('/atm/:acct', (req,resp) => {
            
            this.atm.getCurrentBalance(req.params.acct).then ( 
                result => {
                    resp.json({
                        status         : 0,
                        accountNumber  : req.params.acct,
                        accountName    : result.accountName,
                        currentBalance : result.currentBalance });      
                    },  
                err => {
                    resp.json(this.ERROR_MESSAGE);
                })
            ;
            
        });

        atmDeposit.get('/atm/deposit/:acct/amount/:amount', (req,resp) => {

            this.atm.deposit(req.params.acct,parseFloat(req.params.amount)).then(
                result => {
                            resp.json ({
                                status         : 0,
                                accountNumber  : result.accountNumber,
                                currentBalance : result.currentBalance
                            });
            },
            err => {   resp.json(this.ERROR_MESSAGE);}
            );

        });

        atmWithdrawal.get('/atm/withdraw/:acct/amount/:amount',(req,resp) => {

            this.atm.withDraw(req.params.acct,parseFloat(req.params.amount)).then(
                result => {
                            resp.json({
                                status        : 0,
                                accountNumber :  result.accountNumber,
                                currentBalance : result.currentBalance
                            });
                },
                err => {   resp.json(this.ERROR_MESSAGE);}
            );

        });

        atmTransactions.get('/atm/transactions/:acct', (req,resp) => {

            this.atm.getLastOperations(req.params.acct).then(
                result => { 
                            resp.json({
                                status         : 0,
                                accountNumber  : req.params.acct,
                                transactions   : result
                            });
                },
                    err => { console.log("Error",err); }
            );

        });
            
        this.webService.use(atmLive);
        this.webService.use(atmFind);
        this.webService.use(atmBalance);
        this.webService.use(atmTransactions);
        this.webService.use(atmDeposit);
        this.webService.use(atmWithdrawal);

    }

}

export default new App().webService;