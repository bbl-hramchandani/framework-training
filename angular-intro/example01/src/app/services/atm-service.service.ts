import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AtmServiceService {

  constructor(private http: HttpClient) { }

  public getAccountBalance() {

    const promise = new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/atm/123-1').toPromise().then(
          res => {
            console.log(res['balance']);
            return res['balance'];
          }
        );
    });

    return 100.00;

  }

  public withdrawMoney() {

    const promise = new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/atm/withdraw/123-1/amount/100').toPromise().then(
          res => {
            console.log(res['balance']);
            return res['balance'];
          }
        );
    });

    return 300.00;
  }

  public depositMoney() {

    const promise = new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/atm/deposit/123-1/amount/200').toPromise().then(
          res => {
            console.log(res['balance']);
            return res['balance'];
          }
        );
    });

    return 400.00;
  }

}
