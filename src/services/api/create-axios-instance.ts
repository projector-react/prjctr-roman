import axios, { AxiosInstance } from 'axios'

export function createAxiosInstance () {
    const baseURL = 'http://localhost:8080/api'

    const $api: AxiosInstance = axios.create({
        baseURL,
        timeout: 3000,
        withCredentials: true
    })

    $api.interceptors.request.use(
        res => res,
        async error => {
            const originalReq = error.config
            if (error.response.status === 401 && originalReq && !originalReq.isRetry) {
                originalReq.isRetry = true
                try {
                    await axios.post(`${baseURL}/auth/refresh`)
                    return $api.request(originalReq.isRetry)
                } catch {
                    throw new Error('Unauthorized')
                }
            }
            throw new Error('Network Error')
        }
    )

    return $api
}
