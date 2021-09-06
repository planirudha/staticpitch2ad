import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const styles = (theme) => ({
  popoverPaper: {
    // width: '90%',
    width: '100%',
    height: '70%',
    maxWidth: 'unset',
    maxHeight: 'unset',
    // left: '5% !important',
  },
  root: {
      padding: "15px",
      width: "100%",
      display: "flex",
      boxSizing: "'border-box'",
      flexWrap: "none"
    
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "16px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
  },
  title: {
    alignContent: "center",
    color: "#4284f5"
  },
  catlog: {
      justifyContent: "'center'",
      padding: "10px",
      margin: theme.spacing(2),
      // width: "15%"
      // flex: "1"
  }
});

const useStyles = makeStyles(styles);

const CustomizedMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  

  const handleClick = (event) => {
    console.log('currect target', event.currentTarget);
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }
  const classes = useStyles();
  return (
    <div>
      <Button
        color="transparent"
        target="_blank"
        className={classes.navLink}
        onClick={handleClick}
      >
        SERVICES
      </Button>
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal:"left" }}
        // transformOrigin={{ vertical: 'top' }}
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          <Grid  justifyContent="flex-start" className={classes.root} xs={12}>
            {/* <div className={classes.catlog} > */}
            <Grid item xs={3} className={classes.catlog}>
                
                    <h4 className={classes.title}>Outdoor Advertisments</h4>
                    <Divider />
                    <Link href="/P2AContact" >
                      BillBoard
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Theater Ad
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Lift Ad
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      TV Ad
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Newspaper Ad
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Magazine Ad
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Mobile Displays Ad
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Airport Ad
                    </Link><br></br>
            </Grid>
            {/* </div> */}
            <Divider orientation="vertical"  flexItem />
            {/* <div className={classes.catlog}> */}
            <Grid item xs={3} className={classes.catlog}>
                
                    <h4 className={classes.title}>Digital Marketing</h4>
                    <Divider />
                    {/* <a href="/Company">compant</a> */}
                    {/* <Button href="/" color="primary">Primary</Button> */}
                    <Link href="/P2AContact" >
                      Search Engine Optimization
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Social Media Optimization
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Lead Generation Campaigns
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Content Writing Services
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Email marketing Services
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Branding
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Blog
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      PPC(Pay-per-click)
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      SMS
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Phone Calls
                    </Link><br></br>
            </Grid>
            {/* </div> */}
            <Divider orientation="vertical" flexItem />
            {/* <div className={classes.catlog}> */}
            <Grid item xs={3} className={classes.catlog}>
                
                    <h4 className={classes.title}>Digital Advertisments</h4>
                    <Divider />
                    <Link href="/P2AContact" >
                      Search Ad
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Display Ad
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Social Ad
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Google Shopping ads
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Gmail sponsored Promotions
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Instagram Ads
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Facebook Ads
                    </Link><br></br>

                
            </Grid>
            {/* </div> */}
            <Divider orientation="vertical" flexItem />
            {/* <div className={classes.catlog}> */}
            <Grid item xs={3} className={classes.catlog}>
                
                    <h4 className={classes.title}>Event Advertisments</h4>
                    <Divider />
                    <Link href="/P2AContact" >
                      Schools and Colleges
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Musical Festival Eve
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Sports Event
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Expos/Exhibition
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Sports Event
                    </Link><br></br>

            </Grid>
            {/* </div> */}
            <Divider orientation="vertical" flexItem />
            {/* <div className={classes.catlog}> */}
            <Grid item xs={3} className={classes.catlog}>
                
                    <h4 className={classes.title}>Influences</h4>
                    <Divider />
                    <Link href="/P2AContact" >
                      Sports Influences
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Film Influences
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Travel Influences
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Youtube Influences
                    </Link><br></br>
                    <Link href="/P2AContact" >
                      Instagram Influences
                    </Link><br></br>
            </Grid>
            {/* </div> */}
            
          </Grid>
      </Menu>
    </div>
  );
  }

export default (CustomizedMenu);