import React from "react";
import { createMarkup } from "../../utils/utils";
import "./Card.scss";

export interface CardProps {
  img: string;
  alt: string;
  text?: string;
  title?: string;
}

const Card: React.FC<CardProps> = ({ img, title, text, alt }) => {
  return (
    <div className="card-container">
      <div className="image" style={{ backgroundImage: `url(${img})` }} />
      <div className="text-container">
        <span className="title" dangerouslySetInnerHTML={createMarkup(title)} />
        <span dangerouslySetInnerHTML={createMarkup(text)} />
      </div>
    </div>
  );
};

export default Card;
