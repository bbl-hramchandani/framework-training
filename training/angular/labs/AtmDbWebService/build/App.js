"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const atm_1 = require("./atm/atm");
class App {
    constructor() {
        this.SUCCESS_MESSAGE = { status: 0, message: "Success" };
        this.ERROR_MESSAGE = { status: -100, message: "Error" };
        this.webService = express();
        this.webService.use(cors());
        this.atm = new atm_1.Atm();
        this.mountAtmRoutes();
    }
    mountAtmRoutes() {
        const atmLive = express.Router();
        const atmFind = express.Router();
        const atmWithdrawal = express.Router();
        const atmDeposit = express.Router();
        const atmBalance = express.Router();
        const atmTransactions = express.Router();
        atmLive.get('/atm', (req, resp) => {
            resp.json(this.SUCCESS_MESSAGE);
        });
        atmFind.get('/atm/find/:acct/pin/:pin', (req, resp) => {
            this.atm.findAccountPin(req.params.acct, req.params.pin).then(result => {
                resp.json(this.SUCCESS_MESSAGE);
            }, err => {
                resp.json(this.ERROR_MESSAGE);
            });
        });
        atmBalance.get('/atm/:acct', (req, resp) => {
            this.atm.getCurrentBalance(req.params.acct).then(result => {
                resp.json({
                    status: 0,
                    accountNumber: req.params.acct,
                    accountName: result.accountName,
                    currentBalance: result.currentBalance
                });
            }, err => {
                resp.json(this.ERROR_MESSAGE);
            });
        });
        atmDeposit.get('/atm/deposit/:acct/amount/:amount', (req, resp) => {
            this.atm.deposit(req.params.acct, parseFloat(req.params.amount)).then(result => {
                resp.json({
                    status: 0,
                    accountNumber: result.accountNumber,
                    currentBalance: result.currentBalance
                });
            }, err => { resp.json(this.ERROR_MESSAGE); });
        });
        atmWithdrawal.get('/atm/withdraw/:acct/amount/:amount', (req, resp) => {
            this.atm.withDraw(req.params.acct, parseFloat(req.params.amount)).then(result => {
                resp.json({
                    status: 0,
                    accountNumber: result.accountNumber,
                    currentBalance: result.currentBalance
                });
            }, err => { resp.json(this.ERROR_MESSAGE); });
        });
        atmTransactions.get('/atm/transactions/:acct', (req, resp) => {
            this.atm.getLastOperations(req.params.acct).then(result => {
                resp.json({
                    status: 0,
                    accountNumber: req.params.acct,
                    transactions: result
                });
            }, err => { console.log("Error", err); });
        });
        this.webService.use(atmLive);
        this.webService.use(atmFind);
        this.webService.use(atmBalance);
        this.webService.use(atmTransactions);
        this.webService.use(atmDeposit);
        this.webService.use(atmWithdrawal);
    }
}
exports.App = App;
exports.default = new App().webService;
