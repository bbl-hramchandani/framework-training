import { Component, OnInit } from '@angular/core';
import { AtmServiceService } from '../../services/atm-service.service';
import { AtmResponseOperation,AtmResponseOperationBalance } from '../../models/atm.interface';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-atmoperations',
  templateUrl: './atmoperations.component.html',
  styleUrls: ['./atmoperations.component.css']
})
export class AtmoperationsComponent implements OnInit {
  
  public currentBalance     : number = 0;
  public atmResponse        : AtmResponseOperation = <AtmResponseOperation>{}; 
  public atmResponseBalance : AtmResponseOperationBalance = <AtmResponseOperationBalance>{};

  public title              : string = '';
  private operation         : number = 0;

  public theForm            : FormGroup;
  public modelamount        : number = 0;

  constructor(public atmService : AtmServiceService,
  public route : ActivatedRoute) { }

  ngOnInit() {

    this.theForm = new FormGroup({
      amount : new FormControl(0, Validators.required)
    });    

    this.route.params.subscribe( data => {

      switch (data['arg']) {
        case 'deposit' : { 
          this.operation = 1;
          this.title = 'Deposit';
          break;
        }
        case 'withdrawal' : {
          this.operation = 2;
          this.title = 'Withdrawal';
          break;
        }
      }

    });
           
  }
  
  showPanel() {
    return this.atmService.accountValid;
  }

  doOperation(form: FormGroup) {

    if (this.operation == 1) {
      this.makeADeposit(this.atmService.getAccountNumber(), form.value.amount);
    } else {
      this.makeAWithdrawal(this.atmService.getAccountNumber(), form.value.amount);
    }

    this.modelamount = 0;

  }

  makeADeposit(acct:string, amount:number) {

    this.atmService.deposit(acct, amount).then( result => {
      this.atmResponse = result;
      this.currentBalance = result.currentBalance;
    });
    
  }

  makeAWithdrawal(acct:string, amount:number) {

    this.atmService.withDraw(acct, amount).then( result => {
      this.atmResponse = result;
      this.currentBalance = result.currentBalance;
    });  

  }  

}
