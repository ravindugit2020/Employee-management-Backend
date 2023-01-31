import { AuthService } from './auth.service';
import { Auth } from './interfaces/auth.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    findAllEmployees(username: any): Promise<Auth>;
}
