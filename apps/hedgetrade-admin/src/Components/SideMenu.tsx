import React, { useContext } from 'react';
import { MenuConfig } from '../configs/MenuConfig';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
// import { ColorModeContext } from '../Contexts/ThemeContext'; // Import the context

interface SideMenuProps {
  isMinimized: boolean;
}

const useStyles = makeStyles((theme) => ({
  sidebarMenu: {
    color: '#f2f2f2',
    background: 'linear-gradient(to bottom right, #6bcff9, #f52aca)',                   // Light mode background
    padding: '10px',
    margin: '10px 0',
    borderRadius: '10px',
    height: '100vh', // Full height
    position: 'fixed', // Fixed position to ensure it's always visible
    top: 0,
    left: 0,
    width: (props: { isMinimized: boolean }) => (props.isMinimized ? '60px' : '200px'), // Adjust width based on minimized state
    overflowY: 'auto', // Add vertical scrolling if content overflows
    transition: 'width 0.3s', // Smooth transition
  },
  menuHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: (props: { isMinimized: boolean }) => (props.isMinimized ? 'center' : 'space-around'), // Adjust alignment based on state
    cursor: 'pointer',
    padding: theme.spacing(1, 2),
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    fontSize: '10px',
  },
  listItemText: {
    marginLeft: theme.spacing(2), // Spacing between icon and text
    display: (props: { isMinimized: boolean }) => (props.isMinimized ? 'none' : 'inline'), // Hide text when minimized
  },
}));

export const SideMenu: React.FC<SideMenuProps> = ({ isMinimized }) => {
  const classes = useStyles({ isMinimized });
  // const { mode } = useContext(ColorModeContext); // Access the mode from context

  return (
    <div className={classes.sidebarMenu}>
      <List>
        {MenuConfig.map((menuItem, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            to={menuItem.link}
            className={classes.menuHeader}
          >
            <ListItemIcon style={{ color: 'inherit' }}>
              <menuItem.icon />
            </ListItemIcon>
            <ListItemText primary={menuItem.title} className={classes.listItemText} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
