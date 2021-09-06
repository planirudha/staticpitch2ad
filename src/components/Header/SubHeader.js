import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import FilterListSharpIcon from "@material-ui/icons/FilterListSharp";
import SortSharpIcon from "@material-ui/icons/SortSharp";
import MoreIcon from "@material-ui/icons/MoreVert";
import useStyles from "assets/jss/material-kit-react/components/SubheaderStyle.js";

export default function SubHeader(props) {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={props.sortByOpenChecked}>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <SortSharpIcon />
        </IconButton>
        <p>SortBy</p>
      </MenuItem>

      <MenuItem onClick={props.filterOpenChecked}>
        <IconButton aria-label="show 11 new cart" color="inherit">
          <FilterListSharpIcon />
        </IconButton>
        <p>Filter</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div >
        <AppBar color="inherit" position="relative">
          <Toolbar >
        <Button className={classes.viewbutton} >
        <Typography
            onClick={props.toggleChecked}
          >
                {props.label}   
                </Typography>
            </Button>

          <div className={classes.sectionMobile}>
            <Typography
              className={classes.head}
              variant="h6"
              noWrap
              type="button"
              onClick={props.toggleChecked}
            >
              {props.label}
            </Typography>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              color="inherit"
              variant="h6"
              onClick={props.sortByOpenChecked}
            >
              <SortSharpIcon variant="h6" />
              <Typography variant="h6">Sortby</Typography>
            </IconButton>

            <IconButton
              color="inherit"
              variant="h6"
              onClick={props.filterOpenChecked}
            >
              <FilterListSharpIcon variant="h6" />
              <Typography variant="h6"> Filter</Typography>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <div className={classes.grow} />

            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      
      {renderMobileMenu}
    </div>
  );
}