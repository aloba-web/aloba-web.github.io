import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./Faq.scss";

interface Question {
  question: string;
  answer: React.ReactChild;
}

const questions: Array<Question> = [
  {
    question: "Vad är Aloba?",
    answer:
      "Aloba är ett nytt plantbaserat matkoncept som kombinerar både smak och hälsa med utvalda nordiska råvaror som bas, bland annat alger, havre och korn, därav namnet Aloba (från engelskans ALgae, Oats, BArley).",
  },
  {
    question: "Vad innehåller Aloba?",
    answer: (
      <span>
        Se respektive produkters ingredienser & näringsvärden:{" "}
        <Link to="/products/1">plantbaserade burgare</Link> &{" "}
        <Link to="/products/2">plantbaserad färs</Link>
      </span>
    ),
  },
  {
    question: "Var tillverkas Aloba?",
    answer: "I Sverige, närmare bestämt i Skåne.",
  },
  {
    question: "Vilka står bakom Aloba?",
    answer:
      "Aloba® är ett varumärke grundat av det nystartade företaget Aloba Foods AB, som har sin bas på Ideon i Lund. Bakom företaget står forskare och livsmedelsentreprenörer som bland annat har en bakgrund och erfarenhet från Oatly, Mat.se, Santa Maria samt norska Seaweed Solutions AS som odlar och skördar alger i havet utanför Trondheim.",
  },
  {
    question: "Hur är Aloba klimatsmart?",
    answer:
      "Livsmedel står idag för cirka 25% av global klimatpåverkan. Aloba är 100% plantbaserat och i jämförelse med kött, framförallt nötkött, är det ett alternativ som bidrar till minskat koldioxidutsläpp. Med andra ord – det gör skillnad att välja plantbaserade livsmedel, oavsett om du gör det en eller flera dagar i veckan.",
  },
  {
    question: "Aloba innehåller alger, vad är bra med alger?",
    answer:
      "Algerna, i vårt fall Saccharina latissima, ofta även kallat sockertång, är laddade med nyttigheter såsom antioxidanter, jod och mineraler. Fettet är rikt på omega3-fettsyror samt att det är en smakbärare. Det finns också många positiva klimat- och miljöfördelar med alger – de växer snabbt, ökar mängden fisk, tar ingen landareal i anspråk och binder effektivt Co2.",
  },
  {
    question:
      "Aloba innehåller havre, korn & quinoa, varför har ni valt dessa sädesslag?",
    answer:
      "Vi som står bakom Aloba har forskat kring och utvecklat produkter med havre under 30 år, och tog bland annat fram Oatly. Under senare år har vi även tittat på korn och quinoa. De är alla tre fantastiska råvaror på olika sätt, odlade i Sverige, noggrant utvalda, rika på kostfibrer och bidrar till Alobas specifika smak, textur och näringsprofil.",
  },
  {
    question: "Är Aloba rik på fibrer?",
    answer:
      "Ja, Aloba är rikt på fiber. Tack vare den unika blandningen av svensk havre, korn och quinoa så får du i dig nästan 6 gram kostfiber när du äter en Alobaburgare eller 100 gram Alobafärs!",
  },
  {
    question: "Var kommer råvarorna ifrån?",
    answer:
      "De allra flesta råvarorna kommer från Sverige, medan algerna skördas vid egna odlingar utanför Trondheim i Norge.",
  },
  {
    question: "Vilka produkter finns?",
    answer:
      "Just nu finns burgare och formbar färs, vi jobbar på att utveckla och utöka sortimentet med nya produkter under 2021.",
  },
  {
    question: "Finns några allergener?",
    answer: (
      <span>
        Aloba är inte glutenfri och det finns även en möjlighet, om än minimal,
        att algerna kan ha spår av fisk och skaldjur, då de odlas i havet. Se
        respektive produkters ingredienser & näringsvärden:{" "}
        <Link to="/products/1">plantbaserade burgare</Link> &{" "}
        <Link to="/products/2">plantbaserad färs</Link>
      </span>
    ),
  },
  {
    question: "Aloba är en källa till jod, vad betyder det?",
    answer:
      "Det är viktigt att vi får i oss jod. Jod ingår i sköldkörtelhormoner som  deltar i ämnesomsättningen. Mager fisk, skaldjur, ägg, mejerier och även  alger innehåller mycket jod. Som med det mesta är lagom bäst, både brist  och för mycket jod kan leda till störningar. 100 g Aloba ger 147% av  rekommenderat dagligt intag (RDI, 150 mikrogram) av jod. En övre gräns  för säkert intag (UL, upper level) är 600 mikrogram jod per dag för  vuxna.",
  },
  {
    question: "Hur ska Aloba tillagas?",
    answer:
      "Att tillaga Aloba är enkelt. Stek burgarna i en panna med en klick smör och lite olja. Färsen är formbar. Krydda efter tycke och smak. Kolla gärna våra recept för inspiration.",
  },
  {
    question: "Aloba är fryst – måste den tinas före tillagning?",
    answer:
      "Vi rekommenderar att du tinar Aloba först (lägg i kylen dagen innan), men det går bra att steka burgarna och färsen otinad.",
  },
  {
    question: "Finns recept till Aloba?",
    answer: (
      <span>
        Ja, det finns ett på förpackningen och fler hittar du här:{" "}
        <Link to="/recipes">Recept och inspration</Link>
      </span>
    ),
  },
  {
    question: "Var kan jag köpa Aloba?",
    answer: (
      <span>
        Nu finns vi i utvalda butiker i Stockholm, men har ambitionen att nå
        alltfler butiker runtom i Sverige. Fråga gärna i din butik så ökar
        chansen att kedjorna tar in Aloba. Här hittar du i vilka butiker vi
        finns nu: <Link to="/stores">Butiker</Link>
      </span>
    ),
  },
];

const getQuestions = (data: Array<Question>) => (
  <div className="questions">
    {data.map((question, index) => (
      <div key={index} className="question">
        <h3>{question.question}</h3>
        <p>{question.answer}</p>
      </div>
    ))}
  </div>
);

const What: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="faq container">
        <div className="header-container">
          <h1>Frågor & svar</h1>
          <p>
            Här har vi samlat frågor och svar. Hittar du inte svaret på din
            fråga, maila oss gärna på{" "}
            <a style={{ fontWeight: "bold" }} href="mailto:info@alobafoods.se">
              info@alobafoods.se
            </a>{" "}
            så ska vi göra vårt bästa för att svara på dina frågor.
          </p>
        </div>
        {getQuestions(questions)}
      </div>
      <Footer />
    </>
  );
};

export default What;
