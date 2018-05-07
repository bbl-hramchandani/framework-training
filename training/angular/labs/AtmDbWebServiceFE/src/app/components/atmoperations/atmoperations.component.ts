import { Component, OnInit } from '@angular/core';
import { AtmServiceService } from '../../services/atm-service.service';
import { AtmResponseOperation,AtmResponseOperationBalance } from '../../models/atm.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atmoperations',
  templateUrl: './atmoperations.component.html',
  styleUrls: ['./atmoperations.component.css']
})
export class AtmoperationsComponent implements OnInit {
  
  public currentOperation   : string = '';
  public currentBalance     : number = 0;
  public atmResponse        : AtmResponseOperation = <AtmResponseOperation>{}; 
  public atmResponseBalance : AtmResponseOperationBalance = <AtmResponseOperationBalance>{};

  constructor(public atmService : AtmServiceService,
  public route : ActivatedRoute) { }

  ngOnInit() {
 
    let acctNumber = this.atmService.getAccountNumber();

    this.route.params.subscribe( data => {

      switch (data['arg']) {
        case 'deposit' : { 
          this.makeADeposit(acctNumber, 100); 
          break;
        }
        case 'withdrawal' : {
          this.makeAWithdrawal(acctNumber, 50); 
          break;
        }
      }

    });
           
  }

  makeADeposit(acct:string,amount:number) {

    this.currentOperation = "Making a deposit of $100.00";

    this.atmService.deposit(acct,amount).then( result => {
               this.atmResponse = result;
               this.currentBalance = result.currentBalance;
    });
    
  }

  makeAWithdrawal(acct:string,amount:number) {

       this.currentOperation = "Making a withdrawal of $50.00";

        this.atmService.withDraw(acct,amount).then( result => {
                this.atmResponse = result;
                this.currentBalance = result.currentBalance;

      });  
  }

  showPanel(){
    return this.atmService.accountValid;
  }

}
