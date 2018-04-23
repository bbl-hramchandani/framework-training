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
            resp.json({account: req.params.accountID, balance: this.atm.getCurrentBalance(req.params.accountID)})
        })

        pluto.get('/atm/withdraw/:accountID/amount/:amount', (req, resp) => {
            resp.setHeader('Access-Control-Allow-Origin', '*');
            resp.json({status: 0, message: "Ok", account: req.params.accountID, balance: this.atm.withdraw(req.params.accountID, req.params.amount)})
        })

        pluto.get('/atm/deposit/:accountID/amount/:amount', (req, resp) => {
            resp.setHeader('Access-Control-Allow-Origin', '*');
            resp.json({status: 0, message: "Ok", account: req.params.accountID, balance: this.atm.deposit(req.params.accountID, req.params.amount)})
        })

        this.express.use('/', mickey);
        this.express.use('/', pluto);

    }
}

export default new App().express;