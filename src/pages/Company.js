import React from 'react'

import classNames from "classnames";

//Styling
import useStyles from "assets/jss/main/pages/CompanyStyle";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import CardMedia from '@material-ui/core/CardMedia';

import image from "assets/img/background.jpg";
import CopyrightIcon from '@material-ui/icons/Copyright';
import Button from '@material-ui/core/Button';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import SectionCareer from 'components/sections/SectionCareer';
import SectionContact from 'components/sections/SectionContact';
import Register from 'components/sections/Register';


export default function Company() {
  const classes = useStyles();
  return (
    
      <div className={classes.back }>
          
          <img src={image} className={classes.imgRaised }/>
          <div className={classNames( classes.mainRaised)}>
          <h4  id= "about" className={classes.title}>About Us </h4>
                        <GridContainer>
                                <GridItem>
                                <div className={classes.about}>
                                                  <p>Pitch2Ad, An advertising Company based out of Bangalore, India. 
                                                  At Pitch2ad, our mission is to provide an Ultimate Advertising platform for Advertisers, publishers and content creators/designers
                                    to enhance the easy to pitch an Advertisement in a single platform by delivering superior, cutting-edge quality with exceptional customer service.</p>
                                    <p>
                                    Choose what you want, when you want, and how long you want to Advertise for! Furthermore, we deliver Analysis, monetize and leverage alarms on Advertisements.
                                    Our entire process is done completely through our website
                                    We provide an end-2-end service for a product/brand to go market Ready.</p>
                                <div className={classes.applydiv}><Button href="#contact" variant="outlined"  className={classes.apply} >Get in Touch</Button></div>
                                </div>
                              </GridItem>
                              </GridContainer>
            <Register />
            <br></br>
              <SectionCareer career="career" />
              <SectionContact contact="contact" />
              <div className={classes.foot}>
              <CopyrightIcon /> PITCH2AD 2020 - ALL RIGHTS RESERVED.
              </div> 
        </div>
  </div>
  )
}
