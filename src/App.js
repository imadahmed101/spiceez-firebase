import {useEffect, useState} from 'react'
import {Box, Container, Button} from '@mui/material'


function App() {

  return (
    <Box>
    <Container style={{justifyContent: "space-between"}}>
      <div>
      <p>Willis & Monroe Associates</p>
      </div>
      <div style={{display: "flex", justifyContent: "space between"}}>
      <p>home</p>
      <p>about</p>
      <p>services</p>
      <p>contact</p>
      <p>quote</p>
      </div>
    </Container>

    </Box>
  )
}

export default App;
