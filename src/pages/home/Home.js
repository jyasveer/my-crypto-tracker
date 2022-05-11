import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrendingCoinsData, getCoinListData } from "../../common/api";
import { Banner, CoinsTable, Header } from "../../components";
import useStyles from "./home-styles";
import { useAppState } from "../../state/AppState";
import { Typography } from "@material-ui/core";

const Home = () => {

  const classes = useStyles();

  const [trendingData, setTrendingData] = useState([]);
  const { currency, symbol, setCurrency } = useAppState();
  const [coinList, setCoinList] = useState([]);
  console.log(currency, symbol, setCurrency);

  useEffect(() => {
    const getTrendingCoinData = async () => {
      const response = await getTrendingCoinsData(currency);
      setTrendingData(response);
    };

    const getCoinListResponse = async () => {
      const response = await getCoinListData(currency);
      setCoinList(response);
    };

    getTrendingCoinData();
    getCoinListResponse();
  }, [currency]);

  const prepareCarouselData = () => {
    return trendingData.map(coinData => {
      const profit = coinData?.price_change_percentage_24h > 0;
      const currentPrice = Number(coinData?.current_price).toLocaleString();
      return (
        <Link to={`/coin/${coinData?.id}`} className={classes.carouselItem}>
          <img
            src={coinData?.image}
            alt={coinData?.name}
            className={classes.carouselItemImage} />
          <span>
            {coinData?.symbol}
            &nbsp;
            <span
              style={{
                color: profit ? "green" : "red",
                fontWeight: 500,
              }}
            >
              {profit && "+"}
              {coinData?.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </span>
          <span style={{ fontSize: 22, fontWeight: 500 }}>
            {symbol} {currentPrice}
          </span>
        </Link>
      );
    });
  };

  return (
    <div className="home-page">
      <Header />
      <Banner items={prepareCarouselData()} />
      <div className={classes.tableArea}>
        <Typography
          variant="h3"
          align="center">
          Cryptocurrency Prices By Market Cap
        </Typography>
        <CoinsTable coinList={coinList} />
      </div>
    </div>
  );
};

export default Home;