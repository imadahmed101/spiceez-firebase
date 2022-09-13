import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, MenuItem, Menu } from '@mui/material'
import { Menu as MenuIcon, Brightness4, ShoppingCart } from '@mui/icons-material'

const Navbar = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false);

  return (

    <AppBar position="sticky" sx={{backgroundColor: "white", color: "black"}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        <Typography variant="h6" component="a" href="/" sx={{ color: "black", textDecoration: "none" }}>
          Spiceez
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: "5px" }}>
          <MenuItem component="a" href="/">Home</MenuItem>
          <MenuItem component="a" href="/shop">Shop</MenuItem>
          <MenuItem component="a" href="/dashboard">Dashboard</MenuItem>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconButton component="a" onClick={(e) => setMode(mode === "light" ? "dark" : "light")} sx={{ display: { xs: "none", sm: "flex" } }} >
            <Brightness4 sx={{ color: "black" }} />
          </IconButton>
          <Button href="/login" color="inherit" sx={{ display: { xs: "none", sm: "flex" } }}>Login</Button>
          <IconButton href="/cart">
            <ShoppingCart sx={{color: "black"}}/>
          </IconButton>
          <IconButton sx={{ display: { xs: "flex", sm: "none" } }} onClick={(e) => setOpen(true)} >
            <MenuIcon sx={{color: "black"}}/>
          </IconButton>
        </Box>

        <Menu
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem component="a" href="/">Home</MenuItem>
          <MenuItem component="a" href="/shop">Shop</MenuItem>
          <MenuItem component="a" href="/dashboard">Dashboard</MenuItem>
          <Box textAlign="center">
          <IconButton onClick={(e) => setMode(mode === "light" ? "dark" : "light")} >
          {mode === 'dark' ? <Brightness4 /> : <Brightness4 sx={{ color: "black" }} />}
          </IconButton>
          </Box>
          <MenuItem component="a" href="/login" sx={{ bgcolor: "gray", borderRadius: "25px" }}>Login</MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>
  );
}
export default Navbar;