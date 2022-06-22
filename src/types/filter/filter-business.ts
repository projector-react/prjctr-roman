import {
    FilterParamsState,
    FilterResultState,
    FilterParamsActions
} from "./filter-data-access";

export type LibraryProps = {
    filterParamsService: FilterParamsState & FilterParamsActions,
    filterResultState: FilterResultState
}

export type FilterViewProps = FilterParamsState & FilterParamsActions



