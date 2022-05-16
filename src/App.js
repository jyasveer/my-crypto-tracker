import React from 'react';
import { makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-alice-carousel/lib/alice-carousel.css';
import './App.css';
import { CoinDetails, Home } from './pages';
import { AppStateProvider } from './state/AppState';
import { Header } from './components';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <AppStateProvider>
      <div className={classes.App}>
        <Router>
          <Header />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/coin/:coinId' exact element={<CoinDetails />} />
          </Routes>
        </Router>
      </div>
    </AppStateProvider>
  );
}

export default App;
