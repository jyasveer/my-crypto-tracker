import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChartData } from "../../common/api";
import { useAppState } from "../../state/AppState";
import './CoinDetails.css';

const CoinDetails = () => {
  const { coinId } = useParams();
  console.log('coin id - ', coinId);
  const [coinChartData, setCoinChartData] = useState({});
  const { currency } = useAppState();

  useEffect(() => {
    const fetchCoinChartData = async () => {
      const reponse = await getChartData(coinId, currency, 30);
      setCoinChartData(reponse);
    }
    fetchCoinChartData();
  }, [currency, coinId]);

  if (!coinId) {
    return <>Page does not has a id</>;
  }

  console.log('coin chart data', coinChartData);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1>{`Coin chart data will be shown here for Coin ID - "${coinId}"`}</h1>
    </div>);
};

export default CoinDetails;