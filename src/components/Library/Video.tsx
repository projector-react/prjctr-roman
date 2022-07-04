import React  from "react";
import { useFilterResultService } from "../../contexts/filterResult";
import { VideoView } from "./VideoView";

export const Video = () => {
    const { result } = useFilterResultService()

    return (
        <VideoView {...result.data} />
    );
};
