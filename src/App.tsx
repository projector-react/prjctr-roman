import React from 'react';
import { filterParams, filterResult } from "./composition-root";
import { Library } from "./components/Library/Library";

export const App: React.FC = () => {

    return (
        <>
            <Library
                filterParamsService={filterParams}
                filterResultState={filterResult}
            />
        </>
    );
};
