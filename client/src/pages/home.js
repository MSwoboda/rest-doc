import React, { Component, useEffect } from "react";

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
import DownloadIcon from '@material-ui/icons/CloudDownload';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

import createPDF from '../utils/pdf';

import 'whatwg-fetch';
import {
  getFromStorage,
  setInStorage,
} from '../utils/auth';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

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

  const [docQuery, setQuery] = React.useState([]);

  const [values, setValues] = React.useState({
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    email: '',
    secondaryEmail: '',
    ssn: '',
    ein: '',
    phone: '(   )    -    ',

    billStreet: '',
    billApt: '',
    billState: '',
    billCity: '',
    billZip: '',

    shipStreet: '',
    shipApt: '',
    shipState: '',
    shipCity: '',
    shipState: '',
    shipZip: '',

    blood: '',
    insurance: '',
    dental: '',
    eye: '',
    allergies: '',
    social: '',
    medication: '',
    mHist: '',
    famHist: '',
    surgicalHist: '',
    travelHist: '',
    socialHistory: '',

    empName: '',
    empContFirst: '',
    empContLast: '',
    empConEmail: '',
    empEIN: '',
    empDUNS: '',
    empPhone: '(   )    -    ',
    empFax: '(   )    -    ',

    empBillStreet: '',
    empBillApt: '',
    empBillCity: '',
    empBillState: '',
    empBillZip: '',

    empShipStreet: '',
    empShipApt: '',
    empShipCity: '',
    empShipState: '',
    empShipZip: '',

    driver: '',
    driverState: '',
    driverExp: '',
    driverIssue: '',

    passport: '',
    passportState: '',
    passportExp: '',
    passportIssue: '',

    passportTwo: '',
    passportTwoState: '',
    passportTwoExp: '',
    passportTwoIssue: '',

    conOneTitle: '',
    conOneFirst: '',
    conOneLast: '',
    conOneRelation: '',
    conOneEmail: '',
    conOnePhone: '(   )    -    ',

    conTwoTitle: '',
    conTwoFirst: '',
    conTwoLast: '',
    conTwoRelation: '',
    conTwoEmail: '',
    conTwoPhone: '(   )    -    ',
    signature: ''
  });


  useEffect(() => {
    const obj = getFromStorage('the_main_app');

    const { token } = obj;

    fetch('../api/data/user?token=' + token)
      .then(res => res.json())
      .then(json => {

        if (json.success) {
          let valsOut = json.body[0];
          setValues(valsOut);
        }
      });
  }, []);

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



              {docQuery.length === 0 ? <Fab variant="extended" className={classes.fixedWidth} disabled>
                <GetAppIcon className={classes.extendedIcon} />
                Download
            </Fab> : <Fab variant="extended" className={classes.fixedWidth} onClick={
                ()=>{
                  docQuery.forEach(e => createPDF(e.tag, values))
                }
                  }>
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
                      {values.firstName[0].toLocaleLowerCase()}{values.lastName.toLocaleLowerCase()}_{row.tag}.pdf
                      </TableCell>

                    <TableCell align="right">{row.title}</TableCell>
                    <TableCell align="right">{(["w9","llcde","llcdl31","dl181"].includes(row.tag))  ? "complete":"partial"}</TableCell>
                    <TableCell align="right">      <IconButton color="secondary" aria-label="add an alarm" >
                      < VisibilityIcon />
                    </IconButton>
                      <IconButton color="primary" aria-label="add to shopping cart" onClick={() => createPDF(row.tag, values)}>
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



    </Card >
  );
}

const forms = [

  { title: 'W2', tag: 'w2' },
  { title: 'W4', tag: 'w4' },
  { title: 'W7', tag: 'w7' },
  { title: 'W9', tag: 'w9' },

  { title: '1099 - MISC', tag: '1099msc' },
  { title: '1099 - C', tag: '1099c' },

  { title: 'LLC - DE', tag: 'llcde' },
  { title: 'LLC - NJ', tag: 'llcnj' }, //https://www.state.nj.us/treasury/revenue/pdforms/pubrec.pdf
  { title: "LLC - PA", tag: 'llcpa' }, //https://www.dos.pa.gov/BusinessCharities/Business/RegistrationForms/Documents/Updated%202017%20Registration%20Forms/Domestic%20Limited%20Liability%20Company/15-8821%20Cert%20of%20Org-Dom%20LLC.pdf

  { title: "Learner's Permit", tag: 'dl31' },
  { title: "Driver's License", tag: 'dl180' },

  { title: 'DL-31', tag: 'dl31' },
  { title: 'DL-180C', tag: 'dl180' },

  { title: 'LLC - NJ - Dissolution', tag: 'nollcnj' },
  { title: 'LLC - DE - Dissolution', tag: 'nollcde' },
  { title: 'LLC - PA - Dissolution', tag: 'nollcpa' },

  { title: "Employee's Withholding Allowance", tag: 'w2' },
  { title: "Employee's Withholding", tag: 'w4' },
  { title: "IRS Individual Taxpayer Identification Number", tag: 'w7' },
  { title: "Request for Taxpayer. Identification Number", tag: 'w9' },

  { title: 'Letter of Intent', tag: 'loi' },
  { title: 'Biosketch', tag: 'biosketch' },
  { title: 'Resume', tag: 'resume' }
];
