import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Countries from "./Components/Countries";
import Filter from "./Components/Filter";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
