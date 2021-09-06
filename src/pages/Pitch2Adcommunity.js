import React from 'react'

import classNames from "classnames";

//Styling
import useStyles from "assets/jss/main/pages/Pitch2adcommunitystyle";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import outdoor from "assets/img/outdoorr.png";
import DigitalAd from "assets/img/da.png";
import DigitalMar from "assets/img/dm1r.png";
import EventAd from "assets/img/devr.png";
import Influences from "assets/img/ia1r.png";
import freelancer from "assets/img/freer.png";

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";

import CopyrightIcon from '@material-ui/icons/Copyright';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Register from 'components/sections/Register';


export default function Pitch2Adcommunity() {
  const classes = useStyles();
  return (
    
      <div className={classes.back }>
          <Header
        rightLinks={<HeaderLinks about="about" contact="contact" career="career" />}
        fixed
        
        />
          
          <div className={classNames( classes.mainRaised)}>
          <h4  id= "about" className={classes.title}>Join Us </h4>
                        <GridContainer>
                                <GridItem>
                                <div className={classes.about}>
                                                  <p>Reach Out to Millions of Customers at Pitch2Ad.</p>
                                                    
                                                  <p> List YourSelf at Pitch2Ad Community to reach out to pionier Advetisers.</p>
                                    
                                </div>
                              </GridItem>
                              </GridContainer>
                              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
            <Card className={classes.servicebutton}>
                <CardActionArea href="https://docs.google.com/forms/d/e/1FAIpQLSf6NHWU3oJIypB8iLbayaxiQohx7qg_PYTTI0qL3f8_EIZWzA/viewform?usp=sf_link">
                    <img className={classes.img} alt="complex" src={outdoor} />
                    <br></br>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        PUBLISHERS AND ADVERTISING AGENCY
                        </Typography>
                      </CardContent>
                </CardActionArea>
              </Card>
              <Card className={classes.servicebutton}>
                <CardActionArea href="https://docs.google.com/forms/d/e/1FAIpQLSf6NHWU3oJIypB8iLbayaxiQohx7qg_PYTTI0qL3f8_EIZWzA/viewform?usp=sf_link">
                    <img className={classes.img} alt="complex" src={DigitalAd} />
                    <br></br>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        DIGITAL MARKETING COMMUNITY
                        </Typography>
                      </CardContent>
                </CardActionArea>
              </Card>
              <Card className={classes.servicebutton}>
                <CardActionArea href="https://docs.google.com/forms/d/e/1FAIpQLSf6NHWU3oJIypB8iLbayaxiQohx7qg_PYTTI0qL3f8_EIZWzA/viewform?usp=sf_link">
                    <img className={classes.img} alt="complex" src={DigitalMar} />
                    <br></br>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        EVENT AGENCY
                        </Typography>
                      </CardContent>
                </CardActionArea>
              </Card>
              <Card className={classes.servicebutton}>
                <CardActionArea href="https://docs.google.com/forms/d/e/1FAIpQLSf6NHWU3oJIypB8iLbayaxiQohx7qg_PYTTI0qL3f8_EIZWzA/viewform?usp=sf_link">
                    <img className={classes.img} alt="complex" src={freelancer} />
                    <br></br>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        FREELANCER COMMUNITY
                        </Typography>
                      </CardContent>
                </CardActionArea>
              </Card>
              <Card className={classes.servicebutton}>
                <CardActionArea href="https://docs.google.com/forms/d/e/1FAIpQLSf6NHWU3oJIypB8iLbayaxiQohx7qg_PYTTI0qL3f8_EIZWzA/viewform?usp=sf_link">
                    <img className={classes.img} alt="complex" src={Influences} />
                    <br></br>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        INFULENCERS
                        </Typography>
                      </CardContent>
                </CardActionArea>
              </Card>
              <Card className={classes.servicebutton}>
                <CardActionArea href="https://docs.google.com/forms/d/e/1FAIpQLSf6NHWU3oJIypB8iLbayaxiQohx7qg_PYTTI0qL3f8_EIZWzA/viewform?usp=sf_link">
                    <img className={classes.img} alt="complex" src={EventAd} />
                    <br></br>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          DEVELOPMENT COMMUNITY 
                        </Typography>
                      </CardContent>
                </CardActionArea>
              </Card>
              
              </Grid>
            <Register />
            <br></br>
              <div className={classes.foot}>
              <CopyrightIcon /> PITCH2AD 2020 - ALL RIGHTS RESERVED.
              </div> 
        </div>
        {/* </div> */}
  </div>
  )
}
