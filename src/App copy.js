import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'

// import Amazon from './cart/amazon'
// import Cart from './cart/cart'

// function App() {
//   const [cart, setCart] = useState([]);

//   const handleClick = (item) => {
//     if (cart.indexOf(item) !== -1) return;
//     setCart([...cart,item])
//     console.log(cart);
//   }

//   const handleChange = (item, d) => {
//     const ind = cart.indexOf(item)
//     const arr = cart
//     arr[ind].amount += d;

//     if (arr[ind].amount === 0) arr[ind].amount = 1;
//     setCart([...arr]);
//   } 

//   useEffect(() => {
//     console.log("cart change");

//   }, [cart])

//   return(
//     <div>
//       <Amazon handleClick={handleClick}/>
//       <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
//     </div>
//   )
// }

// export default App;


function App() {

  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home handleClick={handleClick} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop handleClick={handleClick} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
