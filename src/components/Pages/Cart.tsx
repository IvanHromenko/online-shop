import { Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook/reduxHooks";
import { RootState } from "../redux/store";


const Cart = () => {
    const cart = useAppSelector((state: RootState) => state.cartReducer);
    return (
        <Box>
            {cart.length === 0 ? (
                <Box>
                    <h2>Your shopping cart is empty</h2>
                    <h3><NavLink to='/'>Continue shopping</NavLink></h3>
                </Box>
            ) : (
                cart.map((item) => (
                    <Box>
                        <img src={`${item.product.images}`} alt="cartprod-img"></img>
                        <h3>{item.product.title}</h3>
                    </Box>
                ))
            )}
        </Box>
    );
};

export default Cart;