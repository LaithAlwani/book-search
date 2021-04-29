import React from "react";

function Message({ message }) {
  return (
    <div
      className={
        message === "Book Already exsists in list"
          ? "alert alert-danger text-center"
          : "alert alert-success text-center"
      }
      role="alert"
    >
      <span>{message}</span> 
    </div>
  );
}

export default Message;
