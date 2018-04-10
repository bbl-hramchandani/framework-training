"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Greeter_1 = require("./lib/Greeter");
var moment_1 = __importDefault(require("moment"));
var lodash_1 = __importDefault(require("lodash"));
console.log(Greeter_1.Greeter("Hitesh"));
console.log(moment_1.default().format());
var teamA = ["Fel", "Gus", "Ron"];
var teamB = ["Has", "Jose", "Dav"];
var teamX = lodash_1.default.union(teamA, teamB);
console.log(teamX);
console.log(lodash_1.default.reverse(teamX));
