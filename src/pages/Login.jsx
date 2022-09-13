import { useState, useEffect } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { Box, Container, Typography, Button, TextField, Grid, Link, Avatar } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState({})

  let Navigate = useNavigate();

  useEffect(() => {

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  })

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      alert('Login Successful');
      Navigate("/");
    }
    catch (error) {
      console.log(error.message);
      alert('Incorrect Login Details, Please Try Again');
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
        <Typography component="h1" variant="h5" sx={{ marginBottom: "15px" }} >Login</Typography>
        <TextField label="Email" type="email" sx={{ marginBottom: "15px" }} onChange={(event) => { setEmail(event.target.value) }} />
        <TextField label="Password" type="password" sx={{ marginBottom: "15px" }} onChange={(event) => { setPassword(event.target.value) }} />
        <Button variant="contained" sx={{ marginBottom: "45px" }} onClick={login}>Login</Button>
        <Link href="/register">Register</Link>
        <Typography variant="p">Current User: {user?.email}</Typography>
        <Button variant="outlined" color="otherColor" sx={{ marginBottom: "15px" }} onClick={logout}>Sign Out</Button>
      </Box>
    </Container>
  )
}

export default Login