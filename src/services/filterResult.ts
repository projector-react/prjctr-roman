import { makeObservable, observable, action } from "mobx";
import { SearchResult } from "../types/filter";

import { FilterResultService } from "../contexts/filterResult";

export default class FilterResult implements FilterResultService {
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
