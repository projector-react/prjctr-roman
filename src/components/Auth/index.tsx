import React from "react";
import { Dependence, diInject } from "../HOC";

import { TYPES } from "../../constants";
import { AuthWrapper } from "./AuthView";
import { User } from "../../services/auth/user";

type UserAuthState = {
    readonly isLoggedIn: false;
} |
    {
        readonly isLoggedIn: true;
        readonly user: User;
    }

interface UserService {
    state: UserAuthState
}

interface RegistrationProps {
    username: string;
    password: string;
}

interface SignInService {
    login: (props: RegistrationProps) => Promise<void>
}

export const createAuthViewModel = (
    userService: UserService,
    signInService: SignInService
) => {
    return {
        userState: userService.state,
        login: signInService.login.bind(signInService)
    }
}

const AuthInjected = diInject(AuthWrapper, {
    authViewModel: new Dependence(TYPES.authViewModel)
})

export const Auth = () => <AuthInjected />
