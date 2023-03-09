import React from "react";
import logo from "../images/guitar.png"; 


function PageHeading() {
  return(
    <div id="PageHeading">
      <header>
        <div id="logoDiv">
          <img id="storeLogo2" src={logo}/>
          <h1 id="mainHeading">Famous Guitar Clothing</h1>
          <img id="storeLogo" src={logo}/>

        </div>
      </header>
    </div>
  );
}

export default PageHeading;
