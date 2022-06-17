import React from "react";
import { FilterResultState } from "../../types/filter";

export const VideoView = ({ result }: FilterResultState) => {
    return (
        <div>
            Video Search State: {Object.values(result.data).join(', ')}
        </div>
    );
};
