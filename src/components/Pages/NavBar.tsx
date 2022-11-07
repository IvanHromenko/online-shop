import { Box, Grid, Typography } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import React from "react";
import {Link} from 'react-router-dom';

const NavBar = () => {

    return (
        <Box>
            <Grid container spacing={5}>
                <Grid item xs={8}><Link to='/'>Online Shop</Link></Grid>
                <Grid item xs={2}><Link to='/cart'><ShoppingBasketIcon/></Link>0</Grid>
            </Grid>
        </Box>
    );
};

export default NavBar;