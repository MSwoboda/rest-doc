import React, { Component } from "react";

/* eslint-disable no-use-before-define */
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import Fab from '@material-ui/core/Fab';
import GetAppIcon from '@material-ui/icons/GetApp';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';

import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import DownloadIcon from '@material-ui/icons/CloudDownload';
import EditIcon from '@material-ui/icons/Edit';

import LinearProgress from '@material-ui/core/LinearProgress';

import createPDF from '../utils/pdf';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),

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
  table: {
    minWidth: 250,
  },
}));

export default function Home() {
  const classes = useStyles();

  const [ docQuery,  setQuery] = React.useState([]);

  const handleChange = (event, newValue) => {
    setQuery(newValue);
  };

  return (

    <Card className="m-3">
      <div className="section ">

        <div className="row mt-5 ml-5 mr-2  ">

          <div className="col-12 col-md-8 mb-3 ">
            <div className={classes.root}>
              <Autocomplete
                onChange={(event, value) => setQuery(value)}
                multiple
                id="tags-outlined"
                options={forms}
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



              {docQuery.length===0 ? <Fab variant="extended" className={classes.fixedWidth}  disabled>
                <GetAppIcon className={classes.extendedIcon} />
                Download
            </Fab> : <Fab variant="extended" className={classes.fixedWidth}  >
                <GetAppIcon className={classes.extendedIcon} />
                Download
            </Fab>}
              
            </div>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-12">
            <Divider className="m-3" />

            <TableContainer component={Paper}>

              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Filename</TableCell>
                    <TableCell align="right">Template</TableCell>
                    <TableCell align="right">Contents</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {docQuery.map(row => (

                    <TableRow key={row.title}>
                      <TableCell component="th" scope="row">
                        <div className={classes.root}>
                          {/* <LinearProgress variant="query"  /> */}
                        </div>
                      </TableCell>

                      <TableCell align="right">{row.title}</TableCell>
                      <TableCell align="right">{row.tag}</TableCell>
                      <TableCell align="right">      <IconButton color="secondary" aria-label="add an alarm">
                        <EditIcon />
                      </IconButton>
                        <IconButton color="primary" aria-label="add to shopping cart">
                          <DownloadIcon />
                        </IconButton></TableCell>


                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>


          </div>
        </div>
      </div>



    </Card>
  );
}

const forms = [
  { title: 'W2', tag: 'w9' },
  { title: 'W4', tag: 'w4' },
  { title: 'W7', tag: 'w7' },
  { title: 'W9', tag: 'w9' },

  { title: '1099 - MISC', tag: '1099misc' },
  { title: '1099 - C', tag: '1099c' },


  { title: 'LLC - DE', tag: 'llcde' },
  { title: 'LLC - NJ', tag: 'llcnj' }, //https://www.state.nj.us/treasury/revenue/pdforms/pubrec.pdf
  { title: "LLC - PA", tag: 'llcpa' }, //https://www.dos.pa.gov/BusinessCharities/Business/RegistrationForms/Documents/Updated%202017%20Registration%20Forms/Domestic%20Limited%20Liability%20Company/15-8821%20Cert%20of%20Org-Dom%20LLC.pdf

  { title: 'Driver License - DE', tag: 'driverde' },
  { title: 'Driver License - NJ', tag: 'drivernj' },
  { title: 'Driver License - PA', tag: 'driverpa' },

  { title: 'DL - 180', tag: 'dl180' },
  { title: 'DL - 180C', tag: 'dl180c' },

  { title: 'LLC - NJ - Dissolution', tag: 'nollcnj' },
  { title: 'LLC - DE - Dissolution', tag: 'nollcde' },
  { title: 'LLC - PA - Dissolution', tag: 'nollcpa' },

  { title: 'Letter of Intent', tag: 'loi' },
  { title: 'Biosketch', tag: 'biosketch' },
  { title: 'Resume', tag: 'resume' }
];

