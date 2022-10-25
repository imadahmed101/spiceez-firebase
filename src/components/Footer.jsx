import React from 'react'
import {Box, Typography} from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{backgroundColor: "black", color: "white", textAlign: "center"}}>
        <Typography>About</Typography>
        <Typography>Contact</Typography>
        <Typography>FAQ</Typography>
        <br/>
        <Typography>Copyright 2022 Spiceez</Typography>
    </Box>
  )
}

export default Footer