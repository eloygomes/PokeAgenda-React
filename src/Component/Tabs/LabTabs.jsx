import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import './LabTabs.css';
import DataGridDemo from '../DataGrid/DataGridDemo';

export default function LabTabs(props) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

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
          <DataGridDemo moves={props.moves}></DataGridDemo>
          {/* <ul>
            {props.moves.map((move, key)=> <li key={key}>Attack: {key + 1}: {move}</li>)}
          </ul> */}
        </TabPanel>
        <TabPanel value="2">
          <ul>
            {props.moves.map((move, key)=> <li key={key}>Attack: {key + 1}: {move}</li>)}
          </ul>
        </TabPanel>
        <TabPanel value="3">
          <ul>
            {props.moves.map((move, key)=> <li key={key}>Attack: {key + 1}: {move}</li>)}
          </ul>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
