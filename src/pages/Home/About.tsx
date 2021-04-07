import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { AboutUs } from "../../hooks/fetch/fetchTypes";

const About: React.FC<AboutUs> = ({ title, text }) => {
  const history = useHistory();
  return (
    <div className="story container">
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
      <Button buttonType={"primary"} onClick={() => history.push("/about")}>
        Om oss
      </Button>
    </div>
  );
};

export default About;
