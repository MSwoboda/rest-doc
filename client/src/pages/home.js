import React, { Component } from "react";

/* eslint-disable no-use-before-define */
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import MaterialTableResults from '../components/resultTable';


import Fab from '@material-ui/core/Fab';
import GetAppIcon from '@material-ui/icons/GetApp';

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  fixedWidth: {
    width: 130,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Home() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (

    <Card className="m-3">
      <div className="section ">
        <div className="row mt-5 ml-5 mr-2  ">
          <div className="col-12 col-md-8 mb-3 ">
            <div className={classes.root}>

              <Autocomplete
                multiple
                id="tags-outlined"
                options={top100Films}
                getOptionLabel={option => option.title}
                defaultValue={[]}
                filterSelectedOptions
                renderInput={params => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Get documents..."
                    placeholder=" "
                    fullWidth
                  />
                )}
              />
            </div>
          </div>
          <div className="col-12 col-md-3 mb-3 d-flex justify-content-center ">
            <div className={classes.extendedIcon} >
              <Fab variant="extended" className={classes.fixedWidth}>
                <GetAppIcon className={classes.extendedIcon} />
                Process
            </Fab>
            </div>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-12">
            <Divider className="m-3" />

            <MaterialTableResults
             />

          </div>
        </div>
      </div>



    </Card>
  );
}

const top100Films = [
  { title: 'W2', year: 1974 },
  { title: 'W3', year: 1974 },
  { title: 'W4', year: 1974 },
  { title: 'W5', year: 1974 },
  { title: 'W7', year: 1994 },
  { title: 'W9', year: 2008 },

  { title: '1099MISC', year: 1972 },
  { title: '1099K', year: 1972 },
  { title: '1099C', year: 1972 },


  { title: 'LLC - DE', year: 1957 },
  { title: 'LLC - NJ', year: 2001 }, //https://www.state.nj.us/treasury/revenue/pdforms/pubrec.pdf
  { title: "LLC - PA", year: 1993 }, //https://www.dos.pa.gov/BusinessCharities/Business/RegistrationForms/Documents/Updated%202017%20Registration%20Forms/Domestic%20Limited%20Liability%20Company/15-8821%20Cert%20of%20Org-Dom%20LLC.pdf
  
  { title: 'Divorce - DE', year: 1994 },
  { title: 'Divorce - NJ', year: 1994 },
  { title: 'Divorce - PA', year: 1994 },

  { title: 'Driver License - DE', year: 2003 },
  { title: 'Driver License - NJ', year: 2003 },
  { title: 'Driver License - PA', year: 2003 },

  { title: 'DL-180', year: 1966 },
  { title: 'DL-180C', year: 1966 },

  { title: 'LLC - NJ - Dissolution', year: 1999 },
  { title: 'LLC - DE - Dissolution', year: 1999 },
  { title: 'LLC - PA - Dissolution', year: 1999 },

  { title: 'Letter of Intent', year: 1966 },
  { title: 'Biosketch', year: 1995 },
  { title: 'Resume', year: 1995 }
];

