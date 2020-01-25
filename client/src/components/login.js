import Avatar from '@material-ui/core/Avatar';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import 'whatwg-fetch';
import {
  getFromStorage,
  setInStorage,
} from '../utils/auth';

import {
  BrowserRouter as Router,
  Redirect,
  useHistory
} from "react-router-dom";



const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1153&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }, tabs: {
    width: '100%'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Rest Docs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Login() {


  let history = useHistory();

  const classes = useStyles();


  const [values, setValues] = useState({

    firstName: '',
    lastName: '',
    password: '',
    email: '',
    token: '',
    isLogged: false
  });

  const handleChanges = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  useEffect(() => {
    const obj = getFromStorage('the_main_app');
    const {token} = obj;

    if (token) {
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            console.log('loggedin');

            history.push("/home")


          }
        });
    } else {
      console.log('failed');

    }

  });

  const handleLogIn = () => {

    const {
      email,
      password
    } = values;

    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log(json.message);

        if (json.success) {
          setInStorage('the_main_app',{token:json.token});
          values.isLogged = true;
          values.token = json.token;

          history.push("/home")
        }

      });

  }

  const handleRegister = () => {
    const {
      firstName,
      lastName,
      email,
      password
    } = values;


    fetch('/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log(json.message);

        if (json.success) {

          values.isLogged = true;
          handleLogIn();
        }

      });


  }

  if (values.isLogged) {
    return <Redirect to='/home' />
  }

  return (

    <div className={classes.root}>

      <AppBar position="static" >
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab className={classes.tabs} label="Login" />
          <Tab className={classes.tabs} label="Register" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className={classes.paper}>

          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              value={values.email}
              onChange={handleChanges('email')}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              value={values.password}
              onChange={handleChanges('password')}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => handleLogIn()}
              className={classes.submit}
            >
              Sign In
    </Button>
            <Grid container>

              <Grid item>
                <Link href="#" onClick={() => setValue(1)} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
        </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChanges('firstName')}
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    value={values.lastName}
                    onChange={handleChanges('lastName')}
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    value={values.email}
                    onChange={handleChanges('email')}
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    value={values.password}
                    onChange={handleChanges('password')}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>

                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => handleRegister(values)}

                className={classes.submit}
              >
                Sign Up
          </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href='#' onClick={() => setValue(0)} variant="body2">
                    Already have an account? Sign in
              </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </TabPanel>

    </div>
  );



}
