import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import 'whatwg-fetch';
import {
  getFromStorage,
  setInStorage,
} from '../utils/auth';




const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});




export default function SignatureCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;


  state = { trimmedDataURL: null }
  sigPad = {}

  useEffect(() => {
  

    let { trimmedDataURL } = this.state
    const obj = getFromStorage('the_main_app');

    const {token} = obj;

    fetch('../api/data/user?token=' + token)
      .then( res => res.json() )
      .then(json => {
       
        if (json.success) {
          let valsOut = json.body[0].signature;
         

          this.setState({
            trimmedDataURL: valsOut
          })

        console.log(valsOut);
        
        }
      })

  }, []);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />

          <div >
          <SignaturePad canvasProps={{width: 500, height: 200, className: 'sigCanvas'}}
            ref={(ref) => { this.sigPad = ref }} />
        </div>
        <div>
          <button onClick={this.clear}>
            Clear
        </button>
          <button onClick={this.trim}>
            Trim
        </button>
        </div>
        {trimmedDataURL
          ? <img
            src={trimmedDataURL} />
          : null}


          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}