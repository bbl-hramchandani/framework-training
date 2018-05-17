import { Component, OnInit } from '@angular/core';
import { AtmServiceService } from '../../services/atm-service.service';
import { AtmResponseTransactions } from '../../models/atm.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  public atmTransactions  : AtmResponseTransactions = {} as AtmResponseTransactions;
  public transactionType  : string;

  constructor(public atmService : AtmServiceService, public router : Router ) { }

  ngOnInit() {
    
    this.getLastOperations(this.atmService.getAccountNumber());

    this.atmService.onUpdatedTransactions$.subscribe(data =>  {
      this.getLastOperations(this.atmService.getAccountNumber());
    });

    this.atmService.onUpdateAccountNumber$.subscribe(resp => {
      this.getLastOperations(this.atmService.getAccountNumber());
    });

    this.transactionType = 'All';

  }

  getLastOperations(acct:string) {

    this.atmService.getLastOperations(acct).subscribe(result => {
          this.atmTransactions = result;
    });

  }

  showPanel(){
    return this.atmService.accountValid;
  }

  viewWithdrawals() {
    this.transactionType = 'Withdrawal';
  }

  viewDeposits() {
    this.transactionType = 'Deposit';

  }

  viewAll() {
    this.transactionType = 'All';
  }
  
}
