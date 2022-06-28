import React from "react";
import { observer } from "mobx-react";

import { FilterView } from "./FilterView";
import { VideoView } from "./VideoView";

import { FilterParamsProvider, useFilterParamsService } from "../../contexts/filterParams";
import { FilterResultProvider, useFilterResultService } from "../../contexts/filterResult";

export const Library = observer(() => {
    const { result } = useFilterResultService()
    const filterParams = useFilterParamsService()

    return (
        <FilterParamsProvider>
            <FilterResultProvider>
                <FilterView {...filterParams} />
                <VideoView {...result} />
            </FilterResultProvider>
        </FilterParamsProvider>
    );
})
