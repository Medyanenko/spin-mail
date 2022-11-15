import React, { Suspense } from "react";
import "./App.css";
import GoogleLogin from "./components/GoogleLogin/GoogleLogin";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { selectAuthData } from "./redux/auth/selector";
import Messages from "./components/Messages/Messages";
import Message from "./components/Message/Message";
import Pagination from "./components/Pagination/Pagination";
import { Routes, Route } from "react-router-dom";
import FullMessage from "./components/FullMessage/FullMessage";

function App() {
  const { isLoggedIn } = useSelector(selectAuthData);
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h3>Hello</h3>
          <div className="app-wrapper">
            <Sidebar />
            <div className="app-wrapper-content">
              <Routes>
                <Route path="/message/:id" element={<FullMessage />} />
                <Route exact path="/" element={<Messages />} />
              </Routes>
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
