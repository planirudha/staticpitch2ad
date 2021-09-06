import React from 'react'

import classNames from "classnames";

//Styling
import useStyles from "assets/jss/main/sections/bodystyle";

import CopyrightIcon from '@material-ui/icons/Copyright';
import Container from '@material-ui/core/Container';

import SectionCareer from 'components/sections/SectionCareer';

import Carousel from 'react-material-ui-carousel';
import Image from 'material-ui-image';


  
export default function Careers() {
    const classes = useStyles();


    var items = [
      {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
          url: "https://source.unsplash.com/random"
      }
  ]


    
    return (
        <div>
             <Container maxWidth="xl">
            <Carousel>
            {
                items.map( item => 
                // <Item item={item} />,
                <Image aspectRatio={(3/1)} src={item.url} />
                )
            }
            </Carousel>
            </Container> 
          <div className={classNames( classes.mainRaised)}>
              <SectionCareer career="career" />
               <div className={classes.foot}>
               
               <CopyrightIcon /> PITCH2AD 2020 - ALL RIGHTS RESERVED.
              </div> 
        </div> 
        
        
    </div>
    )
}
