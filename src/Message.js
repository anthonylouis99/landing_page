import React from "react";

function Message() {
  const [messages, setMessage] = React.useState([1]);

  let displayMessage;

  if (messages.length > 1) {
    displayMessage = <h1>{`you have ${messages.length} messages`}</h1>;
  } else if (messages.length === 1) {
    displayMessage = <h1>{`you have ${messages.length} message `}</h1>;
  } else {
    displayMessage = <h1>{`you are all caught up`}</h1>;
  }

  return (
    <>
      <div>{displayMessage}</div>
    </>
  );
}

export default Message;
