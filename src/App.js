import React from "react";
import "./App.css";
import GoogleLogin from "./components/GoogleLogin/GoogleLogin";
import Sidebar from "./components/Sidebar/Sidebar";
import useAuth from "./hooks/user-auth";

function App() {
  const { isAuth } = useAuth();
  //  const [labels, setLabels] = useState([]);

  //  useEffect(() => {
  //   // async function getLabels() {
  //   //   try {
  //   //     const labelsResponse = await axios.get(
  //   //       `https://gmail.googleapis.com/gmail/v1/users/me/labels`,
  //   //       {
  //   //         headers: {
  //   //           Authorization: `Bearer ${token}`,
  //   //         },
  //   //       }
  //   //     );
  //   //     setLabels(labelsResponse.data);
  //   //   } catch (error) {
  //   //     console.error("error data request");
  //   //   }
  //   // }

  //   //getLabels();

  //  console.log("hey")

  // }, []);

  // if(labels.length>0){
  //   console.log(labels)
  // }
  return (
    <div>
      {isAuth ? (
        <div>
          <h3>Hello</h3>
          <div className="app-wrapper">
            <Sidebar/>
            <div className="app-wrapper-content">
              <p>jhygyu</p>
            </div>
          </div>
        </div>
      ) : (
        <GoogleLogin />
      )}
    </div>
  );
}
export default App;
