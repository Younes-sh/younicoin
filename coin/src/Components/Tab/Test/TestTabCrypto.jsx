import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import TradeViewChart from 'react-crypto-chart';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Bitcoin" {...a11yProps(0)} />
          <Tab label="Cardano" {...a11yProps(1)} />
          <Tab label="Etherium" {...a11yProps(2)} />
          <Tab label="BNB" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} sx={{color:'green'}} index={0}>
        Bitcoin/BTC
      </TabPanel>
      <TabPanel value={value} sx={{color:'green'}} index={1}>
        Cardano/ADA
      </TabPanel>
      <TabPanel value={value} sx={{color:'green'}} index={2}>
        Etheriun/ETH
      </TabPanel>
      <TabPanel value={value} sx={{color:'green'}} index={3}>
        BNB
      </TabPanel>
    </Box>
  );
}
