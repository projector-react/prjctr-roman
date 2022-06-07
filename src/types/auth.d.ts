interface IUser {
    id: string;
    lastName: string;
    firstName: string;
    email: string;
    phoneNumber: string;
    subscribed: boolean;
    subscribeExpireDate: string | null;
}

interface IAuthService {
    user: IUser;
    isLoggedIn: boolean;

    login: () => void;
    setUser: (user: IUser) => void
    setLoggedIn: (value: boolean) => void
    logout: () => void;
}
