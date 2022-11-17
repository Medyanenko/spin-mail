import React from "react";
import s from "./Sidebar.module.css";
import { useEffect } from "react";
import { getLabels } from "../../redux/labels/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectLabelsData } from "../../redux/labels/selector";
import { selectAuthData } from "../../redux/auth/selector";

const Sidebar = (props) => {
  const { token } = useSelector(selectAuthData);
  const dispatch = useDispatch();
  const { labels } = useSelector(selectLabelsData);

  useEffect(() => {
    dispatch(getLabels(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (labels) {
    return (
      <div className={s.LablesBlock}>
        <ul className={s.LabelsItem}>
          {labels.map((index) => (
            <li key={index.id} className={s.LabelsItemLink}>
              {index.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Sidebar;
