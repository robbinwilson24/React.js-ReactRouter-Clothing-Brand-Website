import React from "react";
import { Routes, Route, Link } from "react-router-dom";


//Create navigation component that wil export to main page 
function NavigationMenu() {
    return(
      <div>
        <nav id="NavigationMenu">
          <Link className="linkButtons" to="/" >HOME</Link>
          <Link className="linkButtons" to="/shopping">SHOPPING</Link>
          <Link className="linkButtons" to="/calculator">FINANCE</Link>
          <Link className="linkButtons" to="/user">USER LOGIN</Link>
      </nav>
    </div>
    )
  }
export default NavigationMenu;