"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const AtmClass_1 = require("./AtmClass");
class App {
    constructor() {
        this.express = express();
        this.atm001 = new AtmClass_1.AtmClass();
        this.atm001.setInitialBalance(1000);
        this.mountRoutes();
    }
    mountRoutes() {
        const mickey = express.Router();
        const pluto = express.Router();
        mickey.get('/atm', (req, resp) => {
            resp.json({ status: 0, message: "Ok" });
        });
        pluto.get('/atm/:accountID', (req, resp) => {
            resp.json({ account: req.params.accountID, balance: this.atm001.getBalance() });
        });
        pluto.get('/atm/withdraw/:accountID/amount/:amount', (req, resp) => {
            this.atm001.withdraw(req.params.amount);
            resp.json({ status: 0, message: "Ok", account: req.params.accountID, balance: this.atm001.getBalance() });
        });
        pluto.get('/atm/deposit/:accountID/amount/:amount', (req, resp) => {
            this.atm001.deposit(req.params.amount);
            resp.json({ status: 0, message: "Ok", account: req.params.accountID, balance: this.atm001.getBalance() });
        });
        this.express.use('/', mickey);
        this.express.use('/', pluto);
    }
}
exports.default = new App().express;
