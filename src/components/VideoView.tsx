import React from "react";

type VideoViewProps = Pick<SearchState, 'result'>

export const VideoView = ({ result }: VideoViewProps) => {
    return (
        <div>
            Video Search State: {Object.entries(result.data)}
        </div>
    );
};
