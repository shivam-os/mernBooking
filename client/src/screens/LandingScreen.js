import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import hero from "../assets/hero.webp"
AOS.init({
  duration: 2000,
});

function RoomCard(props) {
  const {location, count, src} = props;
  return (
    <div>
      <img src={src} class="img" width="100" />
      <h3>{location}</h3>
      <p>{count} properties</p>
    </div>
  )
}

function LandingScreen() {
  return (
    <div className="row landing">
      <div className="col-md-12 text-center">
        <h2 data-aos="zoom-in" style={{ color: "white", fontSize: "2rem" }}>
          A lifetime of discounts? It's Genius.
        </h2>
        <p>Get rewarded for your travels- unlock instant savings of 10% or more with a free account.</p>
        <button>Sign in/ Register</button>
        <h1 data-aos="zoom-out" style={{ color: "white" }}>
          There is only one boss. The Guest.
        </h1>
        <Link to="/home">
          <button className="btn btn-primary landingBtn">Book Your Room</button>
        </Link>
      </div>
      <h3>Explore Nearby</h3>
    </div>
  );
}

export default LandingScreen;
