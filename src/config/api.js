import axios from "axios";

export const getTrendingCoinsData = async (currency) => {
  const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24`);
  return data;
};

export const getCoinListData = async (currency) => {
  const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
  return data;
}

export const getCoinData = async (id) => {
  const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
  return data;
}

export const getChartData = async (id, currency = 'INR', days = 1) => {
  const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`);
  return data;
}