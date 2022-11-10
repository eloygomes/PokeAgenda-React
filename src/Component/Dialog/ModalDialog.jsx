import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PokeModal from '../Card/PokeModal';

export default function ModalDialog(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{minHeight: 40}}>
      <Button  variant="contained" sx={{fontSize: 10}} onClick={handleClickOpen}>
        More Info
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth='lg'
      >
        <DialogTitle id="responsive-dialog-title">
          {"Pokemon Details"}
        </DialogTitle>
        <DialogContent>

          <PokeModal PokeImage={props.image} name={props.name} moves={props.moves} types={props.types} pokeNum={props.pokeNum}/>
          
          <DialogContentText>
            Esse projeto foi desenvolvido por Eloy Gomes, todos os dados fora disponibilizados por API PokeAPI
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
