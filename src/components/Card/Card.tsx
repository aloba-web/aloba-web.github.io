import React from "react";
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
      <img src={img} alt={alt} />
      <div className="text-container">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
