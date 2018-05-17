import { TransactionTypeFilterPipe } from './transaction-type-filter.pipe';

describe('TransactionTypeFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new TransactionTypeFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
