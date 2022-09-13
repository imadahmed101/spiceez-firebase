import { Box, Typography, Button, Container } from '@mui/material'
import { KeyboardArrowRight } from '@mui/icons-material'
import React from 'react'

const Hero = () => {
  return (
    <Box sx={{ backgroundImage: `url(/one.jpg)`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "#3d3d3d", height: "100vh", minHeight: "600px" }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h2" mt="20px" mb="20px" fontWeight="600">Fresh <span style={{ color: "red" }}>Spices,</span></Typography>
        <Typography variant="h2" mb="20px" fontWeight="600">Delivered.</Typography>
        <Button variant="contained" href="/shop" sx={{ backgroundColor: "red", "&:hover": { backgroundColor: "#750000" } }}>Discover<KeyboardArrowRight /></Button>

      </Container>
    </Box>
  )
}

export default Hero