import React, { Context, ReactNode, useContext } from "react";

import FilterParams, { FilterParamsService } from "./services/filterParams";
import FilterResult, { FilterResultService } from "./services/filterResult";
import Filter, { FilterService } from "./services/filter";

type FilterResultType = {
    children: ReactNode;
};

interface AppServiceProvider {
    filterParams: FilterParamsService;
    filterResult: FilterResultService;
    filter: FilterService;
}

export const filterParams = new FilterParams()
export const filterResult = new FilterResult()
export const filterService = new Filter(filterParams, filterResult)

const FilterParamsContext = createFilterParamsContext(filterParams)
const FilterResultContext = createFilterResultContext(filterResult)
const FilterContext = createFilterContext(filterService);

function createFilterParamsContext (filterParamsService: FilterParamsService) {
    return React.createContext(filterParamsService)
}

function createFilterResultContext (filterResultService: FilterResultService) {
    return React.createContext(filterResultService)
}

function createFilterContext (filterService: FilterService) {
    return React.createContext(filterService)
}

const services = createAppServices(FilterParamsContext, FilterResultContext, FilterContext)

const AppContext = React.createContext<AppServiceProvider>(services)
const AppProvider = AppServiceProvider(AppContext)

function AppServiceProvider (context: Context<AppServiceProvider>) {
    return function ({ children }: FilterResultType) {
        return <context.Provider value={services}>
            {children}
        </context.Provider>
    }
}

function createAppServices (
    FilterParamsContext: Context<FilterParamsService>,
    FilterResultContext: Context<FilterResultService>,
    FilterContext: Context<FilterService>
) {
    return {
        filterParams: useContext(FilterParamsContext),
        filterResult: useContext(FilterResultContext),
        filter: useContext(FilterContext)
    }
}

const myContainer = {
    FilterParamsContext,
    FilterResultContext,
    FilterContext,
    AppProvider,
    AppContext
}

export { myContainer }

