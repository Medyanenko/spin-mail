import React from 'react'
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleLogin = () => {
    const [token, setToken] = useState();
    const [profile, setProfile] = useState();
  
    const login = useGoogleLogin({
      scope: "https://mail.google.com/",
      onSuccess: async (response) => {
        setToken(response.access_token);
        try {
          const res = await axios.get(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
              headers: {
                Authorization: `Bearer ${response.access_token}`,
              },
            }
          );
          setProfile(res.data.email_verified);
        } catch (err) {
          console.log(err);
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

export default GoogleLogin
