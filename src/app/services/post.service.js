import JsonToQueryConverter from "../../helper/jsonToQueryConverter";
import apiService from "../config/api";

export const CreatePostService = (payload) => apiService.post(`/post`, payload);
export const GetPostService = (query) => apiService.get(`/post?${JsonToQueryConverter(query)}`);
export const GetPostDetailsService = (id) => apiService.get(`/post/${id}`);

export const SavePostService = (payload) => apiService.post(`/saved-post`, payload);
export const ReportPostService = (payload) => apiService.post(`/report-post`, payload);
export const LikePostService = (payload) => apiService.post(`/post-like`, payload);
export const CommentPostService = (payload) => apiService.post(`/post-comment`, payload);

export const GetCommentService = (query) => apiService.get(`/post-comment?${JsonToQueryConverter(query)}`);
export const GetLikeService = (query) => apiService.get(`/post-like?${JsonToQueryConverter(query)}`);
export const GetSavedPostService = (query) => apiService.get(`/saved-post?${JsonToQueryConverter(query)}`);

export const RemoveSavedPostService = (id) => apiService.delete(`/saved-post/${id}`);