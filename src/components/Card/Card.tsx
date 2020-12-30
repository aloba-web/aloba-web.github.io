import React from "react";
import "./Card.scss";

export interface CardProps {
  img: string;
  text: string;
  alt: string;
}

const Card: React.FC<CardProps> = ({ img, text, alt }) => {
  return (
    <div className="card-container">
      <img src={img} alt={alt} />
      <div className="text-container">
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default Card;
