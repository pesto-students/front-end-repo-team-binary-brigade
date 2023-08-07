import JsonToQueryConverter from "../../helper/jsonToQueryConverter";
import apiService from "../config/api";

export const CreateCollegeService = (payload) => apiService.post(`/college`, payload);
export const GetCollegeService = (query) => apiService.get(`/college?${JsonToQueryConverter(query)}`);
export const GetCollegeDetailsService = (id) => apiService.get(`/college/${id}`);