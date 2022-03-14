import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { title, description, image } = props;

  return (
    <article className="card">
      {props.new && <span className="card-new">Nuevo</span>}
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-ctn">
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-desc">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
