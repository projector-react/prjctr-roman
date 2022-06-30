import React, { useContext, ReactNode } from "react"
import { myContainer } from "../composition-root";

type FilterResultType = {
    children: ReactNode;
};

const { FilterResultContext } = myContainer

export const FilterResultProvider = ({ children }: FilterResultType) => {
    const service = useFilterResultService()
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
