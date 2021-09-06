import React from 'react'

import classNames from "classnames";

import useStyles from "assets/jss/main/sections/bodystyle1";
import image from "assets/img/logo.jpg"


export default function Home() {
    const classes = useStyles();

    return (
        <div className={classNames(classes.main ,classes.mainRaised)}>
            
            <div className={classes.brand}>
                        <img
                            src={image}
                            className={
                            classes.imgRaised +
                            " " +
                            classes.imgRounded 
                            }
                        />
                        <h3 className={classes.subtitle}>
                        Advertisments Coming Soon
                        </h3>
            </div>       
        </div>    
    )
}
