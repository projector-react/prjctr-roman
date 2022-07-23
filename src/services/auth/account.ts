import { inject, injectable } from "inversify";
import { TYPES } from "../../constants";
import { IApiService } from "../api/api";
import { makeObservable, observable } from "mobx";

export interface Account {
    readonly id: string;
    readonly lastName: string;
    readonly firstName: string;
    readonly email: string;
    readonly phoneNumber: string;
    readonly subscribed: boolean;
    readonly subscribeExpireDate: Date | null;
}

type AccountState = {
    readonly isLoggedIn: false;
} |
    {
        readonly isLoggedIn: true;
        readonly account: Account;
    }

export interface IAccountService {
    state: AccountState
    apiService: IApiService

    init: () => Promise<void>
    getAccount: () => Account | null
    setState: (state: AccountState) => void
    fetchAccount: () => Promise<Account>
}

@injectable()
export class AccountService implements IAccountService {
    state: AccountState = { isLoggedIn: false }
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
        const account = await this.fetchAccount()
        this.setState({ isLoggedIn: true, account})
    }

    getAccount () {
        return this.state.isLoggedIn ? this.state?.account : null
    }

    setState (state: AccountState) {
        this.state = state
    }

    async fetchAccount () {
        return this.apiService.get<Account>('/me')
    }
}
