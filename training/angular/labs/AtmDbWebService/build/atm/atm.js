"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const atm_model_1 = require("./atm.model");
const dbconnection_1 = require("./database/dbconnection");
class Atm {
    constructor() {
        this.dbConn = new dbconnection_1.DbConnection();
        this.accountTable = "accounts";
        this.transactionTable = "transactions";
        this.ERROR_MESSAGE = { status: -100, message: "Error. Account Not Found" };
        this.dbConn.connectDb().then(resp => {
            console.log("Database connection successful");
        });
        this.transactionList = new atm_model_1.TransactionList();
    }
    findAccountPin(acct, pin) {
        return __awaiter(this, void 0, void 0, function* () {
            let q = { "accountNumber": acct, "accountPin": pin };
            return yield this.dbConn.findOne(this.accountTable, q);
        });
    }
    accountExists(acct) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dbConn.findOne(this.accountTable, { "accountNumber": acct });
        });
    }
    getLastOperations(acct) {
        return __awaiter(this, void 0, void 0, function* () {
            let q = { 'accountNumber': acct };
            return yield this.dbConn.find(this.transactionTable, q);
        });
    }
    getCurrentBalance(acct) {
        return new Promise((resolve, reject) => {
            this.accountExists(acct).then(resp => {
                if (resp != null) {
                    resolve(resp);
                }
                else {
                    reject(this.ERROR_MESSAGE);
                }
            }, err => { reject(this.ERROR_MESSAGE); });
        });
    }
    withDraw(acct, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            let resp = yield this.accountExists(acct);
            if (resp != null) {
                let q = { 'accountNumber': acct };
                resp.currentBalance -= amount;
                let updatedValue = yield this.dbConn.updateOne(this.accountTable, q, resp);
                let tran = new atm_model_1.TransactionModel();
                tran.accountNumber = acct;
                tran.amount = amount;
                tran.transactionType = "Withdrawal";
                this.dbConn.insertOne(this.transactionTable, tran).then(resp => { }, err => {
                    console.log("Error saving transaction");
                });
            }
            return resp;
        });
    }
    deposit(acct, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            let resp = yield this.accountExists(acct);
            if (resp != null) {
                let q = { 'accountNumber': acct };
                resp.currentBalance += amount;
                let updatedValue = yield this.dbConn.updateOne(this.accountTable, q, resp);
                let tran = new atm_model_1.TransactionModel();
                tran.accountNumber = acct;
                tran.amount = amount;
                tran.transactionType = "Deposit";
                this.dbConn.insertOne(this.transactionTable, tran).then(resp => { }, err => {
                    console.log("Error saving transaction");
                });
            }
            return resp;
        });
    }
}
exports.Atm = Atm;
