import React, { useState } from 'react';
import {Socket} from "socket.io-client";

const ChatFooter = ({socket,setTypingCheck}:any) => {
  const [message, setMessage] = useState('');

  const handleTyping=()=>{
    socket.emit('typing',localStorage.getItem('userName'));
    socket.emit('isTyping',true)
  }

  const handleSendMessage = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log({ userName: localStorage.getItem('userName'), message });
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }  
    setMessage('');
  };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
          onKeyUp={()=>{
            socket.emit('isTyping',false)
          }}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;