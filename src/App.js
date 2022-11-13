import React from "react";
import "./App.css";
import GoogleLogin from "./components/GoogleLogin/GoogleLogin";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { selectAuthData } from "./redux/auth/selector";
import Messages from "./components/Messages/Messages";
import Message from "./components/Message/Message";

function App() {
  const { isLoggedIn } = useSelector(selectAuthData);
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
      {isLoggedIn ? (
        <div>
          <h3>Hello</h3>
          <div className="app-wrapper">
            <Sidebar/>
            <div className="app-wrapper-content">
              <Messages/>
              <Message/>
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
