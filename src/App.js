import React from "react";
import "./App.css";
import GoogleLogin from "./components/GoogleLogin/GoogleLogin";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { selectAuthData } from "./redux/auth/selector";
import Messages from "./components/Messages/Messages";
import Message from "./components/Message/Message";
import Pagination from "./components/Pagination/Pagination"

function App() {
  const { isLoggedIn } = useSelector(selectAuthData);
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
              <Pagination/>
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
