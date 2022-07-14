import { AxiosInstance } from 'axios'
import { inject, injectable } from "inversify";
import { TYPES } from "../../constants";

export type ApiGet = <R, C = void>(path: string, config?: C) => Promise<R>
export type ApiPost = <D, R = void, C = void>(path: string, data?: D, config?: C) => Promise<R>
export type ApiPut = <D, R = void, C = void>(path: string, data?: D, config?: C) => Promise<R>
export type ApiDelete = <R, C>(path: string, config?: C) => Promise<R>

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

    get<R, C> (path: string, config?: C): Promise<R> {
        return this.$api.get(path, config).then(v => v.data)
    }

    post<D, R, C> (path: string, data?: D, config?: C): Promise<R> {
        return this.$api.post(path, data, config).then(v => v.data)
    }

    put<D, R, C> (path: string, data?: D, config?: C): Promise<R> {
        return this.$api.put(path, data, config).then(v => v.data)
    }

    delete<R, C> (path: string, config?: C): Promise<R> {
        return this.$api.delete(path, config).then(v => v.data)
    }
}
