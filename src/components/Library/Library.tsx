import React from "react";
import { observer } from "mobx-react";

import { FilterView } from "./FilterView";
import { VideoView } from "./VideoView";

import { LibraryProps } from "../../types/filter/filter-business";

export const Library = observer(({ filterParamsService, filterResultState }: LibraryProps) => {
    return (
        <>
            <FilterView {...filterParamsService} />
            <VideoView {...filterResultState.result} />
        </>
    );
})
