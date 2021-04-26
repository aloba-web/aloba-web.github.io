import React from "react";
import { createMarkup, getImageBySize } from "../../utils/utils";
import useFetch from "../../hooks/fetch/useFetch";
import PAGE from "../pageNames";
import PageWrapper from "../PageWrapper";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";
import { About } from "../../hooks/fetch/fetchTypes";
import "./About.scss";
import useWindowSize from "../../hooks/useWindowSize";

const AboutPage: React.FC = () => {
  const { complete, data } = useFetch({ page: PAGE.ABOUT });
  const windowSizes = useWindowSize();

  if (!complete || !data) return <Spinner />;
  const { title, text, image } = data as About;
  return (
    <PageWrapper>
      <div className="about">
        {image && (
          <img
            className="image-divider"
            src={getImageBySize(image, windowSizes)}
            alt="divider"
          />
        )}
        <div className="about-text container">
          <span dangerouslySetInnerHTML={createMarkup(title)} />
          <span dangerouslySetInnerHTML={createMarkup(text)} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
