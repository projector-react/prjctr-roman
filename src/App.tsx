import React from 'react';
import { container } from "./composition-root";
import { Library } from "./components/Library/Library";
import { DiContainerContext } from './di-container-context';

export const App: React.FC = () => {
    return (
        <DiContainerContext.Provider value={container}>
            <Library />
        </DiContainerContext.Provider>
    );
};
