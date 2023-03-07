// import react 
import React from "react";
import shelves from "../images/LandingPage/shelves.jpg";
import hangers2 from "../images/LandingPage/hangers2.jpg";
import headphones from "../images/LandingPage/headphones.jpg";
import people from "../images/LandingPage/people.jpg";
import logo from "../images/guitar.png"; 



// define the landing page function 
let LandingPage = function () {  
  return (
    <div>
      <div id="shelfDiv">
        <img id="shelfImage" src={shelves} alt="Shelves with various items of clothing and shoes."/>
        <img id="mainLogo" src={logo}/>
        <h2 id="welcomeHeading">Welcome to Famous Guitar Clothing</h2>
      </div>

      <div id="musicClothesContainer">
        <div id="loveMusicDiv">
          <img id="headphones" src={headphones}/>
          <h5 id="musicHeading">We do it for the music</h5>  
        </div>

        <div id="loveClothesDiv">
          <img id="hangers2" src={hangers2}/>
          <h5 id="clothesHeading">We do it for the clothes</h5> 
        </div>
      </div>  

      <div id="peopleContainer">
        <div id="loveYouDiv">
          <img id="people" src={people}/>
          <h5 id="youHeading">We do it for you</h5>
        </div>

      </div>
    </div>
  );
};

// export the page to the main app 
export default LandingPage;
