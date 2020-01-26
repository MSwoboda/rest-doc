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
    title:'',
    firstName:'',
    middleName:'',
    lastName:'',
    suffix:'',
    email:'',
    secondaryEmail:'',
    ssn:'',
    ein:'',
    phone:'(   )    -    ',

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
    surgicalHist:'',
    travelHist:'',
    socialHistory:'',

    empName:'',
    empContFirst:'',
    empContLast:'',
    empConEmail:'',
    empEIN:'',
    empDUNS:'',
    empPhone:'(   )    -    ',
    empFax:'(   )    -    ',

    empBillStreet:'',
    empBillApt:'',
    empBillCity:'',
    empBillState:'',
    empBillZip:'',

    empShipStreet:'',
    empShipApt:'',
    empShipCity:'',
    empShipState:'',
    empShipZip:'',

    driver:'',
    driverState:'',
    driverExp:'',
    driverIssue:'',

    passport:'',
    passportState:'',
    passportExp:'',
    passportIssue:'',

    passportTwo:'',
    passportTwoState:'',
    passportTwoExp:'',
    passportTwoIssue:'',

    conOneTitle:'',
    conOneFirst:'',
    conOneLast:'',
    conOneRelation:'',
    conOneEmail:'',
    conOnePhone:'(   )    -    ',

    conTwoTitle:'',
    conTwoFirst:'',
    conTwoLast:'',
    conTwoRelation:'',
    conTwoEmail:'',
    conTwoPhone:'(   )    -    ',

  });

  const handleChanges = name => event => {
    console.log(event.target.value);
    
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
        <form className={classes.root}  type autoComplete="off">
          <div>

            <TextField id="standard-search" value={values.title} onChange={handleChanges('title')} label="Title" type="search" style={{ width: 50 }} />
            <TextField id="standard-search" value={values.firstName} onChange={handleChanges('firstName')} label="First Name" type="name"  />
            <TextField id="standard-search" value={values.middleName} onChange={handleChanges('middleName')} label="Middle Name" type="search" />
            <TextField id="standard-search" value={values.lastName} onChange={handleChanges('lastName')} label="Last Name" type="last" />
            <TextField id="standard-search" value={values.title} onChange={handleChanges('title')} label="Suffix" type="search" style={{ width: 50 }} />

          </div>


          <div>
            <TextField id="standard-search" label="Email" type="Email" value={values.email}  style={{ width: 250 }} InputProps={{ readOnly: true, }} />
            <TextField id="standard-search" label="Secondary Email" type="Email" value={values.secondaryEmail} onChange={handleChanges('secondaryEmail')} style={{ width: 250 }} InputProps={{ readOnly: true, }} />

            <TextField id="standard-search" label="SSN" type="search" value={values.ssn} onChange={handleChanges('ssn')}  />
            <TextField id="standard-search" label="EIN" type="search" value={values.ein} onChange={handleChanges('ein')}  />

            <InputLabel className="ml-2 mt-2" style={{ fontSize: 12 }} >Phone Number</InputLabel>
            <Input className="ml-2 "
              value={values.phone}
              onChange={handleChanges('phone')}
              id="formatted-text-mask-input"
              inputComponent={TextMaskCustom}
              style={{ height: '80%' }}
            />
          </div>

          <Divider className="m-4" />

          <div className="row">
            <div className="col-4 mr-3 mt-2" style={{ minWidth: 200 }} >

              <Typography variant="subtitle1">Primary Address (Billing)</Typography>

              <TextField id="standard-search"  value={values.billStreet} onChange={handleChanges('billStreet')} label="Street Name" type="search"style={{ width: 200 }} />
              <TextField id="standard-search" label="Apt" type="text"   value={values.billApt} onChange={handleChanges('billApt')} style={{ width: 70 }} />
              <TextField id="standard-search" label="State" type="text"  value={values.bilState} onChange={handleChanges('billState')} style={{ width: 50 }} />
              <TextField id="standard-search" label="City" type="text"  value={values.billCity} onChange={handleChanges('billCity')} style={{ width: 100 }} />
              <TextField id="standard-search" label="Zip" type="number"  value={values.billZip} onChange={handleChanges('billZip')} style={{ width: 80 }} />
              <TextField
                id="outlined-multiline-static"
                label="Address Block"
                multiline
                rows="4"
                variant="outlined"
              />
            </div>

            <div className="col-4 mr-3 mt-2" style={{ minWidth: 200 }} >

              <Typography variant="subtitle1">Secondary Address (Shipping)</Typography>

              <TextField id="standard-search"  value={values.shipStreet} onChange={handleChanges('shipStreet')} label="Street Name" type="search" style={{ width: 200 }} />
              <TextField id="standard-search" label="Apt" type="text"   value={values.shipApt} onChange={handleChanges('shipApt')} style={{ width: 70 }} />
              <TextField id="standard-search" label="State" type="text"  value={values.bilState} onChange={handleChanges('shipState')} style={{ width: 50 }} />
              <TextField id="standard-search" label="City" type="text"  value={values.shipCity} onChange={handleChanges('shipCity')} style={{ width: 100 }} />
              <TextField id="standard-search" label="Zip" type="number"  value={values.shipZip} onChange={handleChanges('shipZip')} style={{ width: 80 }} />
              <TextField
                id="outlined-multiline-static"
                label="Address Block"

                multiline
                rows="4"
                variant="outlined"
              />
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <TextField id="standard-search" label="Blood Type" type="search" value={values.blood} onChange={handleChanges('blood')} />
          <TextField id="standard-search" label="Insurance Number" type="number" value={values.insurance} onChange={handleChanges('insurance')} />
          <TextField id="standard-search" label="Dental Insurance Number" type="number" value={values.dental} onChange={handleChanges('dental')} />
          <TextField id="standard-search" label="Eye Insurance Number" type="number" value={values.eye} onChange={handleChanges('eye')} />
          <TextField id="standard-search" label="Allergies" type="text" value={values.allergies} onChange={handleChanges('allergies')} />
          <TextField id="standard-search" label="Social" type="texet" value={values.social} onChange={handleChanges('social')} />
          <Divider className="m-4" />

          <TextField
            id="outlined-multiline-static"
            label="Medication"
            value={values.medication} 
            onChange={handleChanges('medication')}
            style={{ width: '92%' }}
            multiline
            rows="4"
            variant="outlined"
          />
          <Divider className="m-4" />

        </div>

        <TextField
          id="outlined-multiline-static"
          label="Medical History"
          value={values.mHist} 
          onChange={handleChanges('mHist')}
          style={{ width: '92%' }}
          multiline
          rows="4"
          variant="outlined"
        />

        <TextField
          id="outlined-multiline-static"
          label="Family Medical History"
          value={values.famHist} 
          onChange={handleChanges('famHist')}
          style={{ width: '53%' }}
          multiline
          rows="4"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Surgical"
          value={values.surgicalHist} 
          onChange={handleChanges('surgicalHist')}
          style={{ width: '37%' }}
          multiline
          rows="4"
          variant="outlined"
        />

        <TextField
          id="outlined-multiline-static"
          label="Social History"
          value={values.socialHistory} 
          onChange={handleChanges('socialHistory')}
          style={{ width: '53%' }}
          multiline
          rows="4"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Travel History"
          value={values.travelHist} 
          onChange={handleChanges('travelHist')}
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
          <TextField id="standard-search" label="Employer Name" type="search"      value={values.empName} onChange={handleChanges('empName')} />
          <TextField id="standard-search" label="Contact Last Name" type="search"  value={values.empContFirst} onChange={handleChanges('empContFirst')} />
          <TextField id="standard-search" label="Contact First Name" type="search" value={values.empContLast} onChange={handleChanges('empContLast')} />
        </div>
        <div>
          <TextField id="standard-search" label="Email" type="Email"  style={{ width: 250 }} InputProps={{ readOnly: true, }} value={values.empConEmail} onChange={handleChanges('empConEmail')} />
          <TextField id="standard-search" label="EIN" type="search" value={values.empEIN} onChange={handleChanges('empEIN')}/>
          <TextField id="standard-search" label="DUNS" type="search" value={values.empDUNS} onChange={handleChanges('empDUNS')} />

          <div className="row">
            <div className="col-4">


              <InputLabel className="ml-2 " style={{ fontSize: 12 }} >Phone Number</InputLabel>
              <Input className="ml-2 "
                value={values.empPhone}
                onChange={handleChanges('empPhone')}
                id="formatted-text-mask-input"
                inputComponent={TextMaskCustom}
                style={{ height: '80%' }}
              />

            </div>
            <div className="col-4">
              <InputLabel className="ml-2 " style={{ fontSize: 12 }} >Fax Number</InputLabel>
              <Input className="ml-2 "
                value={values.empFax}
                onChange={handleChanges('empFax')}
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

            <TextField id="standard-search" label="Street Name" type="search" style={{ width: 200 }} value={values.empBillStreet} onChange={handleChanges('empBillStreet')}/>
            <TextField id="standard-search" label="Apatartment" type="search" style={{ width: 70 }} value={values.empBillApt} onChange={handleChanges('empBillApt')}/>
            <TextField id="standard-search" label="State" type="search" style={{ width: 50 }} value={values.empBillState} onChange={handleChanges('empBillState')}/>
            <TextField id="standard-search" label="City" type="search" style={{ width: 100 }} value={values.empBillCity} onChange={handleChanges('empBillCiy')}/>
            <TextField id="standard-search" label="ZIP" type="search"  style={{ width: 80 }} value={values.empBillZip} onChange={handleChanges('empBillZip')}/>
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

            <TextField id="standard-search" value={values.empShipStreet} onChange={handleChanges('empShipStreet')} label="Street Name" type="search"  style={{ width: 200 }} />
            <TextField id="standard-search" value={values.empShipApt} onChange={handleChanges('empShipApt')} label="Apatartment" type="search" style={{ width: 70 }} />
            <TextField id="standard-search" value={values.empShipState} onChange={handleChanges('empShipState')} label="State" type="search"  style={{ width: 50 }} />
            <TextField id="standard-search" value={values.empShipCity} onChange={handleChanges('empShipCity')}label="City" type="search"  style={{ width: 100 }} />
            <TextField id="standard-search" value={values.empShipZip} onChange={handleChanges('empShipZip')} label="ZIP" type="search" value="19121" style={{ width: 80 }} />
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

        <TextField id="standard-search" value={values.driver} onChange={handleChanges('driver')} label="License #" type="search" />
        <TextField id="standard-search" value={values.driverState} onChange={handleChanges('driverState')} label="State" type="search" />
        <TextField id="standard-search" value={values.driverExp} onChange={handleChanges('driverExp')} label="Expiration  type" type=" type" />
        <TextField id="standard-search" value={values.driverIssue} onChange={handleChanges('driverIssue')} label=" Date of Issue" type=" type" style={{ width: 100 }} />
        <Divider className="m-4" />

        <Typography variant="subtitle1">Passport 1</Typography>

        <TextField id="standard-search"  value={values.passport} onChange={handleChanges('passport')} label="Passport #" type="search" />
        <TextField id="standard-search"  value={values.passportState} onChange={handleChanges('passportState')}label="Country" type="search" />
        <TextField id="standard-type"    value={values.passportExp} onChange={handleChanges('passportExp')} label="Expiration  type" type=" type" placeholder="01/01/2000" />
        <TextField id="standard-type"    value={values.passportIssue} onChange={handleChanges('passportIssue')} label=" Date of Issue" type=" type" placeholder="01/01/2000" />
        <Divider className="m-4" />

        <Typography variant="subtitle1">Passport 2</Typography>

        <TextField id="standard-search" value={values.passportTwo} onChange={handleChanges('passportTwo')}  label="Passport #" type="search" />
        <TextField id="standard-search" value={values.passportTwoState} onChange={handleChanges('passportTwoState')} label="Country" type="search" placeholder="Switzerland" />
        <TextField id="standard-search" value={values.passportTwoExp} onChange={handleChanges('passportTwoExp')}  label="Expiration  type" type=" type" placeholder="01/01/2000" />
        <TextField id="standard-search" value={values.passportTwoIssue} onChange={handleChanges('passportTwoIssue')} label=" Date of Issue" type=" type" placeholder="01/01/2000" />
        <Divider className="m-4" />

      </TabPanel>

      <TabPanel value={value} index={4}>
        <Typography variant="subtitle1">Emergency Contact #1</Typography>

        <div>

          <TextField id="standard-search"  value={values.conOneTitle} onChange={handleChanges('conOneTitle')} label="Title" type="title" style={{ width: 50 }} />
          <TextField id="standard-search"  value={values.conOneFirst} onChange={handleChanges('conOneFirst')} label="First Name" type="search" defaultValue="Michal" />
          <TextField id="standard-search"  value={values.conOneLast} onChange={handleChanges('conOneLast')} label="Last Name" type="search" defaultValue="Swoboda" />
          <TextField id="standard-search"  value={values.conOneRelation} onChange={handleChanges('conOneRelation')} label="Relation" type="search" style={{ width: 200 }} />
          <TextField id="standard-search"  value={values.conOneEmail} onChange={handleChanges('conOneEmail')} label="Email" type="Email"   />
          <TextField id="standard-search"  value={values.conOneNumber} onChange={handleChanges('conOneNumber')} label="Phone Number" type="number"  />

 
        </div>

        <Divider className="m-4" />


        <Typography variant="subtitle1">Emergency Contact #1</Typography>

        <div>

          <TextField id="standard-search" value={values.conTwoTitle}     onChange={handleChanges('conTwoTitle')} label="Title" type="title" style={{ width: 50 }} />
          <TextField id="standard-search" value={values.conTwoFirst}     onChange={handleChanges('conTwoFirst')} label="First Name" type="search"  />
          <TextField id="standard-search" value={values.conTwoLast}      onChange={handleChanges('conTwoLast')} label="Last Name" type="search"  />
          <TextField id="standard-search" value={values.conTwoRelation}  onChange={handleChanges('conTwoRelation')} label="Relation" type="search" style={{ width: 200 }} />
          <TextField id="standard-search" value={values.conTwoEmail}     onChange={handleChanges('conTwoEmail')} label="Email" type="Email" style={{ width: 250 }}/>
          <TextField id="standard-search" value={values.conTwoNumber}    onChange={handleChanges('conTwoNumber')} label="Phone Number" type="number"  />
        </div>

  

      </TabPanel>
      <Fab color="primary" className={classes.fab} aria-label="add">
  <AddIcon />
</Fab>
    </div>
  );
}



