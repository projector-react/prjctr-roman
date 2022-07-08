import React from "react";

type SearchResult = {
    data: string[]
    totalCount: number
}

interface VideoViewProps {
    videoViewModelProps: SearchResult
}

export const VideoView = ({ videoViewModelProps }: VideoViewProps) => {
    const { data } = videoViewModelProps
    return (
        <div>
            Video Search State: {Object.values(data).join(', ')}
        </div>
    );
};
