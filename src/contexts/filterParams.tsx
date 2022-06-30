import React, { useContext, ReactNode } from "react"
import { myContainer } from "../composition-root";

type FilterParamsType = {
    children: ReactNode;
};

const { FilterParamsContext } = myContainer

export const FilterParamsProvider = ({ children }: FilterParamsType) => {
    const service = useFilterParamsService()
    return (
        <FilterParamsContext.Provider value={service}>
            {children}
        </FilterParamsContext.Provider>
    )
}

export const useFilterParamsService = () => {
    const context = useContext(FilterParamsContext)
    if (!context) {
        throw Error('You can\'t use filter params service context without Provider')
    }
    return context
}
