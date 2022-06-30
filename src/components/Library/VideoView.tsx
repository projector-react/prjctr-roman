import React, { useContext } from "react";
import { myContainer } from "../../composition-root";
// import { useFilterResultService } from "../../contexts/filterResult";

export const VideoView = () => {
    // const { result } = useFilterResultService()
    const { filterResult } = useContext(myContainer.AppContext)

    return (
        <div>
            Video Search State: {Object.values(filterResult.result).join(', ')}
        </div>
    );
};
