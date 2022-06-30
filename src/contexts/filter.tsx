import React, { useContext, ReactNode } from "react"
import { myContainer } from "../composition-root";

type FilterParamsType = {
    children: ReactNode;
};

const { FilterContext } = myContainer

export const FilterProvider = ({ children }: FilterParamsType) => {
    const filterService = useFilterService()
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
