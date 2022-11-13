import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cart";
import { useAppDispatch } from "../redux/hook/reduxHooks";
import { CartItem } from "../Types/cart";

import { Product } from "../Types/products";

const ProductItem = () => {

    const { id } = useParams();
    const [product, setProduct] = useState<Product>();
    const [count, setCount] = useState(1);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const getProduct = async () => {
        const response = await fetch(
            `https://api.escuelajs.co/api/v1/products/${id}`
        )
            .then((response) => response.json())
            .then((response) => response);
        setProduct(response);
        };
        getProduct();
    }, []);
  
    return (
        
        <Box>
            
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <img src={`${product?.images}`} alt="product-img"/>
                    </Grid>
                    <Grid item xs={4}>
                        <h1>{product?.title}</h1>
                        <h2>${product?.price}</h2>
                        <Typography>{product?.description}</Typography>
                        <Typography>{`Quantity: ${count}`}</Typography>
                        <Button onClick={() => {setCount(Math.max(count - 1, 1))}}>-</Button><Button onClick={() => {setCount(count+1)}}>+</Button>
                        <Button onClick={() => {
                            const obj: CartItem = {product: product!, quantity: count}
                            dispatch(addToCart(obj));
                            setCount(1);
                        }}>Add to cart</Button>
                    </Grid>
                </Grid>
            
        </Box>
    );
};

export default ProductItem;