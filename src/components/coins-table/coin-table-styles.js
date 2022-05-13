import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  console.log('theme', theme);
  return {
    table: {
      minWidth: 650,
    },
    firstColumnImage: {
      height: 40,
      width: 40,
      marginRight: 5
    },
    firstColumnText: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    firstColumnSymbolText: {
      textTransform: 'uppercase'
    }
  }
});

const headerStyleObject = {
  color: 'gold',
  fontWeight: 'bold',
  fontSize: 'larger'
};

const styleObject = {
  color: 'white'
};

const firstColumnCellStyle = {
  display: 'flex',
  alignItems: 'center',
  color: 'white',
};

export {
  useStyles,
  headerStyleObject,
  styleObject,
  firstColumnCellStyle
};