import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useAppSelector } from "../redux/hook/reduxHooks";
import { RootState } from "../redux/store";
import { Product } from "../Types/products";

const ProductItem = () => {

    const { id } = useParams();
    const [product, setProduct] = useState<Product>();
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
                        <img src={`${product?.images}`} />
                    </Grid>
                    <Grid item xs={4}>
                        <h1>{product?.title}</h1>
                        <h2>${product?.price}</h2>
                        <Typography>{product?.description}</Typography>
                    </Grid>
                </Grid>
            
        </Box>
    );
};

export default ProductItem;