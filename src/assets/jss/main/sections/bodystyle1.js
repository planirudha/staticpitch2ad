import { makeStyles } from "@material-ui/core/styles";

import { container } from "assets/jss/material-kit-react.js";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    fontSize: "1.313rem",
    color: "#4284f5"
  },
    main: {
      background: "#FFFFFF",
      position: "Absolute",
      zIndex: "3"
    },
    mainRaised: {
      margin: "100px 10% 0px",
      background: "#FFFFFF",
      position: "Absolute",
      width: "80%",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    
  }));

  export default useStyles;