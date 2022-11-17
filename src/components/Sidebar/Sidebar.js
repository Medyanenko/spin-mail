import React from "react";
import s from "./Sidebar.module.css";
import { useEffect } from "react";
import { getLabels } from "../../redux/labels/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectLabelsData } from "../../redux/labels/selector";
import { selectAuthData } from "../../redux/auth/selector";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const {token} = useSelector(selectAuthData);
  const dispatch = useDispatch();
  const { labels } = useSelector(selectLabelsData);

  useEffect(() => {
    dispatch(getLabels(token));
  }, []);
  return (
    <div className={s.LablesBlock}>
      <ul className={s.LabelsItem}>
        {labels.map((index) => (
          <Link to={`/labels/`} key={index} className={s.LabelsItemLink}>
          <li key={index.id}>{index.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
