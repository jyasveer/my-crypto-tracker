import React from "react";
import { Typography } from '@material-ui/core';
import Carousel from "../carousel/Carousel";
import useStyles from "./banner-styles";

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Typography
        variant="h3"
        align="center"
        color="primary">
        Crypto Tracker
      </Typography>
      <Typography
        variant="subtitle2"
        align="center"
        color="secondary">
        Get all the info regarding your favourite crypto currency
      </Typography>
      <Carousel />
    </div>
  );
};

export default Banner;