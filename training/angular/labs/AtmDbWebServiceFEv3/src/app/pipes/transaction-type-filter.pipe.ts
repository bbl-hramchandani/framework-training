import { Pipe, PipeTransform } from '@angular/core';
import { AtmTransaction }  from '../models/atm.interface';

@Pipe({
  name: 'transactionTypeFilter'
})
export class TransactionTypeFilterPipe implements PipeTransform {

  transform(transactions: AtmTransaction[], filter: any): any {
    if (filter !== 'All') {
      return transactions.filter(transaction => transaction.transactionType == filter);
    } else {
      return transactions;
    }
  }

}
