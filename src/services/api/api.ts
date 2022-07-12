import { AxiosInstance } from 'axios'
import { inject, injectable } from "inversify";
import { TYPES } from "../../constants";

export type ApiGet = <R, C = void>(path: string, config?: C) => Promise<R>
export type ApiPost = <R, D = void, C = void>(path: string, data: D, config?: C) => Promise<R>
export type ApiPut = <R, D = void, C = void>(path: string, data: D, config?: C) => Promise<R>
export type ApiDelete = <R, C = void>(path: string, config?: C) => Promise<R>

export interface IApiService {
    $api: AxiosInstance

    get: ApiGet
    post: ApiPost
    put: ApiPut
    delete: ApiDelete
}

@injectable()
export class ApiService implements IApiService {
    readonly $api;

    constructor(@inject(TYPES.axiosInstance) api: AxiosInstance) {
        this.$api = api
    }

    async get<R, C> (path: string, config?: C): Promise<R> {
        return this.$api.get(path, config)
    }

    async post<R, D, C> (path: string, data: D, config?: C): Promise<R> {
        return this.$api.post(path, data, config)
    }

    async put<R, D, C> (path: string, data: D, config?: C): Promise<R> {
        return this.$api.put(path, data, config)
    }

    async delete<R, C> (path: string, config?: C): Promise<R> {
        return this.$api.delete(path, config)
    }
}
