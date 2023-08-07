import apiService from "../config/api";

export const UploadFileService = (payload) => apiService.post(`/upload`, payload);