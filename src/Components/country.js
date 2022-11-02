import React from "react";
import { Link } from "react-router-dom";
const country = () => {
  return (
    <>
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-left"></i>
        Home
      </Link>
      <h1>country Data </h1>
    </>
  );
};

export default country;
