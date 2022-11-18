import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { selectAuthData } from "../../redux/auth/selector";
import s from "./FullMessage.module.css";
import { Base64 } from "js-base64";

const FullMessage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [fullTextMessage, setFullTextMessage] = useState();
  const [snippedTextMessage, setSnipedTextMessage] = useState();
  const [metaDataMessage, setMetaDataMessage] = useState();
  const [isShowMore, setIsShowMore] = useState(false);
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
        setMetaDataMessage(
          Object.fromEntries(
            data.payload.headers.map((data) => Object.values(data))
          )
        );
        setSnipedTextMessage(data.snippet);
      } catch (error) {
        console.error("don't have message data");
        navigate("/");
      }
      try {
        const { data } = await axios.get(
          `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}?format=RAW `,

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setFullTextMessage(Base64.decode(data.raw));
      } catch (error) {
        console.error("don't have message text");
        navigate("/");
      }
    }

    fetchMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!metaDataMessage) {
    return <>"Loading...";</>;
  }
  return (
    <div className={s.fullMessageBlock}>
      <Link to="/" className={s.fullMessageButton}>
        <span>⟵ Back</span>
      </Link>
      <h2 className={s.fullMessageTitle}>{metaDataMessage.Subject}</h2>
      <div className={s.fullMessageInfo}>
        <p>{metaDataMessage.Date}</p>
        <p>{metaDataMessage.From}</p>
        <p>{metaDataMessage.To}</p>
      </div>
      <div className={s.fullMessageText}>{snippedTextMessage}</div>

      <button
        className={s.fullMessageButton}
        onClick={() => setIsShowMore(true)}
      >
        Show more...
      </button>
      {isShowMore && <div>{fullTextMessage}</div>}

      {/* <div className={s.fullMessageText}>{fullTextMessage}</div> */}
    </div>
  );
};

export default FullMessage;
