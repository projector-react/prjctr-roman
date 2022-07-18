import { inject, injectable } from "inversify";
import { TYPES } from "../../constants";
import { IUserAuthService } from "./user";
import { IAuthService } from "./auth";

interface RegistrationProps {
    readonly username: string;
    readonly password: string;
}

export interface ISignUpService {
    authService: IAuthService
    userService: IUserAuthService
    readonly register: (props: RegistrationProps) => Promise<void>
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

    async register (props: RegistrationProps): Promise<void> {
        const user = await this.authService.register(props)
        if (user) {
            this.userService.setState({ isLoggedIn: true, user })
        }
    }
}
