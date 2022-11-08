import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/hook/reduxHooks";
import { productFetch } from "../redux/productSlice";

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
                            <img src={`${item.images}`}/>
                            <h4>{`${item.title}`}</h4>
                        </Grid>
                    ))
                }
           </Grid>
        </Box>
    );
};

export default HomePage;
