import React, { Component } from "react";
// import { Document, Page } from 'react-pdf';
import { render } from 'react-dom';
import Carousel from 'react-image-carousel';
 

let images = [
  '/img/landing1.jpg',
  '/img/landing2.jpg',
  '/img/landing3.jpg',
  '/img/landing4.jpg',
  '/img/landing5.jpg'
];


class Settings extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 

  render() {

    const { pageNumber, numPages } = this.state;

    return (
    
      <div className="my-carousel">
      <Carousel images={images} 
                  thumb={true}
                  loop={true}
                  autoplay={3000}/>
  </div>
   
    );
  }
}

export default Settings;
