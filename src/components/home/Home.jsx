import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import home1 from "./images/home-1.jpg";
import "./Home.css";
import Jumbotron from "../jumbotron/Slide";
import Search from "../search/Search";
import Hero from "./Hero";

function Home() {
  return (
    <div className="w-100" style={{ marginTop: "-3rem",  borderRadius: '5rem'} }>
     <Hero/>
    </div>
  );
}

export default Home;
