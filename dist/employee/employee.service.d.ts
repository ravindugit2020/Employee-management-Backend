import { Model } from 'mongoose';
import { Employee } from './interfaces/employee.interface';
export declare class EmployeeService {
    private readonly employeeModel;
    constructor(employeeModel: Model<Employee>);
    findAll(): Promise<Employee[]>;
    create(employee: Employee): Promise<Employee>;
    update(id: string, employee: Employee): Promise<Employee>;
    delete(id: String): Promise<Employee>;
    countEmployees(): Promise<any>;
}
