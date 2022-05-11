import axios from "axios";

export const getTrendingCoinsData = (currency) => {
  axios
    .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24`)
    .then(response => {
      console.log('api.js', response);
    })
    .catch(error => {
      console.log(error);
    });
};