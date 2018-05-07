import { Component } from '@angular/core';
import { AtmServiceService } from './services/atm-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title;
  currentBalance;
  depositMoney;
  withdrawMoney;
  transactions;

  constructor(public atmService: AtmServiceService) {

    this.title = 'ATM Project';

    atmService.getAccountBalance('23232-1').subscribe (value => {
      console.log('account number field in balance request is ', value.accountNumber);
      console.log('account balance field in balance request is ', value.currentBalance);
      this.currentBalance = value.currentBalance;
    });

    atmService.depositMoney('23232-1').subscribe (value => {
      console.log('account number field in deposit request is ', value.accountNumber);
      console.log('account balance field in deposit request is ', value.currentBalance);
      this.depositMoney = value.currentBalance;
    });

    atmService.withdrawMoney('23232-1').subscribe (value => {
      console.log('account number field in withdraw request is ', value.accountNumber);
      console.log('account balance field in withdraw request is ', value.currentBalance);
      this.withdrawMoney = value.currentBalance;
    });

    atmService.getTransactions('23232-1').subscribe (value => {
      console.log('account number field in withdraw request is ', value.accountNumber);
      console.log('transactions field in withdraw request is ', value.transactions);
      this.transactions = value.transactions;
    });

  }

}
