import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return {
    banner: {
      background: 'url("./banner2.jpg")',
      height: '400px'
    },
    carouselContainer: {
      height: "50%",
      display: "flex",
      alignItems: "center",
      marginTop: 10
    },
  };
});

export default useStyles;