import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthData } from "../../redux/auth/selector";
import { useEffect, useState } from "react";
import { getMessage } from "../../redux/message/slice";
import { selectMessagesData } from "../../redux/messages/selector";
import { selectMessageData } from "../../redux/message/selector";
import {setMessage} from "./../../redux/message/slice"
import MessegeItem from "./MessegeItem";

const Message = () => {
  const { token } = useSelector(selectAuthData);
  const dispatch = useDispatch();
  const { messages, currentPage } = useSelector(selectMessagesData);
  const messagesIdArray = messages.map((index) => index.id);
  const { message, messageItem} = useSelector(selectMessageData);

  const messageValue = message.map((u) =>
    u.map((data) => Object.values(data))
  );
  const messageValueObj = messageValue.map((data) =>
    Object.fromEntries(data)
  );
   
  useEffect(() => {
    dispatch(setMessage(messageValueObj));
    dispatch(getMessage({ token, messagesIdArray }));

  }, []);
   let messagesElements = messageItem.map((u, id) => (<MessegeItem key={id} title={u.Subject} date={u.Date.slice(4, 11)}/>));

  return <div className="message-block"> {messagesElements} </div>;
};

export default Message;
