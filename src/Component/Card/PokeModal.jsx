import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LabTabs from '../Tabs/LabTabs';
import { useState, useEffect } from 'react';

export default function PokeModal(props) {
  
  const [pkmnMoves, setPkmnMoves] = useState([]);
  const [pkmnN, setpkmnN] = useState(0);

  var allMoves = [];
  for (var i = 0; i < 21; i++) {
    props.moves[i] ? allMoves.push(props.moves[i].move.name) : console.log('deu ruim')
  }

  useEffect(() => {
    setPkmnMoves(allMoves)    
    setpkmnN(props.pokeNum)
       
}, []);


  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 480 }}
        image={props.PokeImage}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h3">
            {props.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Pokemon type 1: {props.types[pkmnN].data.types[0] ? props.types[pkmnN].data.types[0].type.name :'undefined'}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Pokemon type 2: {props.types[pkmnN].data.types[1] ? props.types[pkmnN].data.types[1].type.name :  'undefined'}
          </Typography>
        </CardContent>
          <LabTabs moves={pkmnMoves}></LabTabs>
        
      </Box>
      

    </Card>
  );
}
