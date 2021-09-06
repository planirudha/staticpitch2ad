import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Divider from '@material-ui/core/Divider';
import adstickimg from 'assets/img/adstick2.png';
import connect from 'assets/img/connectedscreens.png';
import time from 'assets/img/time.png';
import target from 'assets/img/target.png';
import direction from 'assets/img/direction.png';
import heart from 'assets/img/heart.png';
import trans from 'assets/img/trans.png';
import pupilmesh from 'assets/img/pupilmesh.png';
import roar from 'assets/img/Roarcf.png';
import rghos from 'assets/img/RGHos.png';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';



import styles from "assets/jss/main/sections/ClientStyle";

const useStyles = makeStyles(styles);

export default function Clients() {
  const classes = useStyles();

  
  return (
    <div className={classes.section}>
     
      
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={2}>
          <div className={classes.infoArea}>
              <div className={classes.iconWrapper}>
                <img src={pupilmesh} />
                <br></br>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
          <div className={classes.infoArea}>
              <div className={classes.iconWrapper}>
                <img src={roar} />
                <br></br>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
          <div className={classes.infoArea}>
              <div className={classes.iconWrapper}>
                <img src={rghos} />
                <br></br>
              </div>
            </div>
          </GridItem>
        </GridContainer>
        
        </div>
    </div>
  );
}
