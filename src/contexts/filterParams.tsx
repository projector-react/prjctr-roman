import React, { useContext, ReactNode } from "react"
import { filterParams } from "../composition-root";
import { Category, Direction, Format, Level } from "../types/filter";

type FilterParamsType = {
    children: ReactNode;
};

export interface FilterParamsState {
    readonly category: Category,
    readonly direction: Direction,
    readonly format: Format,
    readonly level: Level,
    readonly query: string,
    readonly page: number
}

export interface FilterParamsActions {
    readonly setCategory: (category: Category) => void
    readonly setDirection: (direction: Direction) => void
    readonly setFormat: (format: Format) => void
    readonly setLevel: (level: Level) => void
    readonly setQuery: (query: string) => void
    readonly setPage: (page: number) => void
    readonly reset: () => void
}

export type FilterParamsService = FilterParamsState & FilterParamsActions

const FilterParamsContext = React.createContext<FilterParamsService>(filterParams)

export const FilterParamsProvider = ({ children }: FilterParamsType) => {
    const service: FilterParamsState & FilterParamsActions = filterParams
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
