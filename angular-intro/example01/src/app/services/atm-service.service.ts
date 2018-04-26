import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AtmTransactionResponseInterface } from '../interfaces/atm-transaction-response-interface';
import { AtmTransactionListResponseInterface } from '../interfaces/atm-transaction-list-response-interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AtmServiceService {

  constructor(private http: HttpClient) { }

  public getAccountBalance(account: String): Observable <AtmTransactionResponseInterface> {

    return this.http.get<AtmTransactionResponseInterface>('http://localhost:3000/atm/' + account);

  }

  public withdrawMoney(account: String): Observable <AtmTransactionResponseInterface>  {

    return this.http.get<AtmTransactionResponseInterface>('http://localhost:3000/atm/withdraw/' + account + '/amount/100');

  }

  public depositMoney(account: String): Observable <AtmTransactionResponseInterface>  {

    return this.http.get<AtmTransactionResponseInterface>('http://localhost:3000/atm/deposit/' + account + '/amount/200');

  }

  public getTransactions(account: String): Observable <AtmTransactionListResponseInterface>  {

    return this.http.get<AtmTransactionListResponseInterface>('http://localhost:3000/atm/transactions/' + account);

  }

}
