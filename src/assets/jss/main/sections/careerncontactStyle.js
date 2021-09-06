import { container } from "assets/jss/material-kit-react.js";
const careerncontactStyle=((theme) => ({
  container,
  textCenter: {
    textAlign: "center"
  },
  subhead: {
    margin: "0px",
    paddingTop: "0px",
    color: "#4284f5"
  },
  subhead1: {
    fontSize: "1.3rem",
    fontFamily: '"Roboto Slab", "Times New Roman", serif',
    textDecoration: "none",
    paddingBottom: "20px"
  },
  applydiv: {
    paddingTop: "50px"
  },
  apply: {
    color: "#4284f5",
    fontSize: "1.1rem",
  },
  section: {
    padding: "40px 0"
  },
  contact1: {
    color: "#4284f5"
  },
  contact: {
    paddingTop: "250px",
  },
  contactleft: {
  },
  title: {
    fontFamily: '"Roboto", sans-serif',
    fontSize: "2.0rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  foot: {
    backgroundColor: "black",
    color: "#fffffff",
    width: "100%",
    height: "20px"
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  applydiv: {
    padding: "50px"
  },
  apply: {
    color: "#4284f5",
    backgroundColor: "white",
    fontSize: "1.1rem",
  },
}));

export default careerncontactStyle;
