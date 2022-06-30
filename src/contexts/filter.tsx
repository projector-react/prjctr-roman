import React, { useContext, ReactNode } from "react"
import { DIContext } from "../composition-root";

type FilterParamsType = {
    children: ReactNode;
};

export const FilterProvider = ({ children }: FilterParamsType) => {
    const { FilterContext } = useContext(DIContext)
    const filterService = useContext(FilterContext)

    return (
        <FilterContext.Provider value={filterService}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterService = () => {
    const { FilterContext } = useContext(DIContext)
    const context = useContext(FilterContext)

    if (!context) {
        throw Error('You can\'t use filter service context without Provider')
    }
    return context
}
