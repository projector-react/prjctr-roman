import { inject, injectable } from "inversify";
import { TYPES } from "../../constants";
import { IUserAuthService } from "./user";
import { IAuthService } from "./auth";

interface LoginProps {
    username: string
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
        await this.authService.login(props)

        const user = await this.userService.fetchUser()
        this.userService.setState({ isLoggedIn: true, user})
    }

    async logout (): Promise<void> {
        await this.authService.logout()
        this.userService.setState({ isLoggedIn: false })

    }
}
