import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthData } from "../../redux/auth/selector";
import { useEffect } from "react";
import { getMessages } from "../../redux/messages/slice";
import { selectMessagesData } from "../../redux/messages/selector";
import Pagination from "../Pagination/Pagination";
import { setCurrentPage } from "../../redux/messages/slice";
import Message from "../Message/Message";
import { useState } from "react";

const Messages = () => {
  const { token } = useSelector(selectAuthData);
  const dispatch = useDispatch();
  const { pageToken } = useSelector(selectMessagesData);
  const {changePage, onChangePage} = useState();

  useEffect(() => {
    dispatch(getMessages({ token, pageToken }));
  }, [changePage]);
  // if (!messages) {
  //   return <>"Loading...";</>;
  // }
  return (
    <div>
      <Message />
      <Pagination onChangePage={onChangePage} />
    </div>
  );
};

export default Messages;
