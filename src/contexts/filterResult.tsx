import React, { useContext, ReactNode } from "react"
import { filterResult } from "../composition-root";
import { SearchResult } from "../types/filter";

type FilterResultType = {
    children: ReactNode;
};

export interface FilterResultState {
    readonly result: SearchResult;
}

export interface FilterResultActions {
    readonly setResult: (result: SearchResult) => void
}

export type FilterResultService = FilterResultState & FilterResultActions

const FilterResultContext = React.createContext<FilterResultService>(filterResult)

export const FilterResultProvider = ({ children }: FilterResultType) => {
    const service: FilterResultState & FilterResultActions = filterResult
    return (
        <FilterResultContext.Provider value={service}>
            {children}
        </FilterResultContext.Provider>
    )
}

export const useFilterResultService = () => {
    const context = useContext(FilterResultContext)
    if (!context) {
        throw Error('You can\'t use filter result service context without Provider')
    }
    return context
}
