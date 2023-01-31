import { Model } from 'mongoose';
import { Department } from './interface/department.interface';
export declare class DepartmentService {
    private readonly departmentModel;
    constructor(departmentModel: Model<Department>);
    findAll(): Promise<Department[]>;
    count(): Promise<any>;
    create(department: Department): Promise<Department>;
}
