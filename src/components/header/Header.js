import React from "react";
import { MenuItem, Select } from "@material-ui/core";
import { useAppState } from "../../state/AppState";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {

  const { currency, setCurrency } = useAppState();

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <header className="header">
      <Link to='/'>Crypto Tracker</Link>
      <div className="menu">
        <Select
          labelId="currency-label"
          id="app-currency"
          value={currency}
          onChange={handleChange}
          variant="outlined"
        >
          <MenuItem value={'INR'}>INR</MenuItem>
          <MenuItem value={'USD'}>USD</MenuItem>
        </Select>
      </div>
    </header>
  );
};

export default Header;