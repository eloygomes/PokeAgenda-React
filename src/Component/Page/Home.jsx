import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Container maxWidth="false" sx={{backgroundColor:'lightblue', width:'100vw', height:'100vh'}}>

      <Box sx={{height: '100vh', textAlign:'center'}}>
        <Link to='/pokeagenda'>
            <img src='/assets/pokeagendaLogo.png' alt='' style={{ marginTop:'40vh'}} />
        </Link>
      </Box>
    </Container>
  )
}

export default Home