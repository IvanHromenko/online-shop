import { Box, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hook/reduxHooks';
import { logOut, fetchAllUsers } from '../redux/users';


const Profile = () => {
    const user = useAppSelector(state => state.userReducer.currentUser);
    const usersList = useAppSelector(state => state.userReducer.users)
    const dispatch = useAppDispatch();
    const navigation = useNavigate();
    const onLogout = () => {
        dispatch(logOut())
    }
    useEffect(() => {
        if (!user) navigation("/login");
    }, [user, navigation]);

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch]);

  return (
    <Box>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <img src={`${user?.avatar}`} alt="user-img"/>
            </Grid>
            <Grid item xs={4}>
                <h1>{user?.name}</h1>
                <h2>{user?.email}</h2>
                <Button onClick={onLogout}>Log out</Button>
            </Grid>
        </Grid>
        {user?.role === "admin" && (
            usersList.map((item) => (
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableCell>Id</TableCell>
                            <TableCell>User name</TableCell>
                            <TableCell>User email</TableCell>
                        </TableHead>
                        <TableBody>
                            <TableCell>{`${item.id}`}</TableCell>
                            <TableCell>{`${item.name}`}</TableCell>
                            <TableCell>{`${item.email}`}</TableCell>
                        </TableBody>
                    </Table>
                </TableContainer>
            ))
        )}
    </Box>
  )
}

export default Profile