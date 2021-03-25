import React from "react";
import { useHistory } from "react-router-dom";
import { WhatIsAloba } from "../../hooks/fetch/fetchTypes";

const What: React.FC<WhatIsAloba> = ({ title, subTitle, text }) => {
  const history = useHistory();
  return (
    <div className="what container">
      {title && <h2>{title}</h2>}
      {subTitle && <span>{subTitle}</span>}
      {text && <p>{text}</p>}
      <button onClick={() => history.push("/products")} className="link-button">
        Våra produkter
      </button>
    </div>
  );
};

export default What;
