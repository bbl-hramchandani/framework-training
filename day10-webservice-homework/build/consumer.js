"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const got = require("got");
console.log('Starting...');
got.get('http://localhost:3000/atm').then((data) => {
    console.log('Data from web backend ' + data.body);
    got.get('http://localhost:3000/atm/123-456').then((data) => {
        console.log('Data from web backend ' + data.body);
        got.get('http://localhost:3000/atm/withdraw/123-456/amount/100').then((data) => {
            console.log('Data from web backend ' + data.body);
            got.get('http://localhost:3000/atm/deposit/123-456/amount/200').then((data) => {
                console.log('Data from web backend ' + data.body);
                console.log('Finished...');
            }, (err) => {
                console.log('Error from web backend ' + err.message);
            });
        }, (err) => {
            console.log('Error from web backend ' + err.message);
        });
    }, (err) => {
        console.log('Error from web backend ' + err.message);
    });
}, (err) => {
    console.log('Error from web backend ' + err.message);
});
