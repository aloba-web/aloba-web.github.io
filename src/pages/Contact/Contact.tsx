import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import useFetch from "../../hooks/fetch/useFetch";
import { Contact } from "../../hooks/fetch/fetchTypes";
import PAGE from "../pageNames";
import "./Contact.scss";
import { createMarkup } from "../../utils/utils";

const Products: React.FC = () => {
  const history = useHistory();
  const { complete, data } = useFetch({ page: PAGE.CONTACT });

  if (!complete || !data) return <></>;
  const { title, text, qna } = data as Contact;
  return (
    <>
      <Navbar />
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
            <button
              onClick={() => history.push("/faq")}
              className="link-button"
            >
              Läs mer här
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
