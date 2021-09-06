import React from 'react'

import classNames from "classnames";

//Styling
import useStyles from "assets/jss/main/sections/bodystyle";
import outdoor from "assets/img/outdoor.png";
import DigitalAd from "assets/img/da.png";
import DigitalMar from "assets/img/dm1r.png";
import EventAd from "assets/img/ea1.png";
import Influences from "assets/img/ia1.png";
import Typography from "@material-ui/core/Typography";
import CopyrightIcon from '@material-ui/icons/Copyright';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';


import Carousel from 'react-material-ui-carousel';
import Image from 'material-ui-image';
import ResponsivePlayer from "components/sections/ResponsivePlayer.js"
import Clients from "components/sections/Clients.js"


  
export default function Home() {
    const classes = useStyles();


    var items = [
      {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
          url: "https://images.unsplash.com/photo-1557858310-9052820906f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      },
      {
          name: "Random Name #2",
          description: "Hello World!",
          url: "https://images.unsplash.com/photo-1547452912-b43d586aed93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      },
      {
        name: "Random Name #3",
        description: "Hello World!",
        url: "https://images.unsplash.com/photo-1529218402470-5dec8fea0761?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      },
      {
        name: "Random Name #4",
        description: "Hello World!",
        url: "https://images.unsplash.com/photo-1593363725982-860117ff8b78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      }
  ]


    
    return (
        <div>
         
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
             <Container maxWidth="xl">

            <Carousel>
            {
                items.map( item => 
                <Image aspectRatio={(3/1)} src={item.url} />
                )
            }
            </Carousel>
            </Container> 
          <div className={classNames( classes.mainRaised)}>
          <h4  id= "services" className={classes.title}>OUR SERVICES</h4>
                       
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
            <Card className={classes.servicebutton}>
                <CardActionArea href="/P2AContact">
                    <img className={classes.img} alt="complex" src={outdoor} />
                    <br></br>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        Outdoor Advertisment
                        </Typography>
                      </CardContent>
                </CardActionArea>
              </Card>
              <Card className={classes.servicebutton}>
                <CardActionArea href="/P2AContact">
                    <img className={classes.img} alt="complex" src={DigitalAd} />
                    <br></br>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        Digital Marketing
                        </Typography>
                      </CardContent>
                </CardActionArea>
              </Card>
              <Card className={classes.servicebutton}>
                <CardActionArea href="/P2AContact">
                    <img className={classes.img} alt="complex" src={DigitalMar} />
                    <br></br>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Digital Advertisment
                        </Typography>
                      </CardContent>
                </CardActionArea>
              </Card>
              <Card className={classes.servicebutton}>
                <CardActionArea href="/P2AContact">
                    <img className={classes.img} alt="complex" src={EventAd} />
                    <br></br>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Event Advertisment
                        </Typography>
                      </CardContent>
                </CardActionArea>
              </Card>
              <Card className={classes.servicebutton}>
                <CardActionArea href="/P2AContact">
                    <img className={classes.img} alt="complex" src={Influences} />
                    <br></br>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Influences
                        </Typography>
                      </CardContent>
                </CardActionArea>
              </Card>
              </Grid>
            <br></br>
            
               <h4  id= "aboutvid" className={classes.title}>ABOUT PITCH2AD</h4>
               <ResponsivePlayer />
               <h4  id= "clients" style={{marginTop:"-6%"}} className={classes.title}>OUR CLIENTS</h4>
               <Clients />
               
               <div className={classes.foot}>
               
               <CopyrightIcon /> PITCH2AD 2021 - ALL RIGHTS RESERVED.
              </div> 
        </div> 
        
        
    </div>
    )
}
