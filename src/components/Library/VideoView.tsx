import React from "react";
import { useDiContainer } from "../../di-container-context";

export const VideoView = () => {
    // const { result } = useFilterResultService()
    const { filterResult } = useDiContainer()

    return (
        <div>
            Video Search State: {Object.values(filterResult.result).join(', ')}
        </div>
    );
};
