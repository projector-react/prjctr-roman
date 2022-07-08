import FilterParams from "./services/filterParams";
import FilterResult from "./services/filterResult";
import Filter from "./services/filter";

import { createFilterViewModel } from "./components/Library/Filter";
import { createVideoViewModel } from "./components/Library/Video";

export const filterParams = new FilterParams()
export const filterResult = new FilterResult()
export const filterService = new Filter(filterParams, filterResult)

export const filterViewModel = createFilterViewModel(filterParams)
export const videoViewModel = createVideoViewModel(filterResult)

export const container = {
    filterParams,
    filterResult,
    filterService,
    filterViewModel,
    videoViewModel
}
