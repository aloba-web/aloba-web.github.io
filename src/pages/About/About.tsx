import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./About.scss";
import { createMarkup } from "../../utils/utils";
import useFetch from "../../hooks/fetch/useFetch";
import PAGE from "../pageNames";
import { About } from "../../hooks/fetch/fetchTypes";

const AboutPage: React.FC = () => {
  const { complete, data } = useFetch({ page: PAGE.ABOUT });

  if (!complete || !data) return <></>;
  const { title, text, image } = data as About;
  return (
    <>
      <Navbar />
      <div className="about">
        <img className="image-divider" src={image} alt="divider" />
        <div className="about-text container">
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={createMarkup(text || "")} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
