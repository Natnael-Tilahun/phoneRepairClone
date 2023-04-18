import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from "./pages/About";
import Locations from "./pages/Locations";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Repairs from "./pages/Repairs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LocationDetails from "./pages/LocationDetails";
// import "remixicon/fonts/remixicon.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element = {<App />} >
            <Route path="/" element = { <Home /> } />
            <Route path="/repairs" element = { <Repairs /> } />
            <Route path="/about" element = { <About /> } />
            <Route path="/locations" element = { <Locations />} />
            <Route path="/contactus" element = { <ContactUs /> } />
            <Route path="/privacy-policy" element = { <PrivacyPolicy /> } />
            <Route path="/location-details" element = { <LocationDetails /> } />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
