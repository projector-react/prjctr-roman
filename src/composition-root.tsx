import FilterParams from "./services/filterParams";
import FilterResult from "./services/filterResult";
import Filter from "./services/filter";

export const filterParams = new FilterParams()
export const filterResult = new FilterResult()
export const filterService = new Filter(filterParams, filterResult)

const container = {
    filterParams,
    filterResult,
    filterService
}

export { container }

