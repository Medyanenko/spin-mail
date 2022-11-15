import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthData } from "../../redux/auth/selector";
import { useEffect, useState } from "react";
import { getMessage } from "../../redux/message/slice";
import { selectMessagesData } from "../../redux/messages/selector";
import { selectMessageData } from "../../redux/message/selector";
import { setMessage, setMessageItem } from "./../../redux/message/slice";
import MessegeItem from "./MessegeItem";

const Message = () => {
  const { token } = useSelector(selectAuthData);
  const dispatch = useDispatch();
  const { messages, currentPage } = useSelector(selectMessagesData);
  const messagesIdArray = messages.map((index) => index.id);
  const { message, messageItem } = useSelector(selectMessageData);

  const messageValueObj = message
    .map((u) => u.map((data) => Object.values(data)))
    .map((data) => Object.fromEntries(data));

  // console.log(messageValueObj);
  const onOpenMessage = (messagesIdArray) => {
    // console.log("jhj", messagesIdArray);
  };

  useEffect(() => {
    dispatch(getMessage({ token, messagesIdArray }));
  }, [messages]);
  let messagesElements = messageValueObj.map((u, id) => (
    <MessegeItem key={id} title={u.Subject} date={u.Date.slice(4, 11)} />
  ));
  if (!messageItem) {
    return <>"Loading...";</>;
  }
  return (
    <div
      className="message-block"
      onClick={() => onOpenMessage(messagesIdArray)}
    >
      {" "}
      {messagesElements}{" "}
    </div>
  );
};

export default Message;
