import * as mongoes from 'mongoose';
export declare const EmployeeSchema: mongoes.Schema<any, mongoes.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoes.DefaultSchemaOptions, {
    name?: string;
    department?: string;
    email?: string;
    mobile?: string;
    dob?: string;
    city?: string;
    doj?: string;
    country?: string;
    address?: string;
    status?: string;
}>;
