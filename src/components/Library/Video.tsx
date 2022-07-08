import React  from "react";
import { VideoView } from "./VideoView";
import { useDiContainer } from "../../di-container-context";
import { observer } from "mobx-react";

export const Video = observer(() => {
    const { filterResult } = useDiContainer();
    const { result } = filterResult

    return (
        <VideoView {...result.data} />
    );
});
