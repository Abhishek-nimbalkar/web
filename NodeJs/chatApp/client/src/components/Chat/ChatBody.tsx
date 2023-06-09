import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IMessage, IUseRef } from "../../interfaces";



const ChatBody = ( {messages, lastMessageRef,typingStatus,typingCheck}: {messages:IMessage[],lastMessageRef:IUseRef,typingStatus:string,typingCheck:boolean}) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };


  return (
    <>
      <header className="chat__mainHeader">
        <p>Hangout with Colleagues</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      {/*This shows messages sent from you*/}
      <div className="message__container">
      {messages.map((message) =>
          message.name === localStorage.getItem('userName') ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        {/*This is triggered when a user is typing*/}
        <div className="message__status">
          <p  style={{opacity:typingCheck?1:0,transition:"all 0.1s ease-in-out"}} >{typingStatus} is Typing </p>
        </div>
        <div ref={lastMessageRef as React.RefObject<HTMLDivElement>} /> 
      </div>
    </>
  );
};

export default ChatBody;
