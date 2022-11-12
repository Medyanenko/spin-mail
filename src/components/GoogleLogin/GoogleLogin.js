import React from 'react'

import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { logIn, addToken } from '../../redux/auth/slice';

const GoogleLogin = () => {
  const dispatch = useDispatch()
  
    const login = useGoogleLogin({
      scope: "https://mail.google.com/ https://www.googleapis.com/auth/gmail.labels https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly",
      onSuccess: async (response) => {
      
        try {
          const res = await axios.get(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
              headers: {
                Authorization: `Bearer ${response.access_token}`,
              },
            }
          );
          dispatch(addToken({token:response.access_token}));
          dispatch(logIn({isLoggedIn:res.data.email_verified}));
        } catch (err) {

        }
      },
    });
  return (
    <div>
    <button onClick={() => login()}>
      <p> Sign in with Google 🚀 </p>
    </button>
  </div>
  )
}

export default GoogleLogin;
