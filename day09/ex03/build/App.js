"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const got = require("got");
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        console.log("Hi");
        router.get('/', (req, res) => {
            got.get("https://mobdev001.belizebank.com/helloworld.php").then(resp => {
                res.json({
                    resp: resp.body
                });
            });
            router.get('/hello', (req, res) => {
                res.json({
                    resp: "Hello Mario"
                });
            });
        });
        this.express.use('/', router);
    }
}
exports.default = new App().express;
