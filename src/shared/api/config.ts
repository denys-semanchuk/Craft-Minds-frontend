import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const http = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

export const protectedHttp = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

protectedHttp.interceptors.request.use(async (config) => {
    config.headers['Authorization'] = `Bearer ${sessionStorage.getItem('access_token')}`
    config.headers['Accept'] = 'application/json'
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    return config
})

