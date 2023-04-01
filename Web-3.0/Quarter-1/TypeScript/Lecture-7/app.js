"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Example of Import using Named Export
const namedExportModule_1 = require("./namedExportModule");
console.log("The Value of year is :", namedExportModule_1.year);
console.log("The Value of Pi is :", namedExportModule_1.pi);
// Example of Import from Defualt Export Function
const defualtExportModule_1 = __importDefault(require("./defualtExportModule"));
let retVal = (0, defualtExportModule_1.default)(5);
console.log("Value Returned from Default Function is :", retVal);
