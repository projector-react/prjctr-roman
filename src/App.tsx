import React from 'react';
import { createDiContext, container } from "./composition-root";
import { Library } from "./components/Library/Library";

export const App: React.FC = () => {
    return (
        <createDiContext.Provider value={container}>
            <Library />
        </createDiContext.Provider>
    );
};
