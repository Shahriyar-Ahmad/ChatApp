import React from "react";

const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ 
            backgroundImage: `url(${message?.sender?.avatar})` 
          }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img 
          src={message.attachments[0].file}
          alt="attachment-message"
          style={{ marginLeft: isFirstMessageByUser? "8px": "48px"}}
          className="message-image"
        />
       ) : (
        <div
          className="message"
          style={{ 
            backgroundColor: "#CABCDC",
            float: "left",
            marginLeft: isFirstMessageByUser? "8px": "48px"
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
