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
    height: '80%',
    backgroundColor: theme.palette.background.paper,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    }
  },
}));

export default function DataTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [values, setValues] = React.useState({
    textmask: '(215)    -    ',
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
          <Tab label="Medical" icon={<HelpIcon />} {...a11yProps(3)} />
          <Tab label="Safety" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="Legal" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label="Custom" icon={<ThumbUp />} {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <form className={classes.root} noValidate autoComplete="off">
          <div>

            <TextField id="standard-search" label="First Name" type="search" defaultValue="Michal" />
            <TextField id="standard-search" label="Last Name" type="search" defaultValue="Swoboda" />
            <TextField id="standard-search" label="Middle Initial" type="search" defaultValue=" " />


            <TextField id="standard-search" label="Email" type="Email" value="michal.swoboda@outlook.com" style={{ width: 250 }} InputProps={{
              readOnly: true,

            }} />
            <TextField id="standard-search" label="First Name" type="search" defaultValue="Michal" />
            <TextField id="standard-search" label="Last Name" type="search" defaultValue="Swoboda" />
            <TextField id="standard-search" label="Middle Initial" type="search" defaultValue=" " />
      

          </div>


          <div>
              <InputLabel className="ml-2"   style={{ fontSize: 12 }} >Phone Number</InputLabel>
              <Input className="ml-2"
                value={values.textmask}
                onChange={handleChanges('textmask')}
                id="formatted-text-mask-input"
                inputComponent={TextMaskCustom}
                style={{ height: '80%' }}
              />
</div>
          <Divider className="m-2" />

          <div>
            <TextField id="standard-search" label="Last Name" type="search" value="Hello World" />
            <TextField id="standard-search" label="Last Name" type="search" value="Hello World" />


            <TextField id="standard-search" label="Search field" type="search" />

          </div>

          <div>
            <TextField id="standard-search" label="Last Name" type="search" value="Hello World" />
            <TextField id="standard-search" label="Last Name" type="search" value="Hello World" />


            <TextField id="standard-search" label="Search field" type="search" />

          </div>
          <div>


            <TextField
              id="outlined-multiline-static"
              label="Address"

              multiline
              rows="4"
              defaultValue="Default Value"
              variant="outlined"
            />
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Financial
      </TabPanel>
      <TabPanel value={value} index={2}>
        Professional
      </TabPanel>
      <TabPanel value={value} index={3}>
        Medical
      </TabPanel>
      <TabPanel value={value} index={4}>
        Safety
      </TabPanel>
      <TabPanel value={value} index={5}>
        Legal
      </TabPanel>
      <TabPanel value={value} index={6}>
        Custom
      </TabPanel>
    </div>
  );
}