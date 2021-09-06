import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Button from '@material-ui/core/Button';


import styles from "assets/jss/main/sections/careerncontactStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div id="career" className={classes.title}>
            <h3>Register</h3>
          </div>
          <div className={classes.title}>
            <h4>
              <small className={classes.subhead}>Want to be our Partnered Publisher, Ad Agency and Content Creator/Designer.</small>
            </h4>
          </div>
          <GridContainer>
            <GridItem >
              <div className={classes.subhead1}>Applications now open for the EarlyBird Membership.</div>
              
              <div className={classes.applydiv}><Button href="https://docs.google.com/forms/d/e/1FAIpQLSf6NHWU3oJIypB8iLbayaxiQohx7qg_PYTTI0qL3f8_EIZWzA/viewform?usp=sf_link" variant="outlined" className={classes.apply}>Apply Now</Button></div>
            </GridItem>
            {/* <GridItem xs={12} sm={12} md={12} lg={6}>
             </GridItem> */}
          </GridContainer> 
          
        </div>
      </div>
    </div>
  );
}
