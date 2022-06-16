interface User {
    readonly id: string;
    readonly lastName: string;
    readonly firstName: string;
    readonly email: string;
    readonly phoneNumber: string;
    readonly subscribed: boolean;
    readonly subscribeExpireDate: Date | null;
}

type AuthState = {
        readonly isLoggedIn: false;
    } |
    {
        readonly isLoggedIn: true;
        readonly user: User;
    }


interface AuthService {
    readonly setUser: (user: User) => void
    readonly setLoggedIn: (value: boolean) => void
}

interface RegistrationProps {
    readonly lastName: string;
    readonly firstName: string;
    readonly email: string;
    readonly phoneNumber: string;
}

interface SignUpService {
    readonly register: (props: RegistrationProps) => Promise<void>
}

interface LoginProps {
    email: string
    password: string
}

interface SignInService {
    readonly login: (props: LoginProps) => Promise<void>
    readonly logout: () => Promise<void>
}
