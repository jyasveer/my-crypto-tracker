import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return {
    carouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color: "white",
      textDecoration: 'none'
    },
    carouselItemImage: {
      height: 80,
      objectFit: 'contain',
      marginBottom: 10
    },
    tableArea: {
      backgroundColor: 'black',
      color: 'white'
    }
  };
});

export default useStyles;