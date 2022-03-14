import React, { useEffect, useState } from "react";
import Article from "./Article";
import blogData from "./blogData";
import "./Blog.scss";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setArticles(blogData);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setArticles]);

  return (
    <section id="blog" className="blog-section">
      <div className="blog-ctn">
        <h2 className="blog-title">Blog</h2>
        <div className="blog-layout">
          {/* column-left */}
          <div className="blog-main-column">
            <ul className="blog-main-list">
              {articles.slice(0, 2).map((item, index) => (
                <li className="blog-item" key={index}>
                  <Article
                    className="blog-article-main"
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    createdAt={item.createdAt}
                    category={item.category ? item.category : null}
                  />
                </li>
              ))}
            </ul>
          </div>
          {/* column-right */}
          <aside className="blog-side-column">
            <ul className="blog-side-list">
              {articles.slice(2, 5).map((item, index) => (
                <li className="side-item" key={index}>
                  <Article
                    className="blog-side-article"
                    image={item.image}
                    title={item.title}
                    createdAt={item.createdAt}
                  />
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Blog;
