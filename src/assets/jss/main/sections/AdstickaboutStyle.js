import { title } from "assets/jss/material-kit-react.js";
import { container } from "assets/jss/material-kit-react.js";

const AdstickaboutStyle=((theme) => ({
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    fontSize: "50px",
    lineHeight: "1.5em",
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "left"
  },
  title1: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    fontSize: "50px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
    fontSize: "23px",
    color: "#999",
    textAlign: "left"
  },
  description1: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
    fontSize: "23px",
    color: "#999"
  },
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px"
  },
  iconWrapper: {
    float: "center",
    marginTop: "24px",
    marginRight: "10px",
    marginBottom: "20px"
  },
  icon: {
    width: "36px",
    height: "36px"
  },
  descriptionWrapper: {
    color: "#999999",
    overflow: "hidden"
  },
  title2: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    fontSize: "30px",
    lineHeight: "1.5em",
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description2: {
    color: "#999999",
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "20px"
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
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
}));

export default AdstickaboutStyle;
