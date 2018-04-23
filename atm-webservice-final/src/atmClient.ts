import { Atm } from './atm/atm';

var testAtm : Atm = new Atm();
var balance : number = 0;

balance = testAtm.getCurrentBalance('123-1');

console.log('Initial balance is ' + balance);

balance = testAtm.deposit('123-1',400);
console.log('Balance after deposit is ' + balance);

balance = testAtm.withdraw('123-1',200);
console.log('Balance after withdrawal is ' + balance);

let result = testAtm.getAllTransactions('123-1');
console.log('All transactions are ');
console.log(result.transactions);