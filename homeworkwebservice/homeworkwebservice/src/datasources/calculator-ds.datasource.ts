import {inject} from '@loopback/core';
import {juggler, DataSource, AnyObject} from '@loopback/repository';
const config = require('./calculator-ds.datasource.json');

export class CalculatorDSDataSource extends juggler.DataSource {
  static dataSourceName = 'CalculatorDS';

  constructor(
    @inject('datasources.config.CalculatorDS', {optional: true})
    dsConfig: AnyObject = config
  ) {
    super(dsConfig);
  }
}
