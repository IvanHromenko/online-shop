import React, { useEffect, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/hook/reduxHooks";
import { RootState } from "../redux/store";
import { CartItem } from "../Types/cart";
import { deleteFromCart, removeFromCart, addToCart } from "../redux/cart";
import "../styles/cart.css"


const Cart = () => {
    const cart = useAppSelector((state: RootState) => state.cartReducer);
    const dispatch = useAppDispatch();

    const subTotal = () => cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

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
                <Box className="empty-cart">
                    <h2>Your shopping cart is empty</h2>
                    <h3><NavLink to='/'>Continue shopping</NavLink></h3>
                </Box>
            ) : (
                <Box className="cart-with-products">
                    <h2>Total: ${total}</h2>
                    <Grid container spacing={2} className="cart-products">
                        {cart.map((item) => (
                            <Grid item xs={12} key={item.product.id} className="cart-product">
                                <img src={`${item.product.images}`} alt="cartprod-img"></img>
                                <Box>
                                <h3>{item.product.title}</h3>
                                <h4>Amount: {item.quantity}, Price: ${item.product.price}</h4>
                                <Button onClick={() => {
                                    const obj: CartItem = {product: item.product, quantity: 1};
                                    dispatch(addToCart(obj));
                                }}>+</Button><Button onClick={() => {
                                    if(item.quantity === 1){
                                        deleteItemFromCart(item)
                                    } else {
                                        const obj: CartItem = {product: item.product, quantity: 1};
                                        dispatch(removeFromCart(obj));
                                    }
                                    }} >-</Button>
                                <Button onClick={() => {
                                    deleteItemFromCart(item);
                                    setTotal(0);
                                } }>Remove</Button>
                                </Box>
                            </Grid>
                        ))};
                    </Grid>
                </Box>
            )
            }
           
        </Box>
         
    );};

export default Cart;