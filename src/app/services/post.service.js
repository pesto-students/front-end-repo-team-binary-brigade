import JsonToQueryConverter from "../../helper/jsonToQueryConverter";
import { authApiService } from "../config/api";

export const CreatePostService = (payload) => authApiService.post(`/post`, payload);
export const GetPostService = (query) => authApiService.get(`/post?${JsonToQueryConverter(query)}`);
export const GetPostDetailsService = (id) => authApiService.get(`/post/${id}`);

export const SavePostService = (payload) => authApiService.post(`/saved-post`, payload);
export const ReportPostService = (payload) => authApiService.post(`/report-post`, payload);
export const LikePostService = (payload) => authApiService.post(`/post-like`, payload);
export const CommentPostService = (payload) => authApiService.post(`/post-comment`, payload);

export const GetCommentService = (query) => authApiService.get(`/post-comment?${JsonToQueryConverter(query)}`);
export const GetLikeService = (query) => authApiService.get(`/post-like?${JsonToQueryConverter(query)}`);
export const GetSavedPostService = (query) => authApiService.get(`/saved-post?${JsonToQueryConverter(query)}`);

export const RemoveSavedPostService = (id) => authApiService.delete(`/saved-post/${id}`);