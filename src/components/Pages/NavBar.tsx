import { Box, Typography } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import React from "react";
import {Link} from 'react-router-dom';

const NavBar = () => {

    return (
        <Box>
            <Link to='/'>Online Shop</Link>
            <Link to='/cart'><ShoppingBasketIcon/></Link><Typography>0</Typography>

        </Box>
    );
};

export default NavBar;