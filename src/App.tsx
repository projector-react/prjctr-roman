import React from 'react';
import { Library } from "./components/Library/Library";
import { ListsProvider } from "./contexts/lists";

import withProvider from './components/HOC/Provider';
import diContainer from './di-container'

const App: React.FC = () => {
    return (
        <ListsProvider>
            <Library />
        </ListsProvider>
    );
};
export const AppWrapper = withProvider(App, diContainer)
