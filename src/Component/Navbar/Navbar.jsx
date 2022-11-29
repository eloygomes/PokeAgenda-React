import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    marginLeft: theme.spacing(1),
    width: '180px',
    height: '40px',
    marginTop: '8px'
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '52px',
    height: '40px',
    marginTop: '8px'
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '0ch',
      padding: '11px',
      paddingLeft: '48px',
      paddingTop: '16px',
      fontSize: '.8rem',
      '&:focus': {
        width: '23ch',
      },
      [theme.breakpoints.up('sm')]: {
        width: '0ch',
        padding: '11px',
        paddingLeft: '48px',
        paddingTop: '16px',
        fontSize: '.8rem',
        '&:focus': {
          width: '23ch',
        },
      },
    },
  },
}));


export default function Navbar({ pokeFilter }) {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed" sx={{ minHeight:70 , backgroundColor: '#607d8b', height: 70, zIndex: 3}}>
        <Toolbar sx={{paddingTop:'5px'}}>
          <Box width='100%' display='flex' justifyContent='space-between'>
            <Link to='/'>
              {/* <Box component='img' height='3rem'src='/assets/pokemon_logo.png' sx={{height:2.3}}/> */}
              <Box component='img' height='1rem' src='/assets/pokeagendaLogo.png' sx={{minHeight:50}}/>
            </Link>
            <Search onChange={(e)=>pokeFilter(e.target.value)}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Pokemon Name"
                inputProps={{ 'aria-label': 'pokemon name' }}
              />
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
