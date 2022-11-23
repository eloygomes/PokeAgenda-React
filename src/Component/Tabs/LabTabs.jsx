import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { useState, useEffect } from 'react';

import './LabTabs.css';
import CustomizedTables from '../BasicTable/CustomizedTables';
import BaseStatusNumTable from '../BasicTable/BaseStatusNumTable';

export default function LabTabs(props) {
  const [value, setValue] = React.useState('1');

  
  const [baseStatNum, setBaseStatNum] = useState();
  const [baseStatName, setBaseStatName] = useState();



  useEffect(() => {
    baseStatusDataFormat(props.baseStatus);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const baseStatusDataFormat = (bStatus) => {

    // GET BASE STATS ARRAY

    // console.log(bStatus)
    // console.log(bStatus.name)
    // console.log(bStatus.stats.length)
    // console.log(bStatus.stats[0])

    var bStatusList = [];

    for (var i = 0; i < bStatus.stats.length; i++) {
      bStatusList.push(bStatus.stats[i])
    }
    // console.log(bStatusList)
    // console.log(baseStatArr)

    var bStatusNum = [];

    for (i = 0; i < bStatusList.length; i++) {
      bStatusNum.push(bStatusList[i].base_stat)
    }
    setBaseStatNum(bStatusNum);
    console.log(baseStatNum)


    // GET BASE STATS NAME
    console.log(bStatus)
    // console.log(bStatus.name)
    // console.log(bStatus.stats.length)
    // console.log(bStatus.stats[0])

    var bStatusListName = [];

    for (var i = 0; i < bStatus.stats.length; i++) {
      bStatusListName.push(bStatusList[i].stat.name)
    }

    console.log(bStatusListName)
    setBaseStatName(bStatusListName)
  }

  


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} sx={{ color: 'red' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="General Infos" value="1" />
            <Tab label="Moves" value="2" />
            <Tab label="Base Status" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <CustomizedTables data={props.moves} />
        </TabPanel>
        <TabPanel value="2">
          <CustomizedTables data={props.moves} />
        </TabPanel>
        <TabPanel value="3">
          <BaseStatusNumTable baseStatNum={baseStatNum} baseStatName={baseStatName}/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
