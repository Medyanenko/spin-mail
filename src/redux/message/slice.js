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
           // console.log("res", response.data.id)
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
    partOneMessages: [],
    partTwoMessages: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMessage.pending, (state, action) => {
        state.loadingStatus = "loading";
        state.error = null;
      })
      .addCase(getMessage.fulfilled, (state, action) => {
        state.pageToken = action.payload.nextPageToken;
        state.message = action.payload;
        state.loadingStatus = "idle";
        state.error = null;

      })
      .addCase(getMessage.rejected, (state, action) => {
        state.loadingStatus = "failed";
        state.error = action.error;
      });
  },
});

export default messageSlice.reducer;
