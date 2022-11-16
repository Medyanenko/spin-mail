import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { selectAuthData } from "../../redux/auth/selector";
const FullMessage = () => {
  const { id } = useParams();
  console.log("params", id)
  const navigate = useNavigate();
  const [fullTextMessage, setFullTextMessage] = useState();
  const [metaDataMessage, setMetaDataMessage] = useState();
  console.log("FullMessage", metaDataMessage)
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
        // console.log(data.payload.headers)

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
    <div className="container">
      <div>FULL</div>
      <h2>{metaDataMessage.Subject}</h2>
      <div className="message-info">
      <p>{metaDataMessage.Date}</p>
      <p>{metaDataMessage.From}</p>
      <p>{metaDataMessage.To}</p>
      </div>
      <div>{fullTextMessage.snippet}</div>

      <Link to="/">
        <span>Назад</span>
      </Link>
    </div>
  );
};

export default FullMessage;
