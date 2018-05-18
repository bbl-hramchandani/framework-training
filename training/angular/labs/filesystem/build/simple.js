"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
fs.readFile('./data/file.txt', 'utf8', (err, data) => {
    if (err)
        throw err;
    console.log(data);
});
