import { inject, injectable } from "inversify";
import { TYPES } from "../../constants";
import { IApiService } from "../api/api";

export interface User {
    readonly id: string;
    readonly lastName: string;
    readonly firstName: string;
    readonly email: string;
    readonly phoneNumber: string;
    readonly subscribed: boolean;
    readonly subscribeExpireDate: Date | null;
}

type UserAuthState = {
    readonly isLoggedIn: false;
} |
    {
        readonly isLoggedIn: true;
        readonly user: User;
    }

export interface IUserAuthService {
    state: UserAuthState
    apiService: IApiService

    getUser: () => User
    setState: (state: UserAuthState) => void
    fetchUser: () => Promise<User>
}

@injectable()
export class UserAuthService implements IUserAuthService {
    state: UserAuthState
    apiService: IApiService

    constructor(
        @inject(TYPES.apiService) apiService: IApiService
    ) {
        this.state = {
            isLoggedIn: false
        }
        this.apiService = apiService
    }

    getUser () {
        if (!this.state.isLoggedIn) {
            throw Error('You are unauthorized')
        }
        return this.state.user
    }

    setState (state: UserAuthState) {
        this.state = state
    }

    async fetchUser () {
        return this.apiService.get<User>('/me')
    }
}
