import { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { Box, Container, Typography, Button, TextField, Grid, Link, Avatar } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState({})

  let Navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      alert('Registration Successful')
      Navigate("/");
    }
    catch (error) {
      console.log(error.message);
    }
  }

  const logout = async () => {
    await signOut(auth);
  }


  return (
    <Container maxWidth="xs">
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Avatar sx={{ backgroundColor: "red", marginTop: "15px" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ marginBottom: "15px" }} >Register</Typography>
        <TextField label="Email" type="email" sx={{ marginBottom: "15px" }} onChange={(event) => { setEmail(event.target.value) }} />
        <TextField label="Password" type="password" sx={{ marginBottom: "15px" }} onChange={(event) => { setPassword(event.target.value) }} />
        <Button variant="contained" sx={{ marginBottom: "45px" }} onClick={register}>Register</Button>
        <Link href="/login">Login</Link>
        <Typography variant="p">Current User: {user?.email}</Typography>
        <Button variant="outlined" color="otherColor" sx={{ marginBottom: "15px" }} onClick={logout}>Sign Out</Button>
      </Box>
    </Container>
  )
}

export default Register
