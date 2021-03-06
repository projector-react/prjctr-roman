import { injectable } from "inversify";
import { makeObservable, observable } from "mobx";

export interface SearchResult {
    readonly data: string[]
    readonly totalCount: number
}

export interface FilterResultState {
    readonly result: SearchResult;
}

export interface FilterResultActions {
    readonly setResult: (result: SearchResult) => void
}

export type FilterResultService = FilterResultState & FilterResultActions

@injectable()
export default class FilterResult implements FilterResultService {
    result = {
        data: [],
        totalCount: 0
    } as SearchResult

    constructor() {
        makeObservable(this, {
            result: observable
        });
    }

    setResult = (result: SearchResult) => {
        this.result = result
    };

    reset = () => {
        this.result = {
            data: [],
            totalCount: 0
        }
    };
}
