import React from "react";
import { Link } from "react-router-dom";

import shelves from "../images/LandingPage/shelves.jpg";
import hangers2 from "../images/LandingPage/hangers2.jpg";
import headphones from "../images/LandingPage/headphones.jpg";
import people from "../images/LandingPage/people.jpg";
import logo from "../images/guitar.png";

import spotifyLogo from "../images/Icons/icons8-spotify-50.png";
import amazonLogo from "../images/Icons/icons8-amazon-50.png";
import itunesLogo from "../images/Icons/icons8-itunes-50.png";

import facebookLogo from "../images/Icons/icons8-facebook-50.png";
import instagramLogo from "../images/Icons/icons8-instagram-50.png";
import twitterLogo from "../images/Icons/icons8-twitter-50.png";



let LandingPage = function () {
  return (
    <div>
      <div id="shelfDiv">
        <img id="shelfImage" src={shelves} alt="Shelves with various items of clothing and shoes." />
        <img id="mainLogo" src={logo} alt="main logo" />
        <h2 id="welcomeHeading">Welcome to Famous Guitar Clothing</h2>
      </div>

      <div id="musicClothesContainer">
        <div id="loveMusicDiv">
          <img id="headphones" src={headphones} alt="headphones" />
          <h5 className="musicHeading">We do it for the music</h5>
          <div className="musicIconContainer">

            <a href="https://open.spotify.com/?" target="_blank" rel="noreferrer">
              <img className="musicLink" src={spotifyLogo} alt="spotify logo" />
            </a>

            <a href="https://music.amazon.co.uk/" target="_blank" rel="noreferrer">
              <img className="musicLink" src={amazonLogo} alt="amazon logo" />
            </a>

            <a href="https://www.apple.com/uk/itunes/" target="_blank" rel="noreferrer">
              <img className="musicLink" src={itunesLogo} alt="itunes logo" />
            </a>

          </div>
        </div>

        <div id="loveClothesDiv">
          <img id="hangers2" src={hangers2} alt="hangers on a rail" />
          <h5 className="clothesHeading">We do it for the clothes</h5>
          <Link to="/shopping">
          <p className="clothesLink">Go to shopping page</p>
          </Link>
          
        </div>
      </div>

      <div id="peopleContainer">
        <div id="loveYouDiv">
          <img id="people" src={people} alt="people in a field" />
          <h5 id="youHeading">We do it for you</h5>
          <div className="socialIconContainer">

            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <img className="socialLink" src={facebookLogo} alt="facebook logo" />
            </a>

            <a href="https://https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img className="socialLink" src={instagramLogo} alt="instagram logo" />
            </a>

            <a href="https://www.https://twitter.com/" target="_blank" rel="noreferrer">
              <img className="socialLink" src={twitterLogo} alt="twitter logo" />
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};

// export the page to the main app 
export default LandingPage;


//icons used - from icons8.com

/*
<a target="_blank" href="https://icons8.com/icon/11116/spotify">Spotify</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/36099/amazon">Amazon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/47179/itunes">iTunes</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/118467/facebook">Facebook</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/32292/instagram">Instagram</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/8824/twitter">Twitter</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

*/