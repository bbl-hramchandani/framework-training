"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
var parse = require('csv-parser');
fs.createReadStream('./data/order.csv')
    .pipe(parse())
    .on('data', function (data) {
    console.log('Total order for %s is BZD $%s with sales tax BZD $%s', data.number, data.amount, calculateSalesTax(data.amount));
});
function calculateSalesTax(amount) {
    return Math.round(amount * 12.5) / 100;
}
