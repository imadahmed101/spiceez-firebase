import React from 'react'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <Box>
      <Hero/>
      <Featured/>
    </Box>
  )
}

export default Home