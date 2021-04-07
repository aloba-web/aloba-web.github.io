import React from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../../hooks/fetch/useFetch";
import { Contact } from "../../hooks/fetch/fetchTypes";
import PAGE from "../pageNames";
import { createMarkup } from "../../utils/utils";
import PageWrapper from "../PageWrapper";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";
import "./Contact.scss";
import Button from "../../components/Button";

const Products: React.FC = () => {
  const history = useHistory();
  const { complete, data } = useFetch({ page: PAGE.CONTACT });

  if (!complete || !data) return <Spinner />;
  const { title, text, qna } = data as Contact;
  return (
    <PageWrapper>
      <div className="contact">
        <div className="contact-info-text-wrapper">
          <h1>{title}</h1>
          <div
            className="header"
            dangerouslySetInnerHTML={createMarkup(text || "")}
          />
        </div>
        <div className="qna">
          <div className="container">
            <h2>{qna?.title}</h2>
            <p dangerouslySetInnerHTML={createMarkup(qna?.ingress || "")} />
            <Button buttonType="secondary" onClick={() => history.push("/faq")}>
              Läs mer här
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Products;
