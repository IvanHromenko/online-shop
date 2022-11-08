
import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './components/Pages/Cart';
import HomePage from './components/Pages/HomePage';
import NavBar from './components/Pages/NavBar';
import Product from './components/Pages/Product';

const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
