import React from "react";
import s from "./Sidebar.module.css";
import useAuth from "./../../hooks/user-auth"


const Sidebar = (props) => {
 // const { token } = useAuth();
const {name} = useAuth();
console.log(name)

  return <div>
    
  </div>;
};

export default Sidebar;
