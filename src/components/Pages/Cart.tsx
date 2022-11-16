import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/hook/reduxHooks";
import { RootState } from "../redux/store";
import { CartItem } from "../Types/cart";
import { deleteFromCart } from "../redux/cart";


const Cart = () => {
    const cart = useAppSelector((state: RootState) => state.cartReducer);
    const dispatch = useAppDispatch();

    const subTotal = () => {
        cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    const [total, setTotal] = useState(subTotal());

    useEffect(() => {
        subTotal();
        setTotal(subTotal());
    }, [cart]);

    const deleteItemFromCart = (item: CartItem) => {
        dispatch(deleteFromCart(item.product.id));
    }
    
    return (
        <Box>
            {cart.length === 0 ? (
                <Box>
                    <h2>Your shopping cart is empty</h2>
                    <h3><NavLink to='/'>Continue shopping</NavLink></h3>
                </Box>
            ) : (
                cart.map((item) => (
                    <Box key={item.product.id}>
                        <img src={`${item.product.images}`} alt="cartprod-img"></img>
                        <h3>{item.product.title}</h3>
                        <Button onClick={() => {
                            deleteItemFromCart(item);
                            setTotal();
                        }}>Remove</Button>
                    </Box>
                ))
            )}
        </Box>
    );
};

export default Cart;