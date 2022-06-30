import React, { Context, ReactNode, useContext } from "react";

import FilterParams, { FilterParamsService, createFilterParamsContext } from "./services/filterParams";
import FilterResult, { FilterResultService, createFilterResultContext } from "./services/filterResult";
import Filter, { FilterService, createFilterContext } from "./services/filter";

type FilterResultType = {
    children: ReactNode;
};

interface DIProvider {
    FilterParamsContext: Context<FilterParamsService>;
    FilterResultContext: Context<FilterResultService>;
    FilterContext: Context<FilterService>;
}

export const filterParams = new FilterParams()
export const filterResult = new FilterResult()
export const filterService = new Filter(filterParams, filterResult)

const FilterParamsContext: Context<FilterParamsService> = createFilterParamsContext(filterParams)
const FilterResultContext: Context<FilterResultService> = createFilterResultContext(filterResult)
const FilterContext: Context<FilterService> = createFilterContext(filterService);

function createDIProvider (Context: Context<DIProvider>) {
    const container = useContext(Context)
    return function ({ children }: FilterResultType) {
        return <Context.Provider value={container}>
            {children}
        </Context.Provider>
    }
}

const container = {
    FilterParamsContext,
    FilterResultContext,
    FilterContext
}

const DIContext = React.createContext<DIProvider>(container)
const DIProvider = createDIProvider(DIContext)

export { DIContext, DIProvider }

