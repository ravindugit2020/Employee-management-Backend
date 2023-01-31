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
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let EmployeeService = class EmployeeService {
    constructor(employeeModel) {
        this.employeeModel = employeeModel;
    }
    async findAll() {
        return await this.employeeModel.find();
    }
    async create(employee) {
        const createEmployee = new this.employeeModel(employee);
        return await createEmployee.save();
    }
    async update(id, employee) {
        return await this.employeeModel.findByIdAndUpdate(id, employee, { new: true });
    }
    async delete(id) {
        return await this.employeeModel.findByIdAndRemove(id);
    }
    async countEmployees() {
        return await this.employeeModel.count();
    }
};
EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Employee')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map