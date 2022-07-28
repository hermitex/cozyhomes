import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import home1 from "./images/home-1.jpg";
import "./Home.css";
import Jumbotron from "../jumbotron/Jumbotron";
import Search from "../search/Search";

function Home() {
  return (
    <div className="w-100" style={{ marginTop: "-3rem" }}>
      <Jumbotron />
      <Search/>
    </div>
  );
}

export default Home;
