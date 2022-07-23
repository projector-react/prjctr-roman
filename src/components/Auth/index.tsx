import React from "react";
import { Dependence, diInject } from "../HOC";

import { TYPES } from "../../constants";
import { AuthWrapper } from "./AuthView";
import { Account } from "../../services/auth/account";

type AccountState = {
    readonly isLoggedIn: false;
} |
    {
        readonly isLoggedIn: true;
        readonly account: Account;
    }

interface AccountService {
    state: AccountState
}

interface RegistrationProps {
    username: string;
    password: string;
}

interface SignInService {
    login: (props: RegistrationProps) => Promise<void>
}

export const createAuthViewModel = (
    accountService: AccountService,
    signInService: SignInService
) => {
    return {
        isLoggedIn: accountService.state.isLoggedIn,
        login: signInService.login.bind(signInService)
    }
}

const AuthInjected = diInject(AuthWrapper, {
    authViewModel: new Dependence(TYPES.authViewModel)
})

export const Auth = () => <AuthInjected />
