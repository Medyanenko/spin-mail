import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'Auth', 
    initialState: {
      isLoggedIn: false,
      token: null
    },
    reducers: {
      logIn: (state) => {
        state.isLoggedIn = true
      },
      // logout: (state) => {
      //   state.isLoggedIn = false;
      //   state.token = null;
      // },
      addToken:(state, action) => {
        state.token = action.payload.token;
      }
    },
  })

export const {logIn, logout, addToken} = authSlice.actions;
export default authSlice.reducer;
