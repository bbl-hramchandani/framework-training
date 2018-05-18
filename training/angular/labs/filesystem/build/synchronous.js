"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
var data = '';
try {
    data = fs.readFileSync('./data/file.txt', 'utf8');
    console.log(data);
}
catch (err) {
    console.log(err);
}
