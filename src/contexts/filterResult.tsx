import React, { useContext, ReactNode } from "react"
import { DIContext } from "../composition-root";

type FilterResultType = {
    children: ReactNode;
};

export const FilterResultProvider = ({ children }: FilterResultType) => {
    const { FilterResultContext } = useContext(DIContext)
    const filterResultService = useContext(FilterResultContext)

    return (
        <FilterResultContext.Provider value={filterResultService}>
            {children}
        </FilterResultContext.Provider>
    )
}

export const useFilterResultService = () => {
    const { FilterResultContext } = useContext(DIContext)
    const context = useContext(FilterResultContext)
    if (!context) {
        throw Error('You can\'t use filter result service context without Provider')
    }
    return context
}
