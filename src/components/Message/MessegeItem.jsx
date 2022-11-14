import React from 'react'
import "./Message.css";

const MessegeItem = ({title, date}) => {
  return (
    <div className="message-item">
        <div className="message-title">{title}</div>
        <div className="message-date">{date}</div>
    </div>
  )
}

export default MessegeItem
