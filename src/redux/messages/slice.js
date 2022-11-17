import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getMessages = createAsyncThunk("messages/getMessages", async (params) => {
    const {token, pageToken} = params;
  const response = await axios.get(
    `https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=50&pageToken=${pageToken}`,

    {
      headers: {
        Authorization:
        `Bearer ${token}`,
      },
    }
  );
  return response.data;
});

const messagesSlice = createSlice({
  name: "Messages",
  initialState: {
    messages: [],
    pageToken: "",
    status: false,
    error: false,
  },
  reducers:{
    setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
      }
      
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMessages.pending, (state, action) => {
        state.loadingStatus = "loading";
        state.error = null;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.messages = action.payload.messages;
        state.pageToken = action.payload.nextPageToken
        state.loadingStatus = "idle";
        state.error = null;
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.loadingStatus = "failed";
        state.error = action.error;
      });
  },
});
export const { setCurrentPage } = messagesSlice.actions;

export default messagesSlice.reducer;
