import React from "react";
import { Dependence, diInject } from "../HOC";

import { TYPES } from "../../constants";
import { AuthWrapper } from "./AuthView";
import { User } from "../../services/auth/user";

interface AuthService {
    state: {
        errors: string[]
    }
}
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
interface SignUpService {
    register: (props: RegistrationProps) => Promise<void>
}

interface SignInService {
    login: (props: RegistrationProps) => Promise<void>
}

export const createAuthViewModel = (
    authService: AuthService,
    userService: UserService,
    signUpService: SignUpService,
    signInService: SignInService
) => {
    return {
        auth: authService,
        userState: userService.state,
        register: signUpService.register.bind(signUpService),
        login: signInService.login.bind(signInService)
    }
}

const AuthInjected = diInject(AuthWrapper, {
    authViewModel: new Dependence(TYPES.authViewModel)
})

export const Auth = () => <AuthInjected />
