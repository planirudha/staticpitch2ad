import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Divider from '@material-ui/core/Divider';
import adstickimg from 'assets/img/adstick2.png';
import connect from 'assets/img/connectedscreens.png';
import time from 'assets/img/time.png';
import target from 'assets/img/target.png';
import direction from 'assets/img/direction.png';
import heart from 'assets/img/heart.png';
import trans from 'assets/img/trans.png';



import styles from "assets/jss/main/sections/AdstickaboutStyle";

const useStyles = makeStyles(styles);

export default function SectionAdstickabout() {
  const classes = useStyles();

  
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={4}>
      <h2 className={classes.title}>Out of home <br></br>On your FingerTip{"'"}s.</h2>
      <h5 className={classes.description}>
      ADStick a new age Ad-Tech Solution for OOH(Out-of-Home) Digital Screen Advertising.
          </h5>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
      <div className={classes.sectionDesktop}>
       <img
        srcSet={`${adstickimg}?w=164&h=164&fit=crop&auto=format 5.5x`}
      />
       </div>
       <div className={classes.sectionMobile}>
       <img
        srcSet={`${adstickimg}?w=164&h=164&fit=crop&auto=format 14x`}
      />
       </div>
      </GridItem>
        <GridItem xs={12} sm={12} md={10}>
          <h5 className={classes.description1}>
          Choose what you want, when you want, and how long you want your digital out of home ad campaigns in minutes.
          </h5>
        </GridItem>
      </GridContainer>
      <Divider variant="middle"  />
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title1}>Why Customers Enjoy ADStick</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
          <div className={classes.infoArea}>
              <div className={classes.iconWrapper}>
                <img src={connect} />
                <br></br>
              </div>
              <div className={classes.descriptionWrapper}>
                <h4 className={classes.title2}>Connected Screens</h4>
                <p className={classes.description2}>Reach your audience everywhere they go,with Digital Media Types.</p>
              </div>
            </div>
          </GridItem>
          <Divider orientation="vertical" flexItem  />
          <GridItem xs={12} sm={12} md={3}>
            <div className={classes.infoArea}>
              <div className={classes.iconWrapper}>
                <img src={time} />
                <br></br>
              </div>
              <div className={classes.descriptionWrapper}>
                <h4 className={classes.title2}>Realtime content</h4>
                <p className={classes.description2}>Integrate your campaign with real time data & events using our dynamic content technology</p>
              </div>
            </div>
          </GridItem>
          <Divider orientation="vertical" flexItem  />
          <GridItem xs={12} sm={12} md={4}>
          <div className={classes.infoArea}>
              <div className={classes.iconWrapper}>
                <img src={target} />
                <br></br>
              </div>
              <div className={classes.descriptionWrapper}>
                <h4 className={classes.title2}>Geo-Targeting</h4>
                <p className={classes.description2}>choose target locations and relevant time slots to display your Advertiseing content. </p>
              </div>
            </div>
          </GridItem>
        </GridContainer>
        <Divider variant="middle"  />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
          <div className={classes.infoArea}>
              <div className={classes.iconWrapper}>
                <img src={trans} />
                <br></br>
              </div>
              <div className={classes.descriptionWrapper}>
                <h4 className={classes.title2}>Fully Transparent</h4>
                <p className={classes.description2}>Costs,Screens ,Campaign Content are always visible with real-time mapping with performance monitizing Dashboard.</p>
              </div>
            </div>
          </GridItem>
          <Divider orientation="vertical" flexItem  />
          <GridItem xs={12} sm={12} md={3}>
            <div className={classes.infoArea}>
              <div className={classes.iconWrapper}>
                <img src={direction} />
                <br></br>
              </div>
              <div className={classes.descriptionWrapper}>
                <h4 className={classes.title2}>Flexibility</h4>
                <p className={classes.description2}>Choose what you want, when you want, and how long you want your Digital Adverisment</p>
              </div>
            </div>
          </GridItem>
          <Divider orientation="vertical" flexItem  />
          <GridItem xs={12} sm={12} md={4}>
          <div className={classes.infoArea}>
              <div className={classes.iconWrapper}>
                <img src={heart} />
                <br></br>
              </div>
              <div className={classes.descriptionWrapper}>
                <h4 className={classes.title2}>Customer friendly</h4>
                <p className={classes.description2}>Dashboard made easier for users with View proof of play reports and easily track your campaign's performance.</p>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
