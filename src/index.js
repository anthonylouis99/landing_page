import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App";
import reportWebVitals from "./reportWebVitals";
// import MyForm from "./MyForm";
// import Message from "./Message";
// import Forms from "./Forms";
import App from "./App";
// import Body from "./Body";
// import Count from "./count";
// import Jokes from "./jokes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Count /> */}
    {/* <Body /> */}
    {/* <Jokes /> */}
    {/* <Message /> */}
    {/* <Forms /> */}
    {/* <MyForm /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
