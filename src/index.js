import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Background.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="square">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div className="circle">
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <App />
  </React.StrictMode>
);
