import React from 'react';
import { container } from "./composition-root";
import { Library } from "./components/Library/Library";
import { DiContainer } from './di-container';

export const App: React.FC = () => {
    return (
        <DiContainer.Provider value={container}>
            <Library />
        </DiContainer.Provider>
    );
};
