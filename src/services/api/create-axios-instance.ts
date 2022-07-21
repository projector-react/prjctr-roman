import axios, { AxiosInstance } from 'axios'

export function createAxiosInstance () {
    const baseURL = 'http://localhost:8000'

    const $api: AxiosInstance = axios.create({
        baseURL,
        withCredentials: true
    })

    $api.interceptors.request.use(
        res => res,
        async error => {
            const originalReq = error.config
            if (error.response.status === 401 && originalReq && !originalReq.isRetry) {
                originalReq.isRetry = true
                try {
                    await axios.post(`${baseURL}/api/auth/refresh`)
                    return $api.request(originalReq.isRetry)
                } catch {
                    throw new Error('Unauthorized')
                }
            }
            return Promise.reject(error)
        }
    )

    return $api
}
