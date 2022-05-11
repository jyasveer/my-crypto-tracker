import React from "react";
import { getTrendingCoinsData } from "../../common/api";
import { Banner, CoinsTable } from "../../components";
import './Home.css';

const Home = () => {

  getTrendingCoinsData('INR');

  return (
    <div className="home-page">
      <Banner />
      <CoinsTable />
    </div>
  );
};

export default Home;