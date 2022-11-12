import { TextField } from '@mui/material';
import { Box } from "@mui/system";
import React from 'react';

const LoginPage = () => {

  return (
    <Box>
        <h1>Login to your account</h1>
        <Box>
            <TextField InputProps={{type: 'email'}}>Enter your email address</TextField>
            <TextField InputProps={{type: 'password'}}>Enter the password</TextField>
        </Box>
    </Box>

  )
}

export default LoginPage