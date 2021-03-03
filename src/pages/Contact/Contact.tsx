import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./Contact.scss";

const Products: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <Navbar />
      <div className="contact">
        <h1>Kontakt</h1>
        <div className="header">
          <p>
            Vi vill höra vad du tycker! Du kan alltid nå oss med frågor eller
            feedback på
          </p>
          <p>
            <a style={{ fontWeight: "bold" }} href="mailto:info@alobafoods.com">
              info@alobafoods.com
            </a>
          </p>
        </div>
        <div className="contact-info">
          <p>Butikskontakt:</p>
          <p>Malin Lind - Sales Manager, Stockholm</p>
          <p>
            <a
              style={{ fontWeight: "bold" }}
              href="mailto:malin@alobafoods.com"
            >
              malin@alobafoods.com
            </a>
          </p>
          <p>
            <a style={{ fontWeight: "bold" }} href="tel:0721521418">
              0721 52 14 18
            </a>
          </p>
        </div>
        <div className="qna">
          <h2>Frågor & svar</h2>
          <p>
            Här har vi samlat frågor och svar. Hittar du inte svaret på din
            fråga, maila oss gärna så ska vi göra vårt bästa för att svara på
            dina frågor.
          </p>
          <button onClick={() => history.push("/faq")} className="link-button">
            Läs mer här
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
