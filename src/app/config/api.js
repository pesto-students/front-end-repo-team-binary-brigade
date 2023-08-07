import axios from "axios";
import store from "../redux/store";
import appConfig from "./app.config";

export const apiService = axios.create({
  baseURL: appConfig.baseUrl,
});

export const authApiService = apiService.interceptors.request.use((config) => {
  const state = store?.getState();
  config.headers.Authorization = state?.authReducer?.data?.token;
  return config;
});
