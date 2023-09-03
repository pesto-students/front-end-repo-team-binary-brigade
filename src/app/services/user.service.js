import JsonToQueryConverter from "../../helper/JsonToQueryConverter";
import { authApiService, apiService } from "../config/api";

export const CreateUserService =async (payload) =>await apiService.post(`/user`, payload);
export const UpdateUserService =async (id, payload) =>await authApiService.patch(`/user/${id}`, payload);
export const GetUserService =async (query) =>await authApiService.get(`/user?${JsonToQueryConverter(query)}`);

export const AuthenticateService =async (payload) => await apiService.post(`/authentication`, payload);
export const SendOtpService =async (payload) =>await apiService.post(`/user/send-otp`, payload);
export const VerifyOtpService =async (payload) =>await apiService.post(`/user/verify-otp`, payload);
