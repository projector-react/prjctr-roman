import React from "react";
import { observer } from "mobx-react";

import { FilterView } from "./FilterView";
import { VideoView } from "./VideoView";

// import { FilterParamsProvider } from "../../contexts/filterParams";
// import { FilterResultProvider } from "../../contexts/filterResult";

export const Library = observer(() => {
    return (
        <>
            {/*<FilterParamsProvider>*/}
                <FilterView />
            {/*</FilterParamsProvider>*/}
            {/*<FilterResultProvider>*/}
                <VideoView />
            {/*</FilterResultProvider>*/}
        </>
    );
})
