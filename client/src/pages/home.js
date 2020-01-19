import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import Box from '@material-ui/core/Box';
// import SwipeableTextMobileStepper from "../components/FormCarousel"
// import Deposits from './Deposits';
// import Orders from './Orders';



class Home extends Component {
  state = {
    books: []
  };


  render() {
    return (

      <div>Home




   <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>



          </Grid>
          <Grid item xs={12} md={4} lg={3}>

          </Grid>
          <Grid item xs={12}>

          </Grid>
        </Grid>


      </div>



    );
  }
}

export default Home;
