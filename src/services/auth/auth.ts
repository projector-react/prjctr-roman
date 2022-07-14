import { TYPES } from "../../constants";
import { inject, injectable } from "inversify";
import { User } from "./user";
import { IApiService } from "../api/api";

export type IAuthService = {
    apiService: IApiService
} & ISignUpService & ISignInService

interface RegistrationProps {
    readonly lastName: string;
    readonly firstName: string;
    readonly email: string;
    readonly phoneNumber: string;
}

interface ISignUpService {
    readonly register: (props: RegistrationProps) => Promise<User>
}

interface LoginProps {
    email: string
    password: string
}

interface ISignInService {
    readonly login: (props: LoginProps) => Promise<User>
    readonly logout: () => Promise<void>
}

export type Tokens = {
    access_token: string;
    refresh_token: string;
};

@injectable()
export class AuthService implements IAuthService {
    apiService: IApiService

    constructor(@inject(TYPES.apiService) apiService: IApiService) {
        this.apiService = apiService
    }

    async register (props: RegistrationProps): Promise<User> {
        return this.apiService.post<RegistrationProps, User>('auth/register', props);
    }

    async login (props: LoginProps): Promise<User> {
        return this.apiService.post<LoginProps, User>('auth/login', props);
    }

    async logout (): Promise<void> {
        return this.apiService.post('auth/logout')
    }

    async refreshToken (): Promise<Pick<Tokens, 'access_token'>> {
        return this.apiService.post('auth/auth/refresh')
    }
}
