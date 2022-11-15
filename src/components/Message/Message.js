import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthData } from "../../redux/auth/selector";
import { useEffect, useState } from "react";
import { getMessage } from "../../redux/message/slice";
import { selectMessagesData } from "../../redux/messages/selector";
import { selectMessageData } from "../../redux/message/selector";
import { setMessage, setMessageItem } from "./../../redux/message/slice";
import MessegeItem from "./MessegeItem";
import "./Message.css";

const Message = () => {
  const { token } = useSelector(selectAuthData);
  const dispatch = useDispatch();
  const { messages, currentPage } = useSelector(selectMessagesData);
  const messagesIdArray = messages.map((index) => index.id);
  const { message, messageItem } = useSelector(selectMessageData);

  const messageValueObj = message
    .map((u) => u.map((data) => Object.values(data)))
    .map((data) => Object.fromEntries(data));

  const onClickMessage = (id) => {
    console.log(messages[id].id);
  };

  useEffect(() => {
    dispatch(getMessage({ token, messagesIdArray }));
  }, [messages]);

  return (
    <div className="message-block">
      {messageValueObj.map((u, id) => (
        <div  key={id} onClick={() => onClickMessage(id)}>
          <div className="message-item">
            <div className="message-title">{u.Subject}</div>
            <div className="message-date">{u.Date.slice(4, 11)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Message;
