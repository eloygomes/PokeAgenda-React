import { Box, Stack, } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'


function Header() {
 

  return (
    <>
        <Container maxWidth='sm' >
          <Box sx={{width:"500px", display: "flex", flexDirection:"row", marginBottom: "40px", marginTop: "20px"}}>
            <Stack direction="column" spacing={1} sx={{paddingLeft:"10px"}}>
              
            </Stack>
          </Box>    
        </Container>
    </>
  )
}

export default Header