import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { selectAuthData } from "../../redux/auth/selector";
import s from "./FullMessage.module.css"
const FullMessage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [fullTextMessage, setFullTextMessage] = useState();
  const [metaDataMessage, setMetaDataMessage] = useState();
  const { token } = useSelector(selectAuthData);
  useEffect(() => {
    async function fetchMessage() {
      try {
        const { data } = await axios.get(
          `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}?format=metadata&metadataHeaders=Date&metadataHeaders=Subject&metadataHeaders=From&metadataHeaders=To`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
           setMetaDataMessage( Object.fromEntries((data.payload.headers).map((data) => Object.values(data))));
        setFullTextMessage(data);
      } catch (error) {
        console.error("don't have message");
        navigate("/");
      }
    }
    fetchMessage();
  }, []);
 
  if (!metaDataMessage) {
    return <>"Loading...";</>;
  }
  return (
    <div className={s.fullMessageBlock}>
      <h2  className={s.fullMessageTitle}>{metaDataMessage.Subject}</h2>
      <div className={s.fullMessageInfo}>
      <p>{metaDataMessage.Date}</p>
      <p>{metaDataMessage.From}</p>
      <p>{metaDataMessage.To}</p>
      </div>
      <div className={s.fullMessageText}>{fullTextMessage.snippet}</div>

      <Link to="/" className={s.fullMessageButton}>
        <span>Назад</span>
      </Link>
    </div>
  );
};

export default FullMessage;
