import React, { useState } from 'react';
import { Tabs, Tab, AppBar, Typography, Box } from '@material-ui/core';
import TradingViewChart from './Chart/TradingViewChart';

function TabPanel(props: { [x: string]: any; children: any; value: any; index: any; }) {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BluePrintPanel() {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Chart" {...a11yProps(0)} />
          <Tab label="Purchases" {...a11yProps(1)} />
          <Tab label="Performance Analysis" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {/* Content for Chart */}
        <TradingViewChart
                selectedPair={"BTCUSDT"}
                setSelectedPair={()=>{}}
              />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Content for Purchases */}
        Purchases Content
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Content for Performance Analysis */}
        Performance Analysis Content
      </TabPanel>
    </div>
  );
}
