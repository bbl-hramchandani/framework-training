import {del, get, param, patch, post, put, requestBody} from '@loopback/rest';
import {CalculatorService, CalculatorParameters} from '../services/calculator.service';
import {inject} from '@loopback/core';

export class CalculatorController {

    constructor(@inject('services.CalculatorService') protected calculatorService: CalculatorService) {
        
    }

    @post('/multiply')
    async multiply(@requestBody() args: CalculatorParameters): Promise<number> {
        return await this.calculatorService.Multiply(args);
    }

    @post('/add')
    async add(@requestBody() args: CalculatorParameters): Promise<number> {
        return await this.calculatorService.Add(args);
    }

    @post('/subtract')
    async subtract(@requestBody() args: CalculatorParameters): Promise<number> {
        return await this.calculatorService.Subtract(args);
    }

    @post('/divide')
    async divide(@requestBody() args: CalculatorParameters): Promise<number> {
        return await this.calculatorService.Divide(args);
    }   

}