import React from "react";
import { useHistory } from "react-router-dom";
import { AboutUs } from "../../hooks/fetch/fetchTypes";

const About: React.FC<AboutUs> = ({ title, text }) => {
  const history = useHistory();
  return (
    <div className="story container">
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
      <button onClick={() => history.push("/about")} className="link-button">
        Om oss
      </button>
    </div>
  );
};

export default About;
