interface IUser {
    readonly id: string;
    readonly lastName: string;
    readonly firstName: string;
    readonly email: string;
    readonly phoneNumber: string;
    readonly subscribed: boolean;
    readonly subscribeExpireDate: Date | null;
}

interface IAuthService {
    readonly user: IUser;
    readonly isLoggedIn: boolean;

    login: () => void;
    setUser: (user: IUser) => void
    setLoggedIn: (value: boolean) => void
    logout: () => void;
}
