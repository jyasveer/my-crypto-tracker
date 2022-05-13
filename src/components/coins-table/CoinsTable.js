import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useAppState } from '../../state/AppState';
import { useNavigate } from 'react-router-dom';
import { TextareaAutosize, TextField } from '@material-ui/core';
import {
  firstColumnCellStyle,
  headerStyleObject,
  styleObject,
  useStyles
} from './coin-table-styles';
import './CoinsTable.css';

const CoinsTable = ({ coinList }) => {
  console.log('coinList', coinList);
  const classes = useStyles();
  const { symbol } = useAppState();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [filteredCoinList, setFilteredCoinList] = useState(coinList);

  const handleRowClick = (rowData) => {
    navigate(`/coin/${rowData.id}`);
  }

  const handleSearchOnChange = (event) => {
    setSearchText(event.target.value);
  }

  useEffect(() => {
    const handleSearch = () => {
      const filteredList = coinList.filter(coin => {
        const ifNameMatches = coin.name.includes(searchText);
        const ifSymbolMatches = coin.symbol.includes(searchText);

        if (ifNameMatches || ifSymbolMatches) {
          return true;
        }

        return false;
      });

      setFilteredCoinList(filteredList);
    };

    handleSearch();
  }, [searchText, coinList]);

  return (
    <>
      <input type='text' value={searchText} onChange={handleSearchOnChange} />
      <TableContainer
        component={Paper}
        style={{ backgroundColor: 'black', color: 'white' }}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={headerStyleObject}>Coin</TableCell>
              <TableCell style={headerStyleObject} align="right">Price</TableCell>
              <TableCell style={headerStyleObject} align="right">24h Change</TableCell>
              <TableCell style={headerStyleObject} align="right">Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCoinList.map((row) => (
              <TableRow
                key={row.name}
                style={{
                  cursor: 'pointer'
                }}
                onClick={() => handleRowClick(row)}
              >
                <TableCell style={firstColumnCellStyle} component="th" scope="row">
                  <img className={classes.firstColumnImage} src={row.image} alt={row.name} />
                  <div className={classes.firstColumnText}>
                    <span className={classes.firstColumnSymbolText}>{row.symbol}</span>
                    <span>{row.name}</span>
                  </div>
                </TableCell>
                <TableCell style={styleObject} align="right">{symbol} {Number(row.current_price).toLocaleString()}</TableCell>
                <TableCell style={styleObject} align="right">{row.price_change_percentage_24h}</TableCell>
                <TableCell style={styleObject} align="right">{symbol} {Number(row.market_cap).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CoinsTable;
