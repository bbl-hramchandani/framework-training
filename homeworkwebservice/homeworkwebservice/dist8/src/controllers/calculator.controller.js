"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
const core_1 = require("@loopback/core");
let CalculatorController = class CalculatorController {
    constructor(calculatorService) {
        this.calculatorService = calculatorService;
    }
    async multiply(args) {
        return await this.calculatorService.Multiply(args);
    }
    async add(args) {
        return await this.calculatorService.Add(args);
    }
    async subtract(args) {
        return await this.calculatorService.Subtract(args);
    }
    async divide(args) {
        return await this.calculatorService.Divide(args);
    }
};
__decorate([
    rest_1.post('/multiply'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CalculatorController.prototype, "multiply", null);
__decorate([
    rest_1.post('/add'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CalculatorController.prototype, "add", null);
__decorate([
    rest_1.post('/subtract'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CalculatorController.prototype, "subtract", null);
__decorate([
    rest_1.post('/divide'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CalculatorController.prototype, "divide", null);
CalculatorController = __decorate([
    __param(0, core_1.inject('services.CalculatorService')),
    __metadata("design:paramtypes", [Object])
], CalculatorController);
exports.CalculatorController = CalculatorController;
//# sourceMappingURL=calculator.controller.js.map