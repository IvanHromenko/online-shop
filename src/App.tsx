
import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './components/Pages/Cart';
import HomePage from './components/Pages/HomePage';
import LoginPage from './components/Pages/LoginPage';
import NavBar from './components/Pages/NavBar';
import ProductItem from './components/Pages/ProductItem';
import Profile from './components/Pages/Profile';
import { useAppDispatch } from './components/redux/hook/reduxHooks';
import { authenticate } from './components/redux/users';

const App = () => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {dispatch(authenticate(token))} 
  })
  return (
    <Box>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/product/:id' element={<ProductItem/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
