
import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './components/Pages/Cart';
import HomePage from './components/Pages/HomePage';
import LoginPage from './components/Pages/LoginPage';
import NavBar from './components/Pages/NavBar';
import ProductItem from './components/Pages/ProductItem';

const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/product/:id' element={<ProductItem/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
