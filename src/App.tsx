import React from 'react';
import { Library } from "./components/Library/Library";
import { myContainer } from "./composition-root";

export const App: React.FC = () => {
    return (
        <myContainer.AppProvider>
            <Library />
        </myContainer.AppProvider>
    );
};
