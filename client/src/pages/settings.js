import React, { Component } from "react";
// import { Document, Page } from 'react-pdf';
import { render } from 'react-dom';
import Carousel from 'react-image-carousel';
import Container from '@material-ui/core/Container';
import ImageGallery from 'react-image-gallery';

import Grid from '@material-ui/core/Grid';


let images = [
  '../imgs/w2.jpg',
  '../imgs/w4.jpg',
  '../imgs/w7.jpg'

];


// const images = [
//   {
//     original: 'https://picsum.photos/id/1018/1000/600/',
//     sizes:10
//   },
//   {
//     original: '../imgs/w2.jpg',
//     sizes:10

//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     sizes:10

//   },
// ];



class Settings extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 

  render() {


    return (
 
        <Grid container spacing={3}>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={6}>
        <div style={{ height: '10%' }}   className="my-carousel">
            <Carousel  images={images} 
                        thumb={false}
                        loop={true}
                        autoplay={3000}
                      />
        </div>

        </Grid>
       
      </Grid>

      
   
    );
  }
}

export default Settings;
