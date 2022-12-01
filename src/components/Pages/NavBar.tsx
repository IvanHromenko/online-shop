import { Badge, Box, Grid } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import React, { useEffect, useState } from "react";

import {Link} from "react-router-dom";
import { useAppSelector } from "../redux/hook/reduxHooks";

const NavBar = () => {
    const user = useAppSelector(state => state.userReducer.currentUser);
    const productsCart = useAppSelector(state => state.cartReducer);

    const productsCartCount = () => productsCart.reduce((total, cartItem) => total + cartItem.quantity, 0);
    const [count, setCount] = useState(productsCartCount());

    useEffect(() => {
        productsCartCount();
        setCount(productsCartCount());
    }, [productsCartCount]);

    return (
        <Box>
            <Grid container spacing={5}>
                <Grid item xs={8}><Link to='/'><h2>Online Store</h2></Link></Grid>
                <Grid item xs={2}><Link to='/cart'><Badge badgeContent={count}><ShoppingBasketIcon/></Badge></Link></Grid>
                { user ? (<Grid item xs={2}><Link to='/profile'>Profile</Link></Grid>)
                : (<Grid item xs={2}><Link to='/login'><h3>Login</h3></Link></Grid>)}
            </Grid>
        </Box>
    );
};

export default NavBar;