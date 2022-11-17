import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthData } from "../../redux/auth/selector";
import { useEffect } from "react";
import { getMessages } from "../../redux/messages/slice";
import { selectMessagesData } from "../../redux/messages/selector";
import Pagination from "../Pagination/Pagination";
import Message from "../Message/Message";
import { useState } from "react";

const Messages = () => {
  const { token } = useSelector(selectAuthData);
  const dispatch = useDispatch();
  const { pageToken } = useSelector(selectMessagesData);
  const [changePage, setChangePage] = useState([]);
  const [changePagePrev, setChangePagePrev] = useState(1);

const onChangePage = () => {
  setChangePage([...changePage, pageToken])
  setChangePagePrev(changePagePrev + 1)
 
 }
 const onChangePagePrev = () => {
  setChangePage(changePage.slice(0, -1))
  setChangePagePrev(changePagePrev - 1)
  dispatch(getMessages({ token, pageToken:changePage[changePagePrev-2] }));
 
 }

  useEffect(() => {
    dispatch(getMessages({ token, pageToken }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changePage]);

  return (
    <div>
      <Pagination onChangePage={onChangePage} onChangePagePrev={onChangePagePrev} changePagePrev={changePagePrev}/>
      <Message />
    </div>
  );
};

export default Messages;
