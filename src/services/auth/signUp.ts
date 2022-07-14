import { inject, injectable } from "inversify";
import { TYPES } from "../../constants";
import { IUserAuthService, User } from "./user";
import { IAuthService } from "./auth";

interface RegistrationProps {
    readonly lastName: string;
    readonly firstName: string;
    readonly email: string;
    readonly phoneNumber: string;
}

export interface ISignUpService {
    authService: IAuthService
    userService: IUserAuthService
    readonly registerUser: (props: RegistrationProps) => Promise<void>
}

@injectable()
export class SignUpService implements ISignUpService {
    authService: IAuthService
    userService: IUserAuthService

    constructor(
        @inject(TYPES.authService) authService: IAuthService,
        @inject(TYPES.userAuthService) userService: IUserAuthService,
    ) {
        this.authService = authService
        this.userService = userService
    }

    async registerUser (props: RegistrationProps): Promise<void> {
        const user: User = await this.authService.register(props)
        if (!user) {
            throw Error('Username already exist')
        }
        this.userService.setState({ isLoggedIn: true, user })
    }
}
