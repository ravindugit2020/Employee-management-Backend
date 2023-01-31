import { DepartmentService } from './department.service';
import { DepartmentDTO } from './dto/department.dto';
import { Department } from './interface/department.interface';
export declare class DepartmentController {
    private readonly departmentService;
    constructor(departmentService: DepartmentService);
    createDepartment(departmentDTO: DepartmentDTO): Promise<Department>;
    findAllDepartment(): Promise<Department[]>;
    countDepartments(): Promise<String>;
}
