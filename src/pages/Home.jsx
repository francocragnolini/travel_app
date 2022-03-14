import React from "react";
import Banner from "../components/Banner/Banner";
import Blog from "../components/Blog/Blog";
import Trends from "../components/Trends/Trends";
import "./Home.scss";
const Home = () => {
  return (
    <main className="home">
      <Banner />
      <Trends />
      <Blog />
    </main>
  );
};

export default Home;
