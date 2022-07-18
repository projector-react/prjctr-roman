import { createAxiosInstance } from "./services/api/create-axios-instance";
import { AuthService } from "./services/auth/auth";
import FilterParams from "./services/filterParams";
import FilterResult from "./services/filterResult";
import Filter from "./services/filter";

import { createFilterViewModel } from "./components/VideoLibrary/Filter";
import { createVideoViewModel } from "./components/VideoLibrary/Video";
import { createLibraryViewModel } from "./components/VideoLibrary/Library";
import { ApiService } from "./services/api/api";
import { SignInService } from "./services/auth/signIn";
import { UserAuthService } from "./services/auth/user";
import { SignUpService } from "./services/auth/signUp";
import { createAuthViewModel } from "./components/Auth";

const axiosInstance = createAxiosInstance()
const apiService = new ApiService(axiosInstance)

const authService = new AuthService(apiService)
const userService = new UserAuthService(apiService)
const signInService = new SignInService(authService, userService)
const signUpService = new SignUpService(authService, userService)

const authViewModel = createAuthViewModel(authService, userService, signUpService, signInService)

const filterParams = new FilterParams()
const filterResult = new FilterResult()
const filterService = new Filter(filterParams, filterResult)

const filterViewModel = createFilterViewModel(filterParams)
const videoViewModel = createVideoViewModel(filterResult)
const libraryViewModel = createLibraryViewModel(filterService)

export const container = {
    apiService,
    authService,
    userService,
    signInService,
    signUpService,
    authViewModel,
    filterParams,
    filterResult,
    filterService,
    filterViewModel,
    videoViewModel,
    libraryViewModel
}
