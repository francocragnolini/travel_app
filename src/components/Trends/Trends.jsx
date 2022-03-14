import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import LoadingSpinner from "../../shared/components/LoadingSpinner/LoadingSpinner";
import data from "./data";
import "./Trends.scss";

const Trends = () => {
  const [trends, setTrends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // simulating fetching to db
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setTrends(data);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setTrends]);

  // checking if data exists
  if (trends.length === 0 && isLoading === "false") {
    return <div>No Items Found</div>;
  }

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <section id="trend" className="trend-section">
          <div className="trend-ctn">
            <h2 className="trend-title">Tendencias</h2>
            <ul className="trend-list">
              {trends.map((item) => (
                <li className="trend-item" key={item.id}>
                  <Card
                    new={item.new ? item.new : ""}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Trends;
