import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Switch,
  Avatar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { ColorModeContext } from "../Contexts/ThemeContext";
import { LogoIcon } from "./Icons";
import MarketSlider from "./MarketSlider";

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: "width 0.3s",
    width: (props: { isSidebarMinimized: boolean }) =>
      props.isSidebarMinimized ? `calc(100% - 5%)` : `calc(100% - 15%)`,
    marginLeft: (props: { isSidebarMinimized: boolean }) =>
      props.isSidebarMinimized ? "60px" : "15%",
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "#f2f2f2",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    marginBottom: "-10px",
  },
  title: {
    flexGrow: 1,
  },
  toggleContainer: {
    display: "flex",
    alignItems: "center",
  },
}));

interface TopBarProps {
  toggleSidebar: () => void;
  isSidebarMinimized: boolean;
}

const TopBar: React.FC<TopBarProps> = ({
  toggleSidebar,
  isSidebarMinimized,
}) => {
  const classes = useStyles({ isSidebarMinimized });
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className="top-bar">
        <div className="menu-left">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar} // Toggle sidebar on click
          >
            <MenuIcon />
          </IconButton>

          <img className={classes.logo} src="/logo.png" width={130} />
        </div>

        <div className="right-menu">
          {/* <div className="right-menu-markets">
            <div className="right-menu-item">
              <img src="/favicon.png" width={20} />
              <Typography>0.0567 ACA</Typography>
            </div>
            <div className="right-menu-item">
              <img src="/bitcoin.png" width={25} />
              <Typography>0.0567 BTC</Typography>
            </div>
            <div className="right-menu-item">
              <img src="/tather.png" width={20} />
              <Typography>0.0567 USD</Typography>
            </div>
          </div> */}
          <MarketSlider/>
          <div className="right-menu-profile">
            <Typography>0xvd...edefe</Typography>
            <Avatar />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
