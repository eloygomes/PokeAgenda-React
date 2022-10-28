import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import './PokeCard.css';
import ModalDialog from '../Dialog/ModalDialog';


export default function PokeCard({name, image, moves, GR, handleClick, NumPokeDex, types, pokeNum}) {


  
  
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={image}
      />
      <CardContent sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <Typography gutterBottom variant="body" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {`Pkmn N: ${NumPokeDex}`}
        </Typography>
        
      </CardContent>
      <CardActions sx={{ display:'flex', justifyContent:'flex-end'}}>
         <ModalDialog image={image} name={name} moves={moves} types={types} pokeNum={pokeNum}/>
      </CardActions>
    </Card>
  );
}
