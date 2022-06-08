import React from 'react';
import { Library } from "./components/Library";
import { searchService } from './composition-root'

export const App: React.FC = () => {
    return <Library appState={searchService} />
};
