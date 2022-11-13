import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/slice';
import labelsReducer from './labels/slice';
import messagesReducer from './messages/slice'
import messageReducer from './message/slice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    labels: labelsReducer,
    messages: messagesReducer,
    message: messageReducer
  },
})

