import { authApiService } from "../config/api";

export const UploadFileService = (payload) => authApiService.post(`/upload`, payload);