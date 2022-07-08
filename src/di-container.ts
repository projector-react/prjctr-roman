import { Container, interfaces } from 'inversify';

import FilterParams from "./services/filterParams";
import type { FilterParamsService } from "./services/filterParams";

import FilterResult from "./services/filterResult";
import type { FilterResultService } from "./services/filterResult";

import Filter from "./services/filter";
import type { FilterService } from "./services/filter";

import { TYPES } from './constants'

const container: interfaces.Container = new Container();

container.bind<FilterParamsService>(TYPES.filterParams).to(FilterParams)
container.bind<FilterResultService>(TYPES.filterResult).to(FilterResult)
container.bind<FilterService>(TYPES.filterService).to(Filter)

export default container;
