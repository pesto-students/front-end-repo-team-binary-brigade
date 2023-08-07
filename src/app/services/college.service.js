import JsonToQueryConverter from "../../helper/JsonToQueryConverter";
import { authApiService } from "../config/api";

export const CreateCollegeService = (payload) => authApiService.post(`/college`, payload);
export const GetCollegeService = (query) => authApiService.get(`/college?${JsonToQueryConverter(query)}`);
export const GetCollegeDetailsService = (id) => authApiService.get(`/college/${id}`);