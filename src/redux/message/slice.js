import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMessage = createAsyncThunk(
  "message/getMessage",
  async (params) => {
    const { token, messagesIdArray } = params;
    let responseAll = [];
    await Promise.all(
      messagesIdArray.map((id) =>
        axios
          .get(
            `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}?format=metadata&metadataHeaders=Date&metadataHeaders=Subject`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            responseAll = [...responseAll, response.data.payload.headers];
            console.log("hj", response.data )
          })
      )
    );
    return responseAll;
  }
);

const messageSlice = createSlice({
  name: "Message",
  initialState: {
    message: [],
    status: false,
    error: false,
    messageItem:[]
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setMessage:(state, action) => {
      state.messageItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMessage.pending, (state, action) => {
        state.loadingStatus = "loading";
        state.error = null;
      })
      .addCase(getMessage.fulfilled, (state, action) => {
        state.message = action.payload;
        state.pageToken = action.payload.nextPageToken;
        state.loadingStatus = "idle";
        state.error = null;
      })
      .addCase(getMessage.rejected, (state, action) => {
        state.loadingStatus = "failed";
        state.error = action.error;
      });
  },
});
export const { setMessage} = messageSlice.actions;
export default messageSlice.reducer;
