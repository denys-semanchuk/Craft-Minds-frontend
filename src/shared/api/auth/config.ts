import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const http = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})
