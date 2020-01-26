import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';

import Divider from '@material-ui/core/Divider';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
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
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '90%',
    backgroundColor: theme.palette.background.paper,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    }
  }, fab: {
    position: 'absolute',
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  },
}));

export default function DataTabs() {
  const classes = useStyles();
  
  const [value, setValue] = React.useState(0);
  const [values, setValues] = React.useState({
    textmask: '(   )    -    ',
    title:'',
    firstName:'',
    middleName:'',
    lastName:'',
    suffix:'',
    email:'',
    secondaryEmail:'',
    ssn:'',
    ein:'',
    phone:'',

    billStreet:'',
    billApt:'',
    billState:'',
    billCity:'',
    billState:'',
    billZip:'',

    shipStreet:'',
    shipApt:'',
    shipState:'',
    shipCity:'',
    shipState:'',
    shipZip:'',

    blood:'',
    insurance:'',
    dental:'',
    eye:'',
    allergies:'',
    social:'',
    medication:'',
    mHist:'',
    famHist:'',


  });

  const handleChanges = name => event => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="General" icon={<PhoneIcon />} {...a11yProps(0)} />
          <Tab label="Medical" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="Professional" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="Travel" icon={<HelpIcon />} {...a11yProps(3)} />
          <Tab label="Safety" icon={<ShoppingBasket />} {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <form className={classes.root} noVali type autoComplete="off">
          <div>

            <TextField id="standard-search" label="Title" type="search" style={{ width: 50 }} />
            <TextField id="standard-search" label="First Name" type="search" defaultValue="Michal" />
            <TextField id="standard-search" label="Middle Name" type="search" defaultValue=" " />
            <TextField id="standard-search" label="Last Name" type="search" defaultValue="Swoboda" />
            <TextField id="standard-search" label="Suffix" type="search" style={{ width: 50 }} />

          </div>


          <div>
            <TextField id="standard-search" label="Email" type="Email" value="michal.swoboda@outlook.com" style={{ width: 250 }} InputProps={{ readOnly: true, }} />
            <TextField id="standard-search" label="Secondary Email" type="Email" value="" style={{ width: 250 }} InputProps={{ readOnly: true, }} />

            <TextField id="standard-search" label="SSN" type="search" />
            <TextField id="standard-search" label="EIN" type="search" />

            <InputLabel className="ml-2 mt-2" style={{ fontSize: 12 }} >Phone Number</InputLabel>
            <Input className="ml-2 "
              value={values.textmask}
              onChange={handleChanges('textmask')}
              id="formatted-text-mask-input"
              inputComponent={TextMaskCustom}
              style={{ height: '80%' }}
            />
          </div>

          <Divider className="m-4" />

          <div className="row">
            <div className="col-4 mr-3 mt-2" style={{ minWidth: 200 }} >

              <Typography variant="subtitle1">Primary Address (Billing)</Typography>

              <TextField id="standard-search" label="Street Name" type="search" value="9 Brewerytown Ct." style={{ width: 200 }} />
              <TextField id="standard-search" label="Apatartment" type="search" value="N1201" style={{ width: 70 }} />
              <TextField id="standard-search" label="City" type="search" value="State" style={{ width: 50 }} />
              <TextField id="standard-search" label="City" type="search" value="City" style={{ width: 100 }} />
              <TextField id="standard-search" label="ZIP" type="search" value="19121" style={{ width: 80 }} />
              <TextField
                id="outlined-multiline-static"
                label="Address Block"

                multiline
                rows="4"
                defaultValue="Default Value"
                variant="outlined"
              />
            </div>

            <div className="col-4 mr-3 mt-2" style={{ minWidth: 200 }} >

              <Typography variant="subtitle1">Secondary Address (Shipping)</Typography>

              <TextField id="standard-search" label="Street Name" type="search" value="9 Brewerytown Ct." style={{ width: 200 }} />
              <TextField id="standard-search" label="Apatartment" type="search" value="N1201" style={{ width: 70 }} />
              <TextField id="standard-search" label="City" type="search" value="State" style={{ width: 50 }} />
              <TextField id="standard-search" label="City" type="search" value="City" style={{ width: 100 }} />
              <TextField id="standard-search" label="ZIP" type="search" value="19121" style={{ width: 80 }} />
              <TextField
                id="outlined-multiline-static"
                label="Address Block"

                multiline
                rows="4"
                defaultValue="Default Value"
                variant="outlined"
              />
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <TextField id="standard-search" label="Blood Type" type="search" defaultValue="" />
          <TextField id="standard-search" label="Insurance Number" type="number" defaultValue="" />
          <TextField id="standard-search" label="Dental Insurance Number" type="number" defaultValue="" />
          <TextField id="standard-search" label="Eye Insurance Number" type="number" defaultValue="" />
          <TextField id="standard-search" label="Allergies" type="text" defaultValue="" />
          <TextField id="standard-search" label="Social" type="texet" defaultValue="" />
          <Divider className="m-4" />

          <TextField
            id="outlined-multiline-static"
            label="Medication"
            style={{ width: '92%' }}
            multiline
            rows="4"
            defaultValue="Default Value"
            variant="outlined"
          />
          <Divider className="m-4" />

        </div>

        <TextField
          id="outlined-multiline-static"
          label="Medical History"
          style={{ width: '92%' }}
          multiline
          rows="4"
          defaultValue="Default Value"
          variant="outlined"
        />

        <TextField
          id="outlined-multiline-static"
          label="Family Medical History"
          style={{ width: '53%' }}
          multiline
          rows="4"
          defaultValue="Default Value"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Surgical"
          style={{ width: '37%' }}
          multiline
          rows="4"
          defaultValue="Default Value"
          variant="outlined"
        />

        <TextField
          id="outlined-multiline-static"
          label="Social History"
          style={{ width: '53%' }}
          multiline
          rows="4"
          defaultValue="Default Value"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Travel History"
          style={{ width: '37%' }}
          multiline
          rows="4"
          defaultValue="Default Value"
          variant="outlined"
        />

        <Divider className="m-4" />


      </TabPanel>
      <TabPanel value={value} index={2}>

        <div>
          <TextField id="standard-search" label="Employer Name" type="search" defaultValue="Michal" />
          <TextField id="standard-search" label="Contact Last Name" type="search" defaultValue="Swoboda" />
          <TextField id="standard-search" label="Contact First Name" type="search" defaultValue="Michal" />
        </div>
        <div>
          <TextField id="standard-search" label="Email" type="Email" value="michal.swoboda@outlook.com" style={{ width: 250 }} InputProps={{ readOnly: true, }} />
          <TextField id="standard-search" label="EIN" type="search" />
          <TextField id="standard-search" label="DUNS" type="search" />

          <div className="row">
            <div className="col-4">


              <InputLabel className="ml-2 " style={{ fontSize: 12 }} >Phone Number</InputLabel>
              <Input className="ml-2 "
                value={values.textmask}
                onChange={handleChanges('textmask')}
                id="formatted-text-mask-input"
                inputComponent={TextMaskCustom}
                style={{ height: '80%' }}
              />

            </div>
            <div className="col-4">
              <InputLabel className="ml-2 " style={{ fontSize: 12 }} >Fax Number</InputLabel>
              <Input className="ml-2 "
                value={values.textmask}
                onChange={handleChanges('textmask')}
                id="formatted-text-mask-input"
                inputComponent={TextMaskCustom}
                style={{ height: '80%' }}
              />

            </div>
          </div>
        </div>

        <Divider className="m-4" />

        <div className="row">
          <div className="col-4 mr-3 mt-2" style={{ minWidth: 200 }} >

            <Typography variant="subtitle1">Primary Address (Billing)</Typography>

            <TextField id="standard-search" label="Street Name" type="search" value="9 Brewerytown Ct." style={{ width: 200 }} />
            <TextField id="standard-search" label="Apatartment" type="search" value="N1201" style={{ width: 70 }} />
            <TextField id="standard-search" label="City" type="search" value="State" style={{ width: 50 }} />
            <TextField id="standard-search" label="City" type="search" value="City" style={{ width: 100 }} />
            <TextField id="standard-search" label="ZIP" type="search" value="19121" style={{ width: 80 }} />
            <TextField
              id="outlined-multiline-static"
              label="Address Block"

              multiline
              rows="4"
              defaultValue="Default Value"
              variant="outlined"
            />
          </div>

          <div className="col-4 mr-3 mt-2" style={{ minWidth: 200 }} >

            <Typography variant="subtitle1">Secondary Address (Shipping)</Typography>

            <TextField id="standard-search" label="Street Name" type="search" value="9 Brewerytown Ct." style={{ width: 200 }} />
            <TextField id="standard-search" label="Apatartment" type="search" value="N1201" style={{ width: 70 }} />
            <TextField id="standard-search" label="City" type="search" value="State" style={{ width: 50 }} />
            <TextField id="standard-search" label="City" type="search" value="City" style={{ width: 100 }} />
            <TextField id="standard-search" label="ZIP" type="search" value="19121" style={{ width: 80 }} />
            <TextField
              id="outlined-multiline-static"
              label="Address Block"

              multiline
              rows="4"
              defaultValue="Default Value"
              variant="outlined"
            />
          </div>
        </div>

      </TabPanel>
      <TabPanel value={value} index={3}>

        <Typography variant="subtitle1">Driver's License</Typography>

        <TextField id="standard-search" label="License #" type="search" />
        <TextField id="standard-search" label="State" type="search" />
        <TextField id="standard-search" label="Expiration  type" type=" type" />
        <TextField id="standard-search" label=" Date of Issue" type=" type" style={{ width: 100 }} />
        <Divider className="m-4" />

        <Typography variant="subtitle1">Passport 1</Typography>

        <TextField id="standard-search" label="Passport #" type="search" />
        <TextField id="standard-search" label="Country" type="search" />
        <TextField id="standard-type" label="Expiration  type" type=" type" placeholder="01/01/2000" />
        <TextField id="standard-type" label=" Date of Issue" type=" type" placeholder="01/01/2000" />
        <Divider className="m-4" />

        <Typography variant="subtitle1">Passport 2</Typography>

        <TextField id="standard-search" label="Passport #" type="search" />
        <TextField id="standard-search" label="Country" type="search" placeholder="Switzerland" />
        <TextField id="standard-search" label="Expiration  type" type=" type" placeholder="01/01/2000" />
        <TextField id="standard-search" label=" Date of Issue" type=" type" placeholder="01/01/2000" />
        <Divider className="m-4" />

      </TabPanel>

      <TabPanel value={value} index={4}>
        <Typography variant="subtitle1">Emergency Contact #1</Typography>

        <div>

          <TextField id="standard-search" label="Title" type="title" style={{ width: 50 }} />
          <TextField id="standard-search" label="First Name" type="search" defaultValue="Michal" />
          <TextField id="standard-search" label="Last Name" type="search" defaultValue="Swoboda" />
          <TextField id="standard-search" label="Relation" type="search" style={{ width: 200 }} />
          <TextField id="standard-search" label="Email" type="Email" value="michal.swoboda@outlook.com" style={{ width: 250 }} />
          <TextField id="standard-search" label="Phone Number" type="number"  />

 
        </div>

        <Divider className="m-4" />


        <Typography variant="subtitle1">Emergency Contact #1</Typography>

        <div>

          <TextField id="standard-search" label="Title" type="title" style={{ width: 50 }} />
          <TextField id="standard-search" label="First Name" type="search" defaultValue="Michal" />
          <TextField id="standard-search" label="Last Name" type="search" defaultValue="Swoboda" />
          <TextField id="standard-search" label="Relation" type="search" style={{ width: 200 }} />

          <TextField id="standard-search" label="Email" type="Email" value="michal.swoboda@outlook.com"  />
          <TextField id="standard-search" label="Phone Number" type="number"  />
        </div>

  

      </TabPanel>
      <Fab color="primary" className={classes.fab} aria-label="add">
  <AddIcon />
</Fab>
    </div>
  );
}



