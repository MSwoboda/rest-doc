import React, {useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import Button from '@material-ui/core/Button';
import Data from "../pages/data";
import Home from "../pages/home";
import Settings from "../pages/settings";
import Transfer from "../pages/transfer";
import Approve from "../pages/approve";

import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

import 'whatwg-fetch';
import {
  getFromStorage,
  setInStorage,
  
} from '../utils/auth';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
 
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: 0,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {

  let history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [firstName, setfirstName] = React.useState('');
  const [lastName, setlastName] = React.useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

if (!getFromStorage('the_main_app').token) {
  history.push("/");
}


useEffect(() => {
  const obj = getFromStorage('the_main_app');
  const {token} = obj;

  fetch('../api/data/user?token=' + token)
    .then( res => res.json() )
    .then(json => {
     
      if (json.success) {
        setfirstName(json.body[0].firstName)
        setlastName(json.body[0].lastName)

      }
    });
}, []);

const logOut = () =>{

const obj = getFromStorage('the_main_app');

if (obj && obj.token) {
  const {token} = obj;

  fetch('/api/account/logout?token='+token)
    .then(res => res.json())
    .then(json => {
      console.log(json.message);

      if (json.success) {
        setInStorage('the_main_app',{token:''});
        history.push("/");
      }

    });
}

}
  return (
      <div className={classes.root}>
        <CssBaseline />

        <AppBar  className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              {firstName}  {lastName}
          </Typography>

          <Button variant="contained" color="ternary" onClick ={()=> logOut()}>Logout</Button>

          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>


        <main className={classes.content}>

          <div className={classes.appBarSpacer} />
          <Route exact path="/home/data" component={Data} />
          <Route exact path="/home/settings" component={Settings} />
          <Route exact path="/home/transfer" component={Transfer} />
          <Route exact path="/home/upprove" component={Approve} />
          <Route exact path="/home" component={Home} />

        </main>
        <div>
        </div>
      </div>
  );
}
