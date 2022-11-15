import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthData } from "../../redux/auth/selector";
import { useEffect } from "react";
import { getMessages } from "../../redux/messages/slice";
import { selectMessagesData } from "../../redux/messages/selector";
import Pagination from "../Pagination/Pagination";
import { setCurrentPage } from "../../redux/messages/slice";
import Message from "../Message/Message";

const Messages = () => {
  const { token } = useSelector(selectAuthData);
  const dispatch = useDispatch();
  const { messages, currentPage, pageToken } = useSelector(selectMessagesData);
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };
  useEffect(() => {
    dispatch(getMessages({ token, currentPage, pageToken }));
  }, [currentPage]);
  return (
    <div>
      <Message />
    </div>
  );
};

export default Messages;
