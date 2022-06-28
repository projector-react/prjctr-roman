import { makeObservable, observable, reaction, action } from "mobx";
import { SearchResult } from "../types/filter";

import { FilterService } from "../contexts/filter";
import { FilterParamsState } from "../contexts/filterParams";
import { FilterResultActions } from "../contexts/filterResult";

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
                    } as SearchResult),
                1500
            );
        }).then((value: SearchResult) => this.filterResultActions.setResult(value));
    };
}
