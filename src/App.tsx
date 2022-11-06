
import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './components/Pages/Cart';
import HomePage from './components/Pages/HomePage';
import NavBar from './components/Pages/NavBar';

const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
