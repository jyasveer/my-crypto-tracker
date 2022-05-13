import React from "react";
import { Typography } from '@material-ui/core';
import Carousel from "../carousel/Carousel";
import useStyles from "./banner-styles";

const Banner = ({ items }) => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Typography
        variant="h2"
        align="center"
        color="white">
        Crypto Tracker
      </Typography>
      <Typography
        variant="subtitle2"
        align="center"
        color="secondary"
        style={{
          marginTop: 10,
          marginBottom: 20
        }}>
        Get all the info regarding your favourite crypto currency
      </Typography>
      <div className={classes.carouselContainer}>
        <Carousel items={items} />
      </div>
    </div>
  );
};

export default Banner;