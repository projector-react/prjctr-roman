import React from "react";
import { Dependence, diInject } from "../../HOC";

import { TYPES } from "../../../constants";
import { LibraryWrapper } from "./LibraryView";

interface FilterService {
    readonly filter: () => Promise<void>
    readonly dispose: () => void
}

export const createLibraryViewModel = (filterService: FilterService) => {
    return {
        filter: filterService.filter,
        dispose: filterService.dispose
    }
}

const LibraryInjected = diInject(LibraryWrapper, {
    libraryViewModel: new Dependence(TYPES.filterService)
})

export const Library = () => <LibraryInjected />
