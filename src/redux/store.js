import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/slice';
import labelsReducer from './labels/slice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    labels: labelsReducer
  },
})

