import React from 'react';
import { Library } from "./components/VideoLibrary/Library";
import { ListsProvider } from "./contexts/lists";

import withProvider from './components/HOC/Provider';
import { Auth } from "./components/Auth";
import diContainer from './di-container'

const App: React.FC = () => {
    return (
        <ListsProvider>
            <Auth />
            <Library />
        </ListsProvider>
    );
};

const Wrapped = withProvider(App, diContainer)

export const AppWrapper: React.FC = () => {
    return <Wrapped />
}


