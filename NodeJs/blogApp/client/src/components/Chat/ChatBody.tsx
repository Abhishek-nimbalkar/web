import { ISocket } from "interfaces";
import React, { useEffect, useState } from "react";

const ChatBody = ({ socket, userSelected, users }: any) => {
  // const handleLeaveChat = () => {};
  const [messages, setMessages] = useState<any>();
  useEffect(() => {
    if (users && userSelected) {
      if (users[userSelected] !== undefined) {
        const messages = users[userSelected].messages;
        setMessages(messages);
        console.log("messages", messages, "of the user", userSelected);
      }

      // console.log(messages,userSelected);
    }
  },[userSelected, users]);

  return (
    <>
      {/*This shows messages sent from you*/}
      <div className="message__container">
        <h3>{userSelected}</h3>
        {messages?.map((message: any) =>
          message.fromSelf ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.message}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{userSelected}</p>
              <div className="message__recipient">
                <p>{message.message}</p>
              </div>
            </div>
          )
        )}

        {/*This is triggered when a user is typing*/}
        {/* <div className="message__status">
          <p  style={{opacity:typingCheck?1:0,transition:"all 0.1s ease-in-out"}} >{typingStatus} is Typing </p>
        </div>
        <div ref={lastMessageRef as React.RefObject<HTMLDivElement>} />  */}
      </div>
    </>
  );
};

export default ChatBody;
