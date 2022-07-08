import React from 'react';
import { container } from "./composition-root";
import { Library } from "./components/Library/Library";
import { DiContainerContext } from './di-container-context';
import { ListsProvider } from "./contexts/lists";

export const App: React.FC = () => {
    return (
        <DiContainerContext.Provider value={container}>
            <ListsProvider>
                <Library />
            </ListsProvider>
        </DiContainerContext.Provider>
    );
};
