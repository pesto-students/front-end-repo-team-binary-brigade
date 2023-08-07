import { createSlice } from "@reduxjs/toolkit";
import { GetUserService } from "../../services/user.service";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const userSlice = createSlice({
  name: "userReducer",
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

const { setLoading, setData, setError } = userSlice.actions;
export default userSlice.reducer;

export const getUserReduxService = (query) => async (dispatch, getState) => {
  const state = getState();
  if (state.userReducer.data) {
    // If data exists in Redux, dispatch the existing data and return early
    dispatch(setData(state.userReducer.data));
    return;
  }

  dispatch(setLoading(true));
  try {
    const { data } = await GetUserService(query);
    dispatch(setLoading(false));
    dispatch(setData(data));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setData(null));
    dispatch(setError(error));
  }
};
