import { inject, injectable } from "inversify";
import { TYPES } from "../../constants";
import { IApiService } from "../api/api";
import { makeObservable, observable } from "mobx";

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

    init: () => Promise<void>
    getUser: () => User | null
    setState: (state: UserAuthState) => void
    fetchUser: () => Promise<User>
}

@injectable()
export class UserAuthService implements IUserAuthService {
    state: UserAuthState = { isLoggedIn: false }
    apiService: IApiService

    constructor(
        @inject(TYPES.apiService) apiService: IApiService
    ) {
        makeObservable(this, {
            state: observable
        })
        this.apiService = apiService
        this.init()
    }

    async init () {
        const user = await this.fetchUser()
        this.setState({ isLoggedIn: true, user})
    }

    getUser () {
        return this.state.isLoggedIn ? this.state?.user : null
    }

    setState (state: UserAuthState) {
        this.state = state
    }

    async fetchUser () {
        return this.apiService.get<User>('/me')
    }
}
