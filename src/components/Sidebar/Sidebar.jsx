import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import s from "./Sidebar.module.css";

const Sidebar = (props) => {
  const [value, setValue] = useState([null, null]);
  console.log(value)
  useEffect(() => {
   
    }, [value]);
  return (
<div></div>
  );
};

export default Sidebar;
