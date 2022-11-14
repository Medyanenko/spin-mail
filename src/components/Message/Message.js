import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthData } from "../../redux/auth/selector";
import { useEffect, useState } from "react";
import { getMessage } from "../../redux/message/slice";
import { selectMessagesData } from "../../redux/messages/selector";
import { selectMessageData } from "../../redux/message/selector";
import "./Message.css"

const Message = () => {
  const { token } = useSelector(selectAuthData);
  const dispatch = useDispatch();
  const { messages, currentPage } = useSelector(selectMessagesData);
  const messagesIdArray = messages.map((index) => index.id);
  const { message } = useSelector(selectMessageData);


  useEffect(() => {
    dispatch(getMessage({ token, messagesIdArray }));
  }, [messages]);
  return (
    <div className="message-block">
      <div className="message-title">
        {message.map((id) =>
          id
            .filter((data) => data.name === "Subject")
            .map((filteredData, id) =><div key={id}>{filteredData.value}</div>)
        )}
      </div>
      <div className="message-date">
        {message.map((id) =>
          id
            .filter((data) => data.name === "Date")
            .map((filteredData, id) => <div key={id}>{filteredData.value.slice(4, 11)}</div>)
        )}
      </div>
    </div>
  );
};

export default Message;
