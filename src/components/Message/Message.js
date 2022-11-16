import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthData } from "../../redux/auth/selector";
import { useEffect, useState } from "react";
import { getMessage } from "../../redux/message/slice";
import { selectMessagesData } from "../../redux/messages/selector";
import { selectMessageData } from "../../redux/message/selector";
import { setMessage, setMessageItem } from "./../../redux/message/slice";
import { Link } from "react-router-dom";
import "./Message.css";

const Message = () => {
  const { token } = useSelector(selectAuthData);
  const dispatch = useDispatch();
  const { messages } = useSelector(selectMessagesData);
  const messagesIdArray = messages.map((index) => index.id);
  const { message } = useSelector(selectMessageData);

  const messageValueObj = message
    .map((u) => u.map((data) => Object.values(data)))
    .map((data) => Object.fromEntries(data));

  useEffect(() => {
    dispatch(getMessage({ token, messagesIdArray }));
  }, [messages]);

  return (
    <div className="message-block">
      {messageValueObj.map((u, id) => (
        <Link to={`/message/${messages[id].id}`} key={id}>
          <div className="message-item">
            <div className="message-title">{u.Subject}</div>
            <div className="message-date">{u.Date.slice(4, 11)}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Message;
