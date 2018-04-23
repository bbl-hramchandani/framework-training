import { Component } from '@angular/core';
import { AtmComponent } from './atm/atm.component';
import { AtmServiceService } from './services/atm-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title;
  accountBalance;
  depositMoney;
  withdrawMoney;

  constructor(public atmService: AtmServiceService) {

    this.title = 'Hassaram';
    this.accountBalance = atmService.getAccountBalance();
    this.depositMoney = atmService.depositMoney();
    this.withdrawMoney = atmService.withdrawMoney();

  }

}
