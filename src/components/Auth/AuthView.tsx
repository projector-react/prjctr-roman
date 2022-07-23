import React  from "react";

interface RegistrationProps {
    username: string;
    password: string;
}

interface UserState {
    isLoggedIn: boolean,
    user: {
        username: string
    },
}

interface AuthViewProps {
    authViewModel: {
        userState: UserState
        login: (props: RegistrationProps) => Promise<void>,
    }
}

export const AuthWrapper = ({ authViewModel }: AuthViewProps) => {
    const login = () => {
        authViewModel.login({ username: 'romantest', password: 'romatest' })
    }

    return (
        <>
            <h1>userState: {authViewModel.userState.user && Object.entries(authViewModel.userState).join('')}</h1>
            <button onClick={login}>doLogin</button>
        </>
    );
};
