import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BidraSammen from '../components/BidraSammen';
import WMW from '../components/WMW';
import JSToDo from '../components/JSToDo';
import LoanCalculator from '../components/LoanCalculator';
import ReactToDo from '../components/ReactToDo';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'black',
    display: 'flex',
  },
  tabs: {
    borderRight: '1px solid white',
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        indicatorColor="black"
        className="tabs"
      >
        <Tab label="Bidra Sammen" {...a11yProps(0)} />
        <Tab label="WMW" {...a11yProps(1)} />
        <Tab label="Loan Calculator" {...a11yProps(2)} />
        <Tab label="React ToDo" {...a11yProps(3)} />
        <Tab label="JS ToDo" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <BidraSammen />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WMW />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LoanCalculator />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ReactToDo />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <JSToDo />
      </TabPanel>
    </div>
  );
}