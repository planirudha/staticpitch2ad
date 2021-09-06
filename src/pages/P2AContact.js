import React from 'react'

import classNames from "classnames";

//Styling
import useStyles from "assets/jss/main/pages/AdstickStyle";
import CopyrightIcon from '@material-ui/icons/Copyright';
import SectionP2ALogin from "components/sections/SectionP2ALogin";
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

  
export default function P2AContact() {
    const classes = useStyles();
    return (
        <div>
           
          <div className={classNames( classes.mainRaised)}>
              <SectionP2ALogin />
              
              <div className={classes.contact}>
               
                CONTACT US <br></br>
                <PhoneIcon /> +918792247465 {" "}
                <MailIcon /> contact@pitch2ad.com
              </div>
              <div className={classes.foot}>
               
               <CopyrightIcon /> PITCH2AD 2021 - ALL RIGHTS RESERVED.
              </div> 
        </div> 
    </div>
    )
}
