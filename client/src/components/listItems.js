import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CreateIcon from '@material-ui/icons/Create';
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
      <ListItem component={Link} to="/home" button>      
        <ListItemIcon>
          <House />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem component={Link} to="/home/data" button>      
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="My Data" />
      </ListItem>
      <ListItem component={Link} to="/home/transfer" button>
        <ListItemIcon>
          <CreateIcon />
        </ListItemIcon>
        <ListItemText primary="Signature" />
      </ListItem>
      {/* {/* <ListItem component={Link} to="/home/approve" button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Approve" />
      </ListItem> */}
      <ListItem component={Link} to="/home/settings" button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Templates" />
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
      <ListItemText primary="Recent" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Frequently Used" />
    </ListItem>

  </div>
);
