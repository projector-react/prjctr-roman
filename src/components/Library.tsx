import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { reaction } from "mobx";

import { FilterView } from "./FilterView";
import { VideoView } from "./VideoView";

type LibraryProps = {
    appState: SearchState & SearchService
}

export const Library = observer(({ appState }: LibraryProps) => {
    useEffect(() => {
        reaction(
            () => appState.filterParams,
            () => {
                appState.filter();
            }
        );
    }, []);

    const filterDataProps = {
        filterParams: appState.filterParams,
        content: appState.result
    };

    const filterActionsProps = {
        setCategory: appState.setCategory,
        setDirection: appState.setDirection,
        setQuery: appState.setQuery,
        setPage: appState.setPage,
        reset: appState.reset
    };

    return (
        <div className="library">
            <FilterView {...filterDataProps} {...filterActionsProps} />
            <VideoView result={filterDataProps.content} />
    </div>
);
});
