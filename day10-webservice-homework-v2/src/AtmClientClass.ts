import { AtmClientInterface } from "./AtmClientInterface";
import * as got from 'got';

export class AtmClientClass implements AtmClientInterface {

    currentBalance: number;

    constructor () {};

    setInitialBalance(): void {
        got.get('http://localhost:3000/atm').then (
            (data) => {
                let result = JSON.parse(data.body);
                console.log('Result is ' + result.message);
            },
            (err) => {
                console.log('Error from web backend ' + err.message);
            }
        )
    }

    viewBalance(): void {
        got.get('http://localhost:3000/atm/123-456').then (
            (data) => {
                let result = JSON.parse(data.body);
                console.log('Balance is ' + result.balance);
            },
            (err) => {
                console.log('Error from web backend ' + err.message);
            }
        )
    }

    deposit(): void {
        got.get('http://localhost:3000/atm/deposit/123-456/amount/200').then (
            (data) => {
                let result = JSON.parse(data.body);
                console.log('Result is ' + result.message);
            },
            (err) => {
                console.log('Error from web backend ' + err.message);
            }
        )            
    }

    withdraw(): void {
        got.get('http://localhost:3000/atm/withdraw/123-456/amount/100').then (
            (data) => {
                let result = JSON.parse(data.body);
                console.log('Result is ' + result.message);
            },
            (err) => {
                console.log('Error from web backend ' + err.message);
            }
        )              
    }

}