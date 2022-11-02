import React, { Children } from "react";
import Header from "./Components/Header";
import Countries from "./Components/Countries";
import Filter from "./Components/Filter";
import Country from "./Components/country";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Header />
      {/* <Filter /> */}
      <Countries />
    </div>
  );
};

const CountryPage = () => {
  return (
    <div>
      <Header />
      <Country />
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/Countries/:name",
      element: <CountryPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
