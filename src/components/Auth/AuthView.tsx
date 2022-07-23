import React  from "react";

interface RegistrationProps {
    username: string;
    password: string;
}

interface AuthViewProps {
    authViewModel: {
        auth: {
            state: {
                errors: []
            },
            login: (props: RegistrationProps) => Promise<void>,
        },
        userState: {
            isLoggedIn: boolean,
            user: {
                username: string
            },
        },
        register: (props: RegistrationProps) => Promise<void>,
        login: (props: RegistrationProps) => Promise<void>,
    }
}

export const AuthWrapper = ({ authViewModel }: AuthViewProps) => {
    const register = () => {
        authViewModel.register({ username: 'romantest', password: 'romatest' })
    }
    const login = () => {
        authViewModel.login({ username: 'romantest', password: 'romatest' })
    }

    return (
        <>
            <h1>isLoggedIn: {authViewModel.userState && Object.entries(authViewModel.userState).join('')}</h1>
            <h1>user: {authViewModel.userState.user && Object.entries(authViewModel.userState.user).join('')}</h1>
            <br/>
            <hr/>
            <br/>
            <button onClick={register}>doRegister</button>
            <button onClick={login}>doLogin</button>
            <div className="">{authViewModel.auth.state.errors.join(', ')}</div>
        </>
    );
};
