"use server";
import axios, {
  AxiosResponse,
  HttpStatusCode,
  InternalAxiosRequestConfig,
} from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_API,
});

api.interceptors.request.use(
  async (test: InternalAxiosRequestConfig) => {
    const token = undefined;

    if (token && test.headers) test.headers.Authorization = `Bearer ${token}`;

    const returnData = test;
    return returnData;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    if (error.status === HttpStatusCode.Unauthorized) {
      const customError = {
        message: "Unauthorized access",
        status: HttpStatusCode.Unauthorized,
      };
      return Promise.reject(customError);
    }
    return Promise.reject(error);
  },
);

export default api;
