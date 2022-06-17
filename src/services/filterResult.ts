import { makeObservable, observable, action } from "mobx";
import { FilterResultActions, FilterResultState, SearchResult } from "../types/filter";

export default class FilterResult implements FilterResultState, FilterResultActions {
    result = {
        data: [],
        totalCount: 0
    } as SearchResult

    constructor() {
        makeObservable(this, {
            result: observable,
            setResult: action,
            reset: action
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
