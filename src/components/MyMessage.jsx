import React from "react";

const MyMessage = ({ message }) => {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="attachment-message"
        style={{ float: "right" }}
        className="message-image"
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        color: "white",
        backgroundColor: "#3B2A50",
        marginRight: "18px",
        float: "right",
      }}>
      {message.text}
    </div>
  );
};

export default MyMessage;
