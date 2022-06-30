import React, { useContext, ReactNode } from "react"
import { DIContext } from "../composition-root";

type FilterParamsType = {
    children: ReactNode;
};

export const FilterParamsProvider = ({ children }: FilterParamsType) => {
    const { FilterParamsContext } = useContext(DIContext)
    const filterParams = useContext(FilterParamsContext)

    return (
        <FilterParamsContext.Provider value={filterParams}>
            {children}
        </FilterParamsContext.Provider>
    )
}

export const useFilterParamsService = () => {
    const { FilterParamsContext } = useContext(DIContext)
    const context = useContext(FilterParamsContext)
    if (!context) {
        throw Error('You can\'t use filter params service context without Provider')
    }
    return context
}
