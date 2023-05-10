//Import what is required from react and react-router-dom
import React from "react";
import {Routes, Route} from "react-router-dom";

//import components from relevant pages
import PageHeading from "./components/PageHeading";
import NavigationMenu from "./components/navigationMenu";
import LandingPage from "./components/LandingPage";
import ProductRender from "./components/Product";
import LegalInfo from "./components/LegalPage";
import UserPage from "./components/UserPage";
import InterestCalculator from "./components/InterestCalculator";
import PageFooter from "./components/pageFooter";
import AboutUs from "./components/AboutUsPage";
import ContactUs from "./components/ContactUs";
import Ethics from "./components/Ethics";

import "./App.css";
import "./myStyles.css";

function App() {
  return (
    <div className="App">
      <PageHeading/>
      <NavigationMenu/>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route path='/shopping' element={<ProductRender/>} />
        <Route path='/legal' element={<LegalInfo/>} />
        <Route path='/calculator' element={<InterestCalculator />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/ethics' element={<Ethics/>} />

      </Routes>
      <PageFooter/>

      </div>
    );
  }
export default App;

