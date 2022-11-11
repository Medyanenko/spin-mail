import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import token from "./../../components/Sidebar/Sidebar"


export const getLabels = createAsyncThunk(
"labels/fetchLabelsName",
    async () => {
      const response = await axios.get(
        "https://gmail.googleapis.com/gmail/v1/users/me/labels",
        {
          headers: {
            Authorization: "ya29.a0AeTM1ieO1fOuOM29Mck7WGLj00HhwG6EqJLo_XSuWqA…rwaCgYKAXwSARASFQHWtWOm75F2OuEN2K_TpHDPDh6UJw0165",
          },
        }
      );
      console.log(response.data)
   return response.data;
    }
  );


const labelsSlice = createSlice({
    name: 'Labels', 
    initialState: {
      name: "jhu",
      status: false,
      error: false,
    },
    extraReducers: (builder) => {
        builder
          .addCase(getLabels.pending, (state, action) => {
            state.loadingStatus = 'loading';
            state.error = null;
          })
          .addCase(getLabels.fulfilled, (state, action) => {
            state.name = action.payload
            state.loadingStatus = 'idle';
            state.error = null;
          })
          .addCase(getLabels.rejected, (state, action) => {
            state.loadingStatus = 'failed';
            state.error = action.error;
          });
      },
  })
 export const {setLabels} = labelsSlice.actions;
export default labelsSlice.reducer;


