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
    video: {
      position: 'relative',
      paddingtop: "56.25%"
      
    },
    reactplayer: {
      position: 'absolute',
      top: '0',
      left: '0',
    },
    subtitle: {
      fontSize: "1.313rem",
      maxWidth: "500px",
      margin: "10px 0 0",
      color: "#4284f5"
    },
    main: {
      background: "#FFFFFF",
      position: "Absolute",
      zIndex: "3"
    },
    mainRaised: {
      margin: "-2.5% 1.9% 0px",
      background: "#FFFFFF",
      position: "Absolute",
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
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
      color: "#4284f5"
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
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
    image: {
      width: 128,
      height: 128,
    },
    img: {
      width: 128,
      height: 128,
      paddingTop: 10
    },
    servicebutton: {
      maxWidth: 170,
    },
    
  }));

  export default useStyles;