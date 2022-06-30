import React from "react";
import { observer } from "mobx-react";

import { Filter } from "./Filter";
import { VideoView } from "./VideoView";

import { FilterParamsProvider } from "../../contexts/filterParams";
import { FilterResultProvider } from "../../contexts/filterResult";

export const Library = observer(() => {
    return (
        <>
            <FilterParamsProvider>
                <Filter />
            </FilterParamsProvider>
            <FilterResultProvider>
                <VideoView />
            </FilterResultProvider>
        </>
    );
})
