import React from "react";

export const VideoView = (result: string[]) => {

    return (
        <div>
            Video Search State: {Object.values(result).join(', ')}
        </div>
    );
};
