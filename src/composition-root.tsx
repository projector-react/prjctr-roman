import { createAxiosInstance } from "./services/api/create-axios-instance";
import FilterParams from "./services/filterParams";
import FilterResult from "./services/filterResult";
import Filter from "./services/filter";

import { createFilterViewModel } from "./components/VideoLibrary/Filter";
import { createVideoViewModel } from "./components/VideoLibrary/Video";
import { createLibraryViewModel } from "./components/VideoLibrary/Library";
import { ApiService } from "./services/api/api";


const axiosInstance = createAxiosInstance()
const apiService = new ApiService(axiosInstance)

const filterParams = new FilterParams()
const filterResult = new FilterResult()
const filterService = new Filter(filterParams, filterResult)

const filterViewModel = createFilterViewModel(filterParams)
const videoViewModel = createVideoViewModel(filterResult)
const LibraryViewModel = createLibraryViewModel(filterService)

export const container = {
    apiService,
    filterParams,
    filterResult,
    filterService,
    filterViewModel,
    videoViewModel,
    LibraryViewModel
}
