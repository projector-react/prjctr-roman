import { inject, injectable } from "inversify";
import { TYPES } from "../../constants";
import { IUserAuthService, User } from "./user";
import { IAuthService } from "./auth";

interface LoginProps {
    email: string
    password: string
}

export interface ISignInService {
    readonly login: (props: LoginProps) => Promise<void>
    readonly logout: () => void
}

@injectable()
export class SignInService implements ISignInService {
    authService: IAuthService
    userService: IUserAuthService

    constructor(
        @inject(TYPES.authService) authService: IAuthService,
        @inject(TYPES.userAuthService) userService: IUserAuthService,
    ) {
        this.authService = authService
        this.userService = userService
    }

    async login (props: LoginProps): Promise<void> {
        const user: User = await this.authService.login(props)

        if (!user) {
            throw Error('Bad username or password')
        }
        this.userService.setState({ isLoggedIn: true, user })
    }

    logout (): void {
        this.authService.logout()
    }
}
