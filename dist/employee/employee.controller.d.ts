import { EmployeeDTO } from './dto/employee.dto';
import { EmployeeService } from './employee.service';
import { Employee } from './interfaces/employee.interface';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    createEmployee(employeeDto: EmployeeDTO): Promise<Employee>;
    findAllEmployees(): Promise<Employee[]>;
    findAllEmployee(): String;
    countEmployees(): Promise<String>;
    delete(id: any): Promise<Employee>;
    update(updateEmployeeDto: EmployeeDTO, id: any): Promise<Employee>;
}
