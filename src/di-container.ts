import { Container, interfaces } from 'inversify';

import { ApiService } from "./services/api/api";
import type { IApiService } from "./services/api/api";

import { AuthService } from "./services/auth/auth";
import type { IAuthService } from "./services/auth/auth";

import { UserAuthService } from "./services/auth/user";
import type { IUserAuthService } from "./services/auth/user";

import { SignUpService } from "./services/auth/signUp";
import type { ISignUpService } from "./services/auth/signUp";

import { SignInService } from "./services/auth/signIn";
import type { ISignInService } from "./services/auth/signIn";

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

container.bind<IApiService>(TYPES.apiService).to(ApiService)

container.bind<IAuthService>(TYPES.authService).to(AuthService)
container.bind<IUserAuthService>(TYPES.userAuthService).to(UserAuthService)

container.bind<ISignUpService>(TYPES.signUpService).to(SignUpService)
container.bind<ISignInService>(TYPES.signInService).to(SignInService)

container.bind<FilterParamsService>(TYPES.filterParams).to(FilterParams).inSingletonScope()
container.bind(TYPES.filterViewModel).toDynamicValue(({ container }) => createFilterViewModel(container.get(TYPES.filterParams)))

container.bind<FilterResultService>(TYPES.filterResult).to(FilterResult).inSingletonScope()
container.bind(TYPES.videoViewModel).toDynamicValue(({ container }) => createVideoViewModel(container.get(TYPES.filterResult)))

container.bind<FilterService>(TYPES.filterService).to(Filter)

export default container;
