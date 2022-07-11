import FilterParams from "./services/filterParams";
import FilterResult from "./services/filterResult";
import Filter from "./services/filter";

import { createFilterViewModel } from "./components/VideoLibrary/Filter";
import { createVideoViewModel } from "./components/VideoLibrary/Video";
import { createLibraryViewModel } from "./components/VideoLibrary/Library";

export const filterParams = new FilterParams()
export const filterResult = new FilterResult()
export const filterService = new Filter(filterParams, filterResult)

export const filterViewModel = createFilterViewModel(filterParams)
export const videoViewModel = createVideoViewModel(filterResult)
export const LibraryViewModel = createLibraryViewModel(filterService)

export const container = {
    filterParams,
    filterResult,
    filterService,
    filterViewModel,
    videoViewModel,
    LibraryViewModel
}
