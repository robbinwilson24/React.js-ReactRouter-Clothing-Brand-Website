import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/guitar.png"; 

function PageHeading() {
  return (
    <div id="PageHeading">
      <header>
        <div id="logoDiv">
          <img id="storeLogo2" src={logo} alt="logo" />
          <Link to="/">
            <h1 id="mainHeading">Famous Guitar Clothing</h1>
          </Link>
          <img id="storeLogo" src={logo} alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default PageHeading;
