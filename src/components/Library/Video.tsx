import React  from "react";
import { VideoView } from "./VideoView";
import { useDiContainer } from "../../di-container-context";

export const Video = () => {
    const { filterResult } = useDiContainer();
    const { result } = filterResult

    return (
        <VideoView {...result.data} />
    );
};
