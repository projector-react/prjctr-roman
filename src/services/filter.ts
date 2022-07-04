import React from "react";
import { action, makeObservable, observable, observe } from "mobx";

import { FilterParamsState } from "./filterParams";
import { FilterResultActions, SearchResult } from "./filterResult";

export interface FilterService {
    filterParamsState: FilterParamsState
    filterResultActions: FilterResultActions

    readonly filter: () => Promise<void>
}

interface Disposable {
  dispose: () => void;
}

export function createFilterContext (filterService: FilterService) {
    return React.createContext(filterService)
}

export default class Filter implements FilterService, Disposable {
    filterParamsState;
    filterResultActions;
    disposer;

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

        this.disposer = observe(filterParamsState.state, () => {
            this.filter()
        })
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

    dispose () {
        this.disposer()
    }
}
