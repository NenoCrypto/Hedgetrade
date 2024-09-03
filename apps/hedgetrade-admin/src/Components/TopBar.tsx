import React, { useContext } from "react";
import { AppBar, Toolbar, IconButton, Typography, Switch, Avatar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { ColorModeContext } from "../Contexts/ThemeContext";
import { LogoIcon } from "./Icons";

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: "width 0.3s",
    width: (props: { isSidebarMinimized: boolean }) =>
      props.isSidebarMinimized ? `calc(100% - 60px)` : `calc(100% - 200px)`, 
    marginLeft: (props: { isSidebarMinimized: boolean }) =>
      props.isSidebarMinimized ? "60px" : "200px",
    backgroundColor:"transparent",
    boxShadow:'none',
    color:'#f2f2f2'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toggleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));

interface TopBarProps {
  toggleSidebar: () => void;
  isSidebarMinimized: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ toggleSidebar, isSidebarMinimized }) => {
  const classes = useStyles({ isSidebarMinimized });
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar position="fixed"  className={classes.appBar}>
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

        <img src="/logo.png" width={150}/>
      </div>
       

        {/* <LogoIcon/> */}
        {/* <div className={classes.toggleContainer}> */}
          {/* <Typography variant="body2">Light</Typography>
          <Switch
            checked={colorMode.mode === 'dark'}
            onChange={colorMode.toggleColorMode}
            color="default"
          />
          <Typography variant="body2">Dark</Typography> */}
        {/* </div> */}
        <div className="right-menu" >
                <img src="/aca.png" width={20}></img>
                <Avatar/>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

