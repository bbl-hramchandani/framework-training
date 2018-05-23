import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AtmResponse, AtmResponseOperationBalance, AtmResponseOperation, AtmResponseTransactions } from '../../models/atm.interface';

@Injectable()
export class AtmserviceProvider {

  private END_POINT = 'http://localhost:3000/atm';
    
  public accountNumber : string;
  public accountName   : string;
  public currentBalance : number;

  public  accountValid   : boolean;
  public  token          : string;

  constructor( public http: HttpClient) {
    console.log('Hello AtmserviceProvider Provider');
      this.accountValid = undefined;
      this.token = undefined;
  }  

  getToken() {
    return this.token !== undefined ? this.token : '';  
  }

  setAccountNumber(acct:string, pin:string) : Promise<boolean> {

    return new Promise( (succ, reject) => {

      this.accountExists(acct, pin).then ( resp => {
        if (resp.status == 0 ){
            this.accountNumber = acct;
            this.accountValid = true;
            this.token = resp.token;
            succ(true);
        } else {
            this.accountValid = false;
            reject(false);
        }
      });      

    });

      

  }

  getAccountNumber() {
      return this.accountNumber;
  }

  accountExists(acct: string, pin:string) : Promise<AtmResponse> {

    return new Promise ( (success, reject) => {

        let FINDACCOUNT  = '/find/' + acct +'/pin/'+pin;
        this.http.get<AtmResponse>(this.END_POINT + FINDACCOUNT ).subscribe (
            resp => { success(resp); },
            err  => { reject(err); }
        );

    });

  }

}
