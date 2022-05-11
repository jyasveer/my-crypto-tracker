import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { CoinDetails, Home } from './pages';
import 'react-alice-carousel/lib/alice-carousel.css';
import { AppStateProvider } from './state/AppState';

function App() {
  return (
    <AppStateProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/coin/:id' exact element={<CoinDetails />} />
          </Routes>
        </Router>
      </div>
    </AppStateProvider>
  );
}

export default App;
