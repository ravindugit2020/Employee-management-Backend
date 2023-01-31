import { Model } from 'mongoose';
import { Auth } from './interfaces/auth.interface';
export declare class AuthService {
    private readonly authModule;
    constructor(authModule: Model<Auth>);
    findOne(username: String): Promise<Auth>;
}
