import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000",
  withCredentials: true, // if you're using cookies
  timeout: 20000, // 20 sec timeout (good default)
});

http.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error("API Error:", error?.response || error);
    return Promise.reject(error);
  }
);
