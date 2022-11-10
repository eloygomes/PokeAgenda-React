import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';



export default function DataGridDemo(props) {
  

  const columns = [
    {
      field: 'level',
      headerName: 'Level',
      type: 'number',
      width: 5,
      editable: false,
    },
    { 
      field: 'attackName', 
      headerName: 'Attack Name', 
      width: 560 
    },
    
  ];
  
    
  const rows = [];

  let movesCount = props.moves

  for(var i = 0; i < movesCount.length;i++){
    rows.push({ id: [i], level: [i], attackName: props.moves[i] })
    
  }
  

  return (
    <Box sx={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        cellHeight={120}
        pageSize={7}
        rowsPerPageOptions={[3]}
        disableSelectionOnClick
      />
    </Box>
  );
}
  