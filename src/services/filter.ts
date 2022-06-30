import React from "react";
import { makeObservable, observable, reaction, action } from "mobx";

import { FilterParamsState } from "./filterParams";
import { FilterResultActions, SearchResult } from "./filterResult";

export interface FilterService {
    filterParamsState: FilterParamsState
    filterResultActions: FilterResultActions

    readonly filter: () => Promise<void>
}

export function createFilterContext (filterService: FilterService) {
    return React.createContext(filterService)
}

export default class Filter implements FilterService {
    filterParamsState;
    filterResultActions;

    constructor (
        filterParamsState: FilterParamsState,
        filterResultActions: FilterResultActions,

    ) {
        this.filterParamsState = filterParamsState
        this.filterResultActions = filterResultActions

        makeObservable(this, {
            filterParamsState: observable,
            filter: action,
        })

        reaction(
            () => [
                this.filterParamsState.category,
                this.filterParamsState.direction,
                this.filterParamsState.format,
                this.filterParamsState.level,
                this.filterParamsState.query,
                this.filterParamsState.page
            ],
            () => {
                this.filter()
            }
        )
    }

    filter = async () => {
        new Promise<SearchResult>((resolve) => {
            setTimeout(
                () =>
                    resolve({
                        data: [`Video Id ${100 * Math.random()}`, `Video Id ${100 * Math.random()}`, `Video Id ${100 * Math.random()}`],
                        totalCount: 1
                    }),
                1500
            );
        }).then((value) => this.filterResultActions.setResult(value));
    };
}
