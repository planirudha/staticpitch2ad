import { makeStyles } from "@material-ui/core/styles";

import { container } from "assets/jss/material-kit-react.js";

const useStyles = makeStyles((theme) => ({
    
    mainRaised: {
      margin: "13.5% 1.9% 0px",
      background: "#FFFFFF",
      position: "absolute",
      width: "96%",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
  }));

  export default useStyles;