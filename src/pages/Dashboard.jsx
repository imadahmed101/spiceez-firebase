import React from 'react'
import ItemForm from '../dashboard/forms/ItemForm'
import ItemDashboard from '../dashboard/dashboards/ItemDashboard'
import {Box, Typography} from '@mui/material'

const Dashboard = () => {
  return (
    <div>
      <Box sx={{ background: `radial-gradient(at top left, #ff0000 0%, #700000 100%)`, height: "auto", minHeight: "55px", marginBottom: "30px", textAlign: "center", borderRadious: "25px"}}>
      <Typography variant="h3" sx={{ color: "white" }}>Dashboard</Typography>
      </Box>
      <ItemForm />
      <ItemDashboard />
    </div>
  )
}

export default Dashboard