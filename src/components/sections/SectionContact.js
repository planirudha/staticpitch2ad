import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.js";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import styles from "assets/jss/main/sections/careerncontactStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div id="contact" className={classes.title}>
            <h3>CONTACT US</h3>
          </div>
          <div className={classes.title}>
            <h3>
              <small></small>
            </h3>
          </div>
          
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
            <div className={classes.contact}>
            <h4 className={classes.contact1}>
                Contact Us
                </h4>
              <div className={classes.contactleft}><PhoneIcon /> +918792247465</div>
              <div className={classes.contactleft}><MailIcon /> contact@pitch2ad.com</div>
              <h4 className={classes.contact1}>
                Follow Us
                </h4>
                <div>
              <Tooltip
                id="instagram-twitter"
                title="Follow us on twitter"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  href="https://twitter.com/AdPitch2"
                  target="_blank"
                  color="transparent"
                  className={classes.navLink}
                >
                  <TwitterIcon/>
                </Button>
              </Tooltip>
              <Tooltip
                id="instagram-facebook"
                title="Follow us on facebook"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://www.facebook.com/pitch2ad"
                  target="_blank"
                  className={classes.navLink}
                >
                  <FacebookIcon/>
                </Button>
              </Tooltip>
              <Tooltip
                id="instagram-tooltip"
                title="Follow us on instagram"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://www.instagram.com/pitch2ad/"
                  target="_blank"
                  className={classes.navLink}
                >
                  <InstagramIcon />
                </Button>
              </Tooltip>
              </div>
            </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={6}>
            <div className={classes.sectionDesktop}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf8oQN0MPpDGw_Ntgy_pa9tyVA-8aVE1buxYqY7YWGPTmtf0w/viewform?embedded=true" width="660" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            <div className={classes.sectionMobile} >
            <div className={classes.applydiv}><Button href="https://docs.google.com/forms/d/e/1FAIpQLSf8oQN0MPpDGw_Ntgy_pa9tyVA-8aVE1buxYqY7YWGPTmtf0w/viewform?usp=sf_link" variant="outlined"  className={classes.apply} >Contact Form</Button></div>
            </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
    
  );
}
