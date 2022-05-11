import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useAppState } from '../../state/AppState';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const CoinsTable = ({ coinList }) => {
  const classes = useStyles();
  const { symbol } = useAppState();
  const navigate = useNavigate();

  const headerStyleObject = {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: 'larger'
  };

  const styleObject = {
    color: 'white'
  };

  const handleRowClick = (rowData) => {
    navigate(`/coin/${rowData.id}`);
  }

  return (
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
          {coinList.map((row) => (
            <TableRow
              key={row.name}
              style={{
                cursor: 'pointer'
              }}
              onClick={() => handleRowClick(row)}
            >
              <TableCell style={styleObject} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={styleObject} align="right">{symbol} {Number(row.current_price).toLocaleString()}</TableCell>
              <TableCell style={styleObject} align="right">{row.price_change_percentage_24h}</TableCell>
              <TableCell style={styleObject} align="right">{symbol} {Number(row.market_cap).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CoinsTable;
