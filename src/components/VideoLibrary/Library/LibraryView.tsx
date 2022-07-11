import React, { useEffect } from "react";

import { Filter } from "../Filter";
import { Video } from "../Video";

interface LibraryViewProps {
    libraryViewModel: {
        filter: () => Promise<void>
        dispose: () => void
    }
}

export const LibraryWrapper = ({ libraryViewModel }: LibraryViewProps) => {

    useEffect(() => {
        libraryViewModel.filter()

        return () => {
            libraryViewModel.dispose()
        }
    }, [])

    return (
        <>
            <Filter />
            <Video />
        </>
    );
};

