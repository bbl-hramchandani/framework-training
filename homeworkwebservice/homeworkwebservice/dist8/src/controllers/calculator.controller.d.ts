import { CalculatorService, CalculatorParameters } from '../services/calculator.service';
export declare class CalculatorController {
    protected calculatorService: CalculatorService;
    constructor(calculatorService: CalculatorService);
    multiply(args: CalculatorParameters): Promise<number>;
    add(args: CalculatorParameters): Promise<number>;
    subtract(args: CalculatorParameters): Promise<number>;
    divide(args: CalculatorParameters): Promise<number>;
}
