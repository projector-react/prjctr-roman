import React from 'react';
import { DIProvider } from "./composition-root";
import { Library } from "./components/Library/Library";

export const App: React.FC = () => {
    return (
        <DIProvider>
            <Library />
        </DIProvider>
    );
};
