import { makeObservable, observable, action } from "mobx";

export default class SearchService {
    filterParams = {
        category: "",
        direction: "",
        query: "",
        page: 1
    };
    result = {};

    constructor() {
        makeObservable(this, {
            filterParams: observable,
            result: observable,
            setCategory: action,
            setDirection: action,
            setQuery: action,
            setPage: action,
            setResult: action,
            reset: action,
            filter: action
        });
    }

    setCategory = (category: Category) => {
        this.reset();
        this.filterParams = {
            ...this.filterParams,
            category
        };
    };

    setDirection = (direction: Direction) => {
        this.filterParams = {
            ...this.filterParams,
            direction
        };
    };

    setQuery = (query: string) => {
        this.filterParams = {
            ...this.filterParams,
            query
        };
    };

    setPage = (page: number) => {
        this.filterParams = {
            ...this.filterParams,
            page
        };
    };

    setResult = (result: SearchResult) => {
        this.result = result;
    };

    reset = () => {
        this.filterParams = {
            category: "",
            direction: "",
            query: "",
            page: 1
        };
    };

    filter = async () => {
        const self = this;
        const res: Promise<SearchResult> = new Promise((resolve) => {
            setTimeout(
                () =>
                    resolve({
                        // @ts-ignore
                        data: [
                            {
                                category: self.filterParams.category,
                                direction: self.filterParams.direction,
                                query: self.filterParams.query,
                                page: self.filterParams.page
                            }
                        ],
                        total_count: 1
                    }),
                1500
            );
        });
        res.then((v) => this.setResult(v));
    };
}
