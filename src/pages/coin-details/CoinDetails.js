import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components";
import './CoinDetails.css';

const CoinDetails = () => {
  const { id } = useParams();
  console.log('coin id - ', id);
  return (
    <div>
      <Header />
      Coin Details Page
    </div>);
};

export default CoinDetails;