import React from "react";
import Header from "./Components/Header";
import Countries from "./Components/Countries";
import Filter from "./Components/Filter";
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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
