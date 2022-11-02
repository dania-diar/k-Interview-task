import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Countries from "./Components/Countries";
import Filter from "./Components/Filter";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Header />
      <Filter />
      <Countries />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
