import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
