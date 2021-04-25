import React from "react";
import { QnA } from "../../hooks/fetch/fetchTypes";
import useFetch, { POST_TYPE } from "../../hooks/fetch/useFetch";
import { createMarkup } from "../../utils/utils";
import PAGE from "../pageNames";
import { QnAPage } from "../../hooks/fetch/fetchTypes";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";
import "./Faq.scss";
import PageWrapper from "../PageWrapper";

const Questions: React.FC = () => {
  const { complete, data } = useFetch({
    postType: POST_TYPE.QNA,
    filter: "[orderby]=date&order=asc",
  });
  if (!complete || !data) return <Spinner />;
  const questionsAndAnswers = data as Array<QnA>;

  return (
    <div className="questions">
      {questionsAndAnswers.map((question, index) => (
        <div key={index} className="question">
          <span dangerouslySetInnerHTML={createMarkup(question.question)} />
          <span dangerouslySetInnerHTML={createMarkup(question.answer)} />
        </div>
      ))}
    </div>
  );
};

const What: React.FC = () => {
  const { complete, data } = useFetch({ page: PAGE.QNA });
  if (!complete || !data) return <Spinner />;
  const { title, ingress } = data as QnAPage;

  return (
    <PageWrapper>
      <div className="faq container">
        <div className="header-container">
          <span dangerouslySetInnerHTML={createMarkup(title)} />
          <span dangerouslySetInnerHTML={createMarkup(ingress)} />
        </div>
        <Questions />
      </div>
    </PageWrapper>
  );
};

export default What;
