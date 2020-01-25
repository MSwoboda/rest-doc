
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SignaturePad from 'react-signature-canvas'


class Transfer extends Component {
  state = {
  };

  state = {trimmedDataURL: null}
  sigPad = {}
  clear = () => {
    this.sigPad.clear()
  }
  trim = () => {
    this.setState({trimmedDataURL: this.sigPad.getTrimmedCanvas()
      .toDataURL('image/png')})
  }

  render() {
    let {trimmedDataURL} = this.state

    return (
      <div >
      <div >
        <SignaturePad
          ref={(ref) => { this.sigPad = ref }} />
      </div>
      <div>
        <button onClick={this.clear}>
          Clear
        </button>
        <button  onClick={this.trim}>
          Trim
        </button>
      </div>
      {trimmedDataURL
        ? <img 
          src={trimmedDataURL} />
        : null}
    </div>
  
    );
  }
}

export default Transfer;
