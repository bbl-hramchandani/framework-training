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
const mongodb_1 = require("mongodb");
class DbConnection {
    constructor() {
        this.user = "hramchandani";
        this.password = "hramchandani";
        this.remotedb = "angulartraining";
        this.host = "ds215370.mlab.com";
        this.port = "15370";
        this.autoReconnect = { auto_reconnect: true };
    }
    connectDb() {
        return __awaiter(this, void 0, void 0, function* () {
            let dbURI = `mongodb://${this.user}:${this.password}@${this.host}:${this.port}/${this.remotedb}`;
            let resp = yield mongodb_1.MongoClient.connect(dbURI, this.autoReconnect);
            this.db = resp.db(this.remotedb);
            this.conn = resp;
            return this.db;
        });
    }
    findOne(doc, query) {
        return new Promise((resolve, reject) => {
            this.db.collection(doc).findOne(query).then((resp) => {
                if (resp != null) {
                    resolve(resp);
                }
                else {
                    reject('Account not found.');
                }
            }, (err) => { reject('Account error'); });
        });
    }
    find(doc, query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.collection(doc).find(query).toArray();
        });
    }
    updateOne(doc, query, argValue) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.collection(doc).updateOne(query, { $set: argValue });
        });
    }
    deleteOne(doc, query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.collection(doc).updateOne(query);
        });
    }
    insertOne(doc, record) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.collection(doc).insertOne(record);
        });
    }
}
exports.DbConnection = DbConnection;
