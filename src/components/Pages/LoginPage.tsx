import { Button, TextField, Typography } from '@mui/material';
import { Box } from "@mui/system";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hook/reduxHooks';
import { authenticate } from '../redux/users';

const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const user = useAppSelector(state => state.userReducer.currentUser)
    const dispatch = useAppDispatch();
    const navigation = useNavigate();
    const onSubmit = async () => {
        try {
            const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {email, password});
            const token = response.data;
            localStorage.setItem("token", token.access_token);
            dispatch(authenticate(token.access_token));
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (user) navigation("/profile");
    }, [user, navigation]);
  return (
    <Box>
        <h1>Login to your account</h1>
        <Box>
            <TextField label='Email:' InputProps={{type: 'email'}} value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
            <TextField label='Password:' InputProps={{type: 'password'}} value={password} onChange={(e) => setPassword(e.target.value)}></TextField>
            <Button onClick={onSubmit}>Login</Button>
        </Box>
    </Box>

  )
}

export default LoginPage