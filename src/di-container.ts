import { Container, interfaces } from 'inversify';

import FilterParams from "./services/filterParams";
import type { FilterParamsService } from "./services/filterParams";

import FilterResult from "./services/filterResult";
import type { FilterResultService } from "./services/filterResult";

import Filter from "./services/filter";
import type { FilterService } from "./services/filter";

import { TYPES } from './constants'

import { createFilterViewModel } from "./components/VideoLibrary/Filter";
import { createVideoViewModel } from "./components/VideoLibrary/Video";

const container: interfaces.Container = new Container();

container.bind<FilterParamsService>(TYPES.filterParams).to(FilterParams).inSingletonScope()
container.bind(TYPES.filterViewModel).toDynamicValue(({ container }) => createFilterViewModel(container.get(TYPES.filterParams)))

container.bind<FilterResultService>(TYPES.filterResult).to(FilterResult).inSingletonScope()
container.bind(TYPES.videoViewModel).toDynamicValue(({ container }) => createVideoViewModel(container.get(TYPES.filterResult)))

container.bind<FilterService>(TYPES.filterService).to(Filter)

export default container;
