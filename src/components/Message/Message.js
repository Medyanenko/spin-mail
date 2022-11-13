import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthData } from "../../redux/auth/selector";
import { useEffect, useState } from "react";
import { getMessage } from "../../redux/message/slice";
import { selectMessagesData } from "../../redux/messages/selector";

const Message = () => {
  const { token } = useSelector(selectAuthData);
  const dispatch = useDispatch();
  const { messages, currentPage } = useSelector(selectMessagesData);
  const messagesIdArray = messages.map((index) => index.id);
  useEffect(() => {

    dispatch(getMessage({ token, messagesIdArray }));
  
  }, [messages]);
  return (
    <div>
      <span> WFG</span>
    </div>
  );
};

export default Message;
