import React from "react";

import classes from "./ListingCard.module.css";
import Image from "../../../assets/181.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SingleBedIcon from "@material-ui/icons/SingleBed";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BathtubIcon from "@material-ui/icons/Bathtub";

const ListingCard = (props) => {
  return (
    // {/* <Col> */}
    <div className={classes.ListingCard}>
      <div className={classes.ImgContainer}>
        <img src={Image} alt="container" />
      </div>
      <div className={classes.Title}>{props.title}</div>
      <div className={classes.Icons}>
        <div className={classes.Icon}>
          <AttachMoneyIcon fontSize="large" color="secondary" />
          <div className={classes.Value}>{props.price}</div>
        </div>
        <div className={classes.Icon}>
          <SingleBedIcon fontSize="large" color="secondary" />
          <div className={classes.Value}>{props.bedrooms}</div>
        </div>
        <div className={classes.Icon}>
          <BathtubIcon fontSize="large" color="secondary" />
          <div className={classes.Value}>{props.bathrooms}</div>
        </div>
      </div>
    </div>
    // </Col>
  );
};

export default ListingCard;
