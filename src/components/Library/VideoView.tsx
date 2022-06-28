import React from "react";
import { SearchResult } from "../../types/filter";

export const VideoView = ({ data, totalCount }: SearchResult) => {
    return (
        <div>
            Video Search State: {Object.values(data).join(', ')}
            Video Search Pages: {totalCount}
        </div>
    );
};
