import { juggler } from '@loopback/service-proxy';
import { Provider } from '@loopback/core';
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
export declare class CalculatorServiceProvider implements Provider<CalculatorService> {
    protected datasource: juggler.DataSource;
    constructor(datasource?: juggler.DataSource);
    value(): CalculatorService;
}
