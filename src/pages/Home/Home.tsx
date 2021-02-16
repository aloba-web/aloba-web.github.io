import React from "react";
import "./Home.scss";
import aloba from "../../assets/aloba.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <img alt="aloba-logo" src={aloba}></img>
        <p>Simply smashing food</p>
      </div>
      <div className="footer">
        <a href="mailto:info@alobafoods.com">info@alobafoods.com</a>
      </div>
    </div>
  );
};

export default Home;
