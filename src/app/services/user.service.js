import JsonToQueryConverter from "../../helper/jsonToQueryConverter";
import { authApiService,apiService } from "../config/api";

export const CreateUserService = (payload) => apiService.post(`/user`, payload);
export const UpdateUserService = (id, payload) => authApiService.patch(`/user/${id}`, payload);
export const GetUserService = (query) => authApiService.get(`/user?${JsonToQueryConverter(query)}`);

export const AuthenticateService = (payload) => apiService.post(`/authenticate`, payload);
export const SendOtpService = (payload) => apiService.post(`/user/send-otp`, payload);
export const VerifyOtpService = (payload) => apiService.post(`/user/verify-otp`, payload);