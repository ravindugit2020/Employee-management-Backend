"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeSchema = void 0;
const mongoes = require("mongoose");
exports.EmployeeSchema = new mongoes.Schema({
    name: String,
    department: String,
    email: String,
    mobile: String,
    dob: String,
    city: String,
    doj: String,
    country: String,
    address: String,
    status: String
});
//# sourceMappingURL=employee.schema.js.map