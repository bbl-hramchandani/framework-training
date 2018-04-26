import * as express from 'express';
import { Atm } from './atm/atm';

class App {
    
    public express = express();
    public atm : Atm = new Atm();

    constructor() {
        this.mountRoutes();
    }

    mountRoutes() : void {

        const mickey = express.Router();
        const pluto = express.Router();

        mickey.get('/atm', (req, resp) => {
            resp.setHeader('Access-Control-Allow-Origin', '*');
            resp.json({status: 0, message: "Ok"});
        })

        pluto.get('/atm/:accountID', (req, resp) => {
            resp.setHeader('Access-Control-Allow-Origin', '*');
            var balance = this.atm.getCurrentBalance(req.params.accountID);
            resp.json({account: req.params.accountID, balance: balance})
        })

        pluto.get('/atm/withdraw/:accountID/amount/:amount', (req, resp) => {
            resp.setHeader('Access-Control-Allow-Origin', '*');
            var balance = this.atm.withdraw(req.params.accountID, req.params.amount);
            resp.json({account: req.params.accountID, balance: balance})
        })

        pluto.get('/atm/deposit/:accountID/amount/:amount', (req, resp) => {
            resp.setHeader('Access-Control-Allow-Origin', '*');
            var balance = this.atm.deposit(req.params.accountID, req.params.amount);
            resp.json({account: req.params.accountID, balance: balance})
        })

        pluto.get('/atm/transactions/:accountID', (req, resp) => {
            resp.setHeader('Access-Control-Allow-Origin', '*');
            resp.json({account: req.params.accountID, transactions: this.atm.getAllTransactions(req.params.accountID)})
        })

        this.express.use('/', mickey);
        this.express.use('/', pluto);

    }
}

export default new App().express;