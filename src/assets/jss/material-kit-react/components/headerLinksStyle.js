import { defaultFont } from "assets/jss/material-kit-react.js";

import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

const headerLinksStyle = theme => ({
  list: {
    ...defaultFont,
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "#4284f5"
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5"
      }
    }
  },
  listItemText: {
    padding: "0 !important"
  },
  pitch: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: "white",
    borderColor: "#4284f5",
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
    "&:hover,&:focus": {
      color: "white",
      // background: "rgba(200, 200, 200, 0.2)"
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  },
  [theme.breakpoints.down("sm")]: {
    width: "calc(100% - 30px)",
    marginLeft: "15px",
    marginBottom: "8px",
    marginTop: "8px",
    textAlign: "left",
    "& > span:first-child": {
      justifyContent: "flex-start"
    }
  }
},
pitch1: {
  background: 'linear-gradient(45deg, #e65c00 30%, #ffa366 90%)',
  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: "white",
  marginLeft:"10px",
  borderColor: "#4284f5",
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
  "&:hover,&:focus": {
    color: "white",
    // background: "rgba(200, 200, 200, 0.2)"
    background: 'linear-gradient(45deg, #e65c00 30%, #ffa366 90%)',
          boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
},
[theme.breakpoints.down("sm")]: {
  width: "calc(100% - 30px)",
  marginLeft: "15px",
  marginBottom: "8px",
  marginTop: "8px",
  textAlign: "left",
  "& > span:first-child": {
    justifyContent: "flex-start"
  }
}
},
  navLink: {
    // color: "inherit",
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
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)"
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    }
  },
  notificationNavLink: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px"
  },
  registerNavLink: {
    top: "3px",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  navLinkActive: {
    color: "inherit",
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px"
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "0px"
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px"
    }
  },
  ...tooltip,
  marginRight5: {
    marginRight: "5px"
  }
});

export default headerLinksStyle;
