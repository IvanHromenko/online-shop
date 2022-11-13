import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hook/reduxHooks';
import { logOut } from '../redux/users';


const Profile = () => {
    const user = useAppSelector(state => state.userReducer.currentUser);
    const dispatch = useAppDispatch();
    const navigation = useNavigate();
    const onLogout = () => {
        dispatch(logOut())
    }
    useEffect(() => {
        if (!user) navigation("/login");
    }, [user, navigation]);
  return (
    <Box>
        <Typography>Welcome {user?.name}</Typography>
        <Button onClick={onLogout}>Log out</Button>
    </Box>
  )
}

export default Profile