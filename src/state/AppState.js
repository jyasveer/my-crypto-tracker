const { createContext, useState, useContext } = require("react");

const AppContext = createContext({
  currency: 'INR',
  symbol: '₹'
});

export const AppStateProvider = ({ children }) => {

  const [currency, setCurrency] = useState('INR');
  let symbol = '₹';

  const setSymbol = () => {
    if (currency === 'INR') {
      symbol = '₹';
    } else {
      symbol = '$';
    }
  };

  setSymbol();

  return (
    <AppContext.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppContext);
}
