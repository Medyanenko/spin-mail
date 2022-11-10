import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import axios from "axios";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  const [profile, setProfile] = useState([]);
  const clientId =
    "386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com";
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    setProfile(res.profileObj);
    const istance = axios.create({
      baseURL: "https://gmail.googleapis.com/gmail/v1/users/",
      headers: {
        // "API-KEY": "AIzaSyD_URggDRhqag9hDovVGngsbYsb-fiGIbc",
        "Authorization" : `Bearer ${res.accessToken}`
       
      }
    });
    
    function getlabelsList() {
      return istance
      .get(`me/labels`)
      .then((response) => console.log(response.data));
    }
    getlabelsList()
  };

  // const onFailure = (err) => {
  //   console.log("failed", err);
  // };

  // const logOut = () => {
  //   setProfile(null);
  // };
  
  
  
  return (
    <div>
      {profile ? (
        <div>
          <h3>Hello</h3>
          <div className="app-wrapper">
            <Sidebar/>
            <h3>hguy</h3>
            <div className="app-wrapper-content">
              <p>jhygyu</p></div>
          </div>

          {/* <img src={profile.imageUrl} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br /> */}


        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default App;
