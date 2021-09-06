
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import CustomizedMenu from './dropdown';
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          
          className={classes.navLink}
        >
         Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
      <CustomizedMenu />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#clients"
          color="transparent"
          
          className={classes.navLink}
        >
         Our Client
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/Partners"
          color="transparent"
          disabled
          className={classes.navLink}
        >
         Partners
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Company"
          buttonProps={{
            className: classes.navLink,
            color: "transparent" 
          }}
          // buttonIcon={Apps}
          dropdownList={[
            <Link to="/Company" className={classes.dropdownLink}>
              About Us
            </Link>,
            <Link to="/Careers" className={classes.dropdownLink}>
              Carrers 
            </Link>,
            <Link to="/Company" className={classes.dropdownLink}>
              Contact Us
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/Pitch2Adcommunity"
          className={ classes.pitch}
        >
         Pitch2Ad Connect
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/Adstick"
          className={ classes.pitch1}
        >
         Adstick Ad
        </Button>
      </ListItem>
    </List>
  ); 
}
