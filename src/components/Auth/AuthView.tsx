import React  from "react";

interface RegistrationProps {
    username: string;
    password: string;
}

interface AuthViewProps {
    authViewModel: {
        isLoggedIn: boolean,
        login: (props: RegistrationProps) => Promise<void>,
    }
}

export const AuthWrapper = ({ authViewModel }: AuthViewProps) => {
    const login = () => {
        authViewModel.login({ username: 'romantest', password: 'romatest' })
    }

    return (
        <>
            <h1>isLoggedIn: {authViewModel.isLoggedIn ? 'Authenticated' : 'Unauthenticated'}</h1>
            <button onClick={login}>doLogin</button>
        </>
    );
};
