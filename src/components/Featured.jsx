import React from 'react'
import { Box, Typography } from '@mui/material'
import Item from './Item'

const Featured = () => {
  return (
    <Box sx={{ background: `radial-gradient(at top left, #ff0000 0%, #700000 100%)`, height: "50vh", minHeight: "250px" }}>
      <Typography variant="h3" sx={{ color: "white" }}>Featured</Typography>
      <Box sx={{display: "flex", justifyContent: "space-evenly"}}>
      <Item />
      <Item />
      </Box>
    </Box>
  )
}

export default Featured
