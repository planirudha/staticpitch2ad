import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Button from '@material-ui/core/Button';



import styles from "assets/jss/main/sections/careerncontactStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{textAlign: "left"}}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div id="career" className={classes.title} >
            <h2>Join Our Team</h2>
          </div>
          <div className={classes.title}>
            <h4>
              Welcome to Pitch2AD's careers page!
              <br></br>
              </h4>
              <h6><small className={classes.subhead}>If you are looking for a career at a fast-growing, dynamic advertising technology company, you have come to the right place!
              <br></br>We have the following positions available:
              </small>
            </h6>
          </div>
          <GridContainer>
            <GridItem >
              <div className={classes.subhead1}>Applications now open for the below roles.</div>
              <Divider />
              <div style={{fontFamily: "Montserrat, sans-serif"}}>
              <Typography variant="h5" gutterBottom>
                CHIEF MARKETING OFFICER
                </Typography>
              
              <Typography variant="h6" gutterBottom>
              Marketing & Sales Department
              <br></br>
              </Typography>
              <div style={{fontFamily: "Montserrat, sans-serif"}}><Link href="/Company" >
              <Typography variant="h6" gutterBottom>
              Job Description
              </Typography>
              </Link>
              </div>
              
              <div style={{fontFamily: "Montserrat, sans-serif" }}>
              Bengaluru|<Button href="https://docs.google.com/forms/d/e/1FAIpQLScn0DZCe9MN6TNLB28cjZQCeVwoT3u7u1V-xzxu3rAT6EbD6g/viewform?usp=sf_link" style={{color: "red"}}>Apply Now</Button>
              </div>
              </div>
              
              <Divider />
              <div style={{fontFamily: "Montserrat, sans-serif"}}>
              <Typography variant="h5" gutterBottom>
                REGIONAL VP OF SALES
                </Typography>
              
              <Typography variant="h6" gutterBottom>
              Marketing & Sales Department
              <br></br>
              </Typography>
              <div style={{fontFamily: "Montserrat, sans-serif"}}><Link href="/Company" >
              <Typography variant="h6" gutterBottom>
              Job Description
              </Typography>
              </Link>
              </div>
              <div style={{fontFamily: "Montserrat, sans-serif" }}>
              Bengaluru|<Button href="https://docs.google.com/forms/d/e/1FAIpQLScn0DZCe9MN6TNLB28cjZQCeVwoT3u7u1V-xzxu3rAT6EbD6g/viewform?usp=sf_link" style={{color: "red"}}>Apply Now</Button>
              </div>
              </div>
              <Divider />
              <div style={{fontFamily: "Montserrat, sans-serif"}}>
              <Typography variant="h5" gutterBottom>
              CLOUD SOLUTION ARCHITECT
                </Typography>
              
              <Typography variant="h6" gutterBottom>
              Software Department
              <br></br>
              </Typography>
              <div style={{fontFamily: "Montserrat, sans-serif"}}><Link href="/Company" >
              <Typography variant="h6" gutterBottom>
              Job Description
              </Typography>
              </Link>
              </div>
              
              <div style={{fontFamily: "Montserrat, sans-serif" }}>
              Bengaluru|<Button href="https://docs.google.com/forms/d/e/1FAIpQLScn0DZCe9MN6TNLB28cjZQCeVwoT3u7u1V-xzxu3rAT6EbD6g/viewform?usp=sf_link" style={{color: "red"}}>Apply Now</Button>
              </div>
              </div>
              <Divider />
              <div style={{fontFamily: "Montserrat, sans-serif"}}>
              <Typography variant="h5" gutterBottom>
              REACT DEVELOPER 
                </Typography>
              
              <Typography variant="h6" gutterBottom>
              Software Department
              <br></br>
              </Typography>
              <div style={{fontFamily: "Montserrat, sans-serif"}}><Link href="/Company" >
              <Typography variant="h6" gutterBottom>
              Job Description
              </Typography>
              </Link>
              </div>
              
              <div style={{fontFamily: "Montserrat, sans-serif" }}>
              Bengaluru|<Button href="https://docs.google.com/forms/d/e/1FAIpQLScn0DZCe9MN6TNLB28cjZQCeVwoT3u7u1V-xzxu3rAT6EbD6g/viewform?usp=sf_link" style={{color: "red"}}>Apply Now</Button>
              </div>
              </div>
              <Divider />
              </GridItem>
          </GridContainer> 
          
        </div>
      </div>
    </div>
  );
}
