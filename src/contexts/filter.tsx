import React, { useContext, ReactNode } from "react"
import { filterService } from "../composition-root";

import { FilterParamsState } from "./filterParams";
import { FilterResultActions } from "./filterResult";

type FilterParamsType = {
    children: ReactNode;
};

export interface FilterService {
    filterParamsState: FilterParamsState
    filterResultActions: FilterResultActions

    readonly filter: () => Promise<void>
}

const FilterContext = React.createContext<FilterService>(filterService)

export const FilterParamsProvider = ({ children }: FilterParamsType) => {
    return (
        <FilterContext.Provider value={filterService}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterService = () => {
    const context = useContext(FilterContext)
    if (!context) {
        throw Error('You can\'t use filter service context without Provider')
    }
    return context
}
