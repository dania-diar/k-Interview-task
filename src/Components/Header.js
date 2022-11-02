import React from "react";

const Header = () => {
  const changeTheme = () => {
    const header = document.querySelector(".header");
    const details = document.querySelectorAll(".details");
    const uls = document.querySelectorAll("ul");

    details.forEach((detail) => {
      detail.classList.toggle("light-theme");
    });
    header.classList.toggle("light-theme");
    uls.forEach((ul) => {
      ul.classList.toggle("light-theme");
    });
    document.body.classList.toggle("light-theme");
  };
  return (
    <>
      <header className="header">
        <div>
          <h1>where in the world</h1>
        </div>

        <div>
          <i className="fas fa-moon" onClick={() => changeTheme()}></i> Dark
          Mode
        </div>
      </header>
    </>
  );
};

export default Header;
