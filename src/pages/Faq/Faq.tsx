import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { QnA } from "../../hooks/fetch/fetchTypes";
import useFetch, { POST_TYPE } from "../../hooks/fetch/useFetch";
import { createMarkup } from "../../utils/utils";
import PAGE from "../pageNames";
import { QnAPage } from "../../hooks/fetch/fetchTypes";
import "./Faq.scss";

const Questions: React.FC = () => {
  const { complete, data } = useFetch({
    postType: POST_TYPE.QNA,
    filter: "[orderby]=date&order=asc",
  });
  if (!complete || !data) return <></>;
  const questionsAndAnswers = data as Array<QnA>;

  return (
    <div className="questions">
      {questionsAndAnswers.map((question, index) => (
        <div key={index} className="question">
          <h3>{question.question}</h3>
          <p dangerouslySetInnerHTML={createMarkup(question.answer || "")} />
        </div>
      ))}
    </div>
  );
};

const What: React.FC = () => {
  const { complete, data } = useFetch({ page: PAGE.QNA });
  if (!complete || !data) return <></>;
  const { title, ingress } = data as QnAPage;

  return (
    <>
      <Navbar />
      <div className="faq container">
        <div className="header-container">
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={createMarkup(ingress || "")} />
        </div>
        <Questions />
      </div>
      <Footer />
    </>
  );
};

export default What;
