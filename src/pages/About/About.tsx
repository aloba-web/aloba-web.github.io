import React from "react";
import { createMarkup } from "../../utils/utils";
import useFetch from "../../hooks/fetch/useFetch";
import PAGE from "../pageNames";
import PageWrapper from "../PageWrapper";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";
import { About } from "../../hooks/fetch/fetchTypes";
import "./About.scss";

const AboutPage: React.FC = () => {
  const { complete, data } = useFetch({ page: PAGE.ABOUT });

  if (!complete || !data) return <Spinner />;
  const { title, text, image } = data as About;
  return (
    <PageWrapper>
      <div className="about">
        <img className="image-divider" src={image} alt="divider" />
        <div className="about-text container">
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={createMarkup(text || "")} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
