import { createSlice } from "@reduxjs/toolkit";
import { GetCollegeService } from "../../services/college.service";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const collegeSlice = createSlice({
  name: "collegeReducer",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

const { setLoading, setData, setError } = collegeSlice.actions;
export default collegeSlice.reducer;

export const getCollegeReduxService = (query) => async (dispatch, getState) => {
  const state = getState();
  if (state.collegeReducer.data) {
    // If data exists in Redux, dispatch the existing data and return early
    dispatch(setData(state.collegeReducer.data));
    return;
  }

  dispatch(setLoading(true));
  try {
    const { data } = await GetCollegeService(query);
    dispatch(setLoading(false));
    dispatch(setData(data));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setData(null));
    dispatch(setError(error));
  }
};
