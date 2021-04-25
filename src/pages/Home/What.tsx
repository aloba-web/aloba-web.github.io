import React from "react";
import { useHistory } from "react-router-dom";
import { WhatIsAloba } from "../../hooks/fetch/fetchTypes";
import Button from "../../components/Button";
import { createMarkup } from "../../utils/utils";

const What: React.FC<WhatIsAloba> = ({ title, subTitle, text }) => {
  const history = useHistory();
  return (
    <div className="what container">
      <span dangerouslySetInnerHTML={createMarkup(title)} />
      <span dangerouslySetInnerHTML={createMarkup(subTitle)} />
      <span dangerouslySetInnerHTML={createMarkup(text)} />
      <Button buttonType={"primary"} onClick={() => history.push("/products")}>
        Våra produkter
      </Button>
    </div>
  );
};

export default What;
