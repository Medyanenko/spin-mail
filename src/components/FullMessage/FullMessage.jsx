import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { selectAuthData } from "../../redux/auth/selector";
const FullMessage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [fullMessage, setFullMessage] = useState();
  const { token } = useSelector(selectAuthData);
  useEffect(() => {
    async function fetchMessage() {
      try {
        const { data } = await axios.get(
          "https://gmail.googleapis.com/gmail/v1/users/me/messages/" + id,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFullMessage(data);
      } catch (error) {
        console.error("don't have message");
        navigate("/");
      }
    }
    fetchMessage();
  }, []);
  if (!fullMessage) {
    return <>"Loading...";</>;
  }
  return (
    <div className="container">
      <h2>{fullMessage.title}</h2>
      <div className="message-info">
      <p>{fullMessage.date}</p>
      <p>{fullMessage.from}</p>
      <p>{fullMessage.to}</p>
      </div>
      <div>{fullMessage.text}</div>

      <Link to="/">
        <span>Назад</span>
      </Link>
    </div>
  );
};

export default FullMessage;
