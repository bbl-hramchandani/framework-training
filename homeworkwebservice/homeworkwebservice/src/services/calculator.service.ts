import {getService, juggler} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {CalculatorDSDataSource} from '../datasources/calculator-ds.datasource';

export interface CalculatorParameters {
    intA: number;
    intB: number;
}

export interface CalculatorService {    
    Multiply(args: CalculatorParameters): Promise<number>;
    Add(args: CalculatorParameters): Promise<number>;
    Divide(args: CalculatorParameters): Promise<number>;
    Subtract(args: CalculatorParameters): Promise<number>;
}

export class CalculatorServiceProvider implements Provider<CalculatorService> {

    constructor(@inject('datasources.CalculatorDS') protected datasource: juggler.DataSource = new CalculatorDSDataSource()) {
        
    }

    value(): CalculatorService {
        return getService(this.datasource);
    }

}