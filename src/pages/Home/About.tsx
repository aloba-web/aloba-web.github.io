import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { AboutUs } from "../../hooks/fetch/fetchTypes";
import { createMarkup } from "../../utils/utils";

const About: React.FC<AboutUs> = ({ title, text }) => {
  const history = useHistory();
  return (
    <div className="story container">
      <span dangerouslySetInnerHTML={createMarkup(title)} />
      <span dangerouslySetInnerHTML={createMarkup(text)} />
      <Button buttonType={"primary"} onClick={() => history.push("/about")}>
        Om oss
      </Button>
    </div>
  );
};

export default About;
