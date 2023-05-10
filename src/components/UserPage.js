import React, { useState, useEffect } from "react";
import notes from "../images/Additional/notes.jpg"

function UserPage() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    // Retrieve user information from localStorage when the page is loaded
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  // define a function to be called when a user submits log in details
  // prevent the default of the submit button
  function login(e) {
    e.preventDefault();
    setIsLoggedIn(true);
    // Save user information to localStorage when they log in
    localStorage.setItem("user", JSON.stringify(user));
  }

  // define a function for when a user logs out
  function logout() {
    alert("User has logged out");
    setIsLoggedIn(false);
    // Clear user information from localStorage when they log out
    localStorage.removeItem("user");
    // set the users details to blank details that can be updated in a form
    setUser({ firstName: "", lastName: "", email: "" });
  }

  return (
    <div>

      <div id="profileDiv">
        <img id="profileImage" src={notes} alt="" />
        <h1 id="profileHeading">User Profile</h1>
      </div>

      <div id="userPage">
        {isLoggedIn ? (
          <div>
            <div id="userGreeting">
              <p id="greetingMessage">
                Welcome, {user.firstName} {user.lastName}!
              </p>
            </div>
            <div id="userProfileInfo">
              <h3>Personal Information</h3>
              <hr/>
              <p className="nameClass">
                Name: <span>{user.firstName}</span>
              </p>
              <p className="nameClass">
                Surname: <span>{user.lastName}</span>
              </p>
              <p className="emailClass">
                Email: <span>{user.email}</span>
              </p>
              <br/>
              <button id="logoutButton" onClick={logout}>
                Logout
              </button>

            </div>
            
          </div>
        ) : (
          <form id="userLogin" onSubmit={login}>
            <p>Sign into your account:</p>
            <input
              className="inputFirstName"
              type="text"
              placeholder="First Name"
              value={user.firstName}
              onChange={(e) => {
                setUser({ ...user, firstName: e.target.value });
              }}
              required
            />
            <input
              className="inputLastName"
              type="text"
              placeholder="Last Name"
              value={user.lastName}
              onChange={(e) => {
                setUser({ ...user, lastName: e.target.value });
              }}
              required
            />
            <input
              className="inputEmail"
              type="email"
              placeholder="Email Address"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              required
            />
            <br/>
            <button id="signInButton" type="submit">
              Sign In
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default UserPage;
