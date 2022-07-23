import React from 'react';
import { Container } from 'inversify'
import createCompositionRoot from './composition-root'
import { Library } from "./components/VideoLibrary/Library";
import { ListsProvider } from "./contexts/lists";

import withProvider from './components/HOC/Provider';
import { Auth } from "./components/Auth";

const App: React.FC = () => {
    return (
        <ListsProvider>
            <Auth />
            <Library />
        </ListsProvider>
    );
};

const Wrapped = withProvider(App, createCompositionRoot(new Container()))

export const AppWrapper: React.FC = () => {
    return <Wrapped />
}


