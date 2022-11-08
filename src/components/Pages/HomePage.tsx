import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/hook/reduxHooks";
import { productFetch } from "../redux/products";

const HomePage = () => {

    const products = useAppSelector(state => state.productReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(productFetch())
    }, [dispatch])

    return (
        <Box>
           <Grid container spacing={3}>
                {
                    products.map((item) => (
                        <Grid item xs={4} key={item.id}>
                            <NavLink to={`product/${item.id}`}><img src={`${item.images}`}/></NavLink>
                            <h4>{`${item.title}, $${item.price}`}</h4>
                        </Grid>
                    ))
                }
           </Grid>
        </Box>
    );
};

export default HomePage;
