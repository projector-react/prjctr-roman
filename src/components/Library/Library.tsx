import React from "react";
import { observer } from "mobx-react";

import { FilterView } from "./FilterView";
import { VideoView } from "./VideoView";
import { FilterParamsActions, FilterParamsState, FilterResultState } from "../../types/filter";

type LibraryProps = {
    filterParamsService: FilterParamsState & FilterParamsActions,
    filterResultState: FilterResultState
}

export const Library = observer(({ filterParamsService, filterResultState }: LibraryProps) => {

    return (
        <>
            <FilterView {...filterParamsService} />
            <VideoView result={filterResultState.result} />
        </>
    );
})
