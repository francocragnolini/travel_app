import React from "react";
import time from "../../assets/iconos/time.png";
import "./Article.scss";

const Article = (props) => {
  return (
    <article className={`${props.className ? props.className : ""}`}>
      <img className="blog-article-img" src={props.image} alt={props.title} />
      <div className="blog-article-info">
        <div className="blog-article-category">{props.category}</div>
        <h4 className="blog-article-title">{props.title}</h4>
        <p className="blog-article-desc">{props.description}</p>
        <div className="blog-article-time">
          <img src={time} alt="clock icon" />
          {props.createdAt}
        </div>
      </div>
    </article>
  );
};

export default Article;
