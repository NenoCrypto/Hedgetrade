import React, { useState } from 'react';
import { ChevronUp } from './Icons/ChevronUp';
import { ChevronDown } from './Icons/ChevronDown';
import { MenuConfig } from '../configs/MenuConfig';
import { List, ListItem, ListItemText, Collapse, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sidebarMenu: {
    // width: 250,
    color:'#f2f2f2',
    background: 'linear-gradient(to bottom right, #6bcff9, #f52aca)',
    padding:'10px',
    margin:'10px',
    borderRadius:'10px',
    height:"90vh"

  },
  menuHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding: theme.spacing(1, 2),
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  submenu: {
    paddingLeft: theme.spacing(10),
  },
  submenuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 0),
  },
  link: {
    textDecoration: 'none', // Remove underline from links
    color: theme.palette.text.primary, // Use primary text color for links
    width: '100%', // Ensure the link takes up the full width of the ListItem
  },
}));

export const SideMenu: React.FC = () => {
  const classes = useStyles();
  const [subMenuOpen, setSubMenuOpen] = useState<{ [key: string]: boolean }>({});

  const handleSubMenuToggle = (submenu: string) => {
    setSubMenuOpen((prevState) => ({
      ...prevState,
      [submenu]: !prevState[submenu],
    }));
  };

  return (
    <div className={classes.sidebarMenu}>
      <List>
        {MenuConfig.map((menuItem, index) => (
          <div key={index}>
            <ListItem button className={classes.menuHeader}>
              <menuItem.icon/>
              <ListItemText primary={menuItem.title} />
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );
};
