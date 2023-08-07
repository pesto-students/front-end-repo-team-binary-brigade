import JsonToQueryConverter from "../../helper/jsonToQueryConverter";
import apiService from "../config/api";

export const CreateUserService = (payload) => apiService.post(`/user`, payload);
export const UpdateUserService = (id, payload) => apiService.patch(`/user/${id}`, payload);
export const GetUserService = (query) => apiService.get(`/user?${JsonToQueryConverter(query)}`);

export const AuthenticateService = (payload) => apiService.post(`/authenticate`, payload);
export const SendOtpService = (payload) => apiService.post(`/user/send-otp`, payload);
export const VerifyOtpService = (payload) => apiService.post(`/user/verify-otp`, payload);