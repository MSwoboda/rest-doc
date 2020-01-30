
import React, { Component } from 'react'
import SignaturePad from 'react-signature-canvas'

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import 'whatwg-fetch';
import {
  getFromStorage,
  setInStorage,
} from '../utils/auth';

// import SignatureCard from "../components/signaturePad"


class Transfer extends Component {


  state = { trimmedDataURL: null }
  sigPad = {}

  clear = () => {
    this.sigPad.clear()
  }
  trim = () => {
    let signature = (this.sigPad.getTrimmedCanvas().toDataURL('image/png'));

    console.log(signature);

    console.log("saving img");

    const obj = getFromStorage('the_main_app');
    const { token } = obj;

    fetch('/api/data/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: token,
        signature: signature,
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log(json.message);
      });

    // this.setState({
    //   trimmedDataURL: this.sigPad.getTrimmedCanvas()
    //     .toDataURL('image/png')
    // })


  }



  render() {
    let { trimmedDataURL } = this.state
    const obj = getFromStorage('the_main_app');

    const { token } = obj;

    fetch('../api/data/user?token=' + token)
      .then(res => res.json())
      .then(json => {

        if (json.success) {
          let valsOut = json.body[0].signature;


          this.setState({
            trimmedDataURL: valsOut
          })

          console.log(valsOut);

        }
      })

    return (
      <div className="bg-light" >
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">

            <div className="border border-secondary, style: min-width: 3000px;"  >
              <SignaturePad canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
                ref={(ref) => { this.sigPad = ref }} />

              <div >

                <ButtonGroup className="p-1" color="secondary" variant="contained" aria-label="contained secondary button group">
                  <Button onClick={this.clear}>Clear</Button>
                  <Button onClick={this.trim}>Save</Button>
                </ButtonGroup>

              </div >
            </div>
            <Divider className="m-4 " />

            <div className="col min-vh-200">
              <div className="border border-secondary m-5 p-3 rounded">
                {trimmedDataURL
                  ? <img
                    src={trimmedDataURL} />
                  : null}
                <br />
                <h6 class="font-weight-light">Current Signature Pattern</h6>

              </div>

            </div>

          </Container>
        </React.Fragment>

      </div>

    );
  }
}

export default Transfer;


