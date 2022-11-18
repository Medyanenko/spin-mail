import React from "react";
import "./App.css";
import GoogleLogin from "./components/GoogleLogin/GoogleLogin";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { selectAuthData } from "./redux/auth/selector";
import Messages from "./components/Messages/Messages";
import { Routes, Route } from "react-router-dom";
import FullMessage from "./components/FullMessage/FullMessage";

function App() {
  const { isLoggedIn } = useSelector(selectAuthData);
  return (
    <div className="main-block">
      {isLoggedIn ? (
          <div className="app-wrapper">
            {/* <Route path="/labels/:label" element={<Sidebar />} />  */}
            <Sidebar />
            <div className="app-wrapper-content">
              <Routes>
                <Route path="/message/:id" element={<FullMessage />} />
                <Route exact path="*" element={<Messages />} />
              </Routes>
            </div>
          </div>
      ) : (
        <div className="start-block">
        <GoogleLogin/>
        </div>
      )}
    </div>
  );
}
export default App;
