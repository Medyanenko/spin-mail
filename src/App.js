import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
   const [labels, setLabels] = useState([]);

   useEffect(() => {
    // async function getLabels() {
    //   try {
    //     const labelsResponse = await axios.get(
    //       `https://gmail.googleapis.com/gmail/v1/users/me/labels`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
    //     );
    //     setLabels(labelsResponse.data);
    //   } catch (error) {
    //     console.error("error data request");
    //   }
    // }

    //getLabels();

   console.log("hey")
 
  }, []);

  if(labels.length>0){
    console.log(labels)
  }
  return (
    <div>
      {profile ? (
        <div>
          <h2>Ytllo</h2>
        </div>
      ) : (
<GoogleLogin/>
      )}
    </div>
  );
}
export default App;
