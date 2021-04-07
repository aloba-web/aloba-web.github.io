import React from "react";
import { useHistory } from "react-router-dom";
import { WhatIsAloba } from "../../hooks/fetch/fetchTypes";
import Button from "../../components/Button";

const What: React.FC<WhatIsAloba> = ({ title, subTitle, text }) => {
  const history = useHistory();
  return (
    <div className="what container">
      {title && <h2>{title}</h2>}
      {subTitle && <span>{subTitle}</span>}
      {text && <p>{text}</p>}
      <Button buttonType={"primary"} onClick={() => history.push("/products")}>
        Våra produkter
      </Button>
    </div>
  );
};

export default What;
