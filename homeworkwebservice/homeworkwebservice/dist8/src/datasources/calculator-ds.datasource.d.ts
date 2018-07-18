import { juggler, AnyObject } from '@loopback/repository';
export declare class CalculatorDSDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: AnyObject);
}
