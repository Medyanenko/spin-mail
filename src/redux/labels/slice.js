import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getLabels = createAsyncThunk("labels/getLabels", async (token) => {
  const response = await axios.get(
    "https://gmail.googleapis.com/gmail/v1/users/me/labels",

    {
      headers: {
        Authorization:
        `Bearer ${token}`,
      },
    }
  );
  return response.data.labels;
});

const labelsSlice = createSlice({
  name: "Labels",
  initialState: {
    labels: [],
    status: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLabels.pending, (state, action) => {
        state.loadingStatus = "loading";
        state.error = null;
      })
      .addCase(getLabels.fulfilled, (state, action) => {
        state.labels = action.payload;
        state.loadingStatus = "idle";
        state.error = null;
      })
      .addCase(getLabels.rejected, (state, action) => {
        state.loadingStatus = "failed";
        state.error = action.error;
      });
  },
});
export const { setLabels } = labelsSlice.actions;

export default labelsSlice.reducer;
