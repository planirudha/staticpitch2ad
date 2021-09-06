import { makeStyles } from "@material-ui/core/styles";

import { container } from "assets/jss/material-kit-react.js";

const useStyles = makeStyles((theme) => ({
    container,
    brand: {
      color: "#FFFFFF",
      textAlign: "left"
    },
    title: {
      fontSize: "3.0rem",
      margin: "20px",
      position: 'relative',
      fontFamily: '"Roboto", sans-serif',
    },
    subtitle: {
      fontSize: "1.313rem",
      maxWidth: "500px",
      margin: "10px 0 0",
      color: "#4284f5"
    },
    
    mainRaised: {
      margin: "-185% 1.9% 0px",
      background: "#FFFFFF",
      position: "absolute",
      width: "96%",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    about: {
      width: "80%",
      paddingLeft: "10%",
      fontSize: "1.3rem",
    },
    applydiv: {
      padding: "50px"
    },
    apply: {
      color: "#4284f5",
      fontSize: "1.1rem",
    },
    link: {
      textDecoration: "none"
    },
    textCenter: {
      textAlign: "center"
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    foot: {
      backgroundColor: "black",
      color: "white",
      width: "100%",
      height: "50px",
      paddingTop: "20px",
      fontSize: "1.2rem"
    },
  }));

  export default useStyles;