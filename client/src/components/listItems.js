import React from 'react';
import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import House from '@material-ui/icons/House';

import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";


export const mainListItems = (
  <div>
    <List component="nav">
    <ListItem component={Link} to="/" button>      
      <ListItemIcon>
        <House />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem component={Link} to="/data" button>      
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="My Data" />
    </ListItem>
    <ListItem component={Link} to="/transfer" button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Transfer" />
    </ListItem>
    <ListItem component={Link} to="/approve" button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Approve" />
    </ListItem>
    <ListItem component={Link} to="/settings" button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
    </List>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Activity</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Recent Doc" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Stuff" />
    </ListItem>

  </div>
);
