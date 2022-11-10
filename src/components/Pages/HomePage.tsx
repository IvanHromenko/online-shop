import { Grid, List, ListItemButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/hook/reduxHooks";
import { productFetch, sortByPrice } from "../redux/products";

const HomePage = () => {

    const products = useAppSelector(state => state.productReducer);
    const dispatch = useAppDispatch();
    const [order, setOrder] = useState<"asc"|"desc">("asc")
    const [category, setCategory] = useState("All")
    const [filter, setFilter] = useState(products)
    useEffect(() => {
        dispatch(productFetch());
    }, [dispatch]);

    const categoryFilter = (cat: string) => {
        const filteredList = products.filter((item) => item.category.name === cat);
        setFilter(filteredList);
    };

    return (

        <Box>
           <Box>
            <List>
                <ListItemButton onClick={() => {setFilter(products); setCategory('All')}}>All</ListItemButton>
                <ListItemButton onClick={() => {categoryFilter('Clothes'); setCategory('Clothes')}}>Clothes</ListItemButton>
                <ListItemButton onClick={() => {categoryFilter('Electronics'); setCategory('Electronics')}}>Electronics</ListItemButton>
                <ListItemButton onClick={() => {categoryFilter('Furniture'); setCategory('Furniture')}}>Furniture</ListItemButton>
                <ListItemButton onClick={() => {categoryFilter('Shoes'); setCategory('Shoes')}}>Shoes</ListItemButton>
                <ListItemButton onClick={() => {categoryFilter('Others'); setCategory('Others')}}>Others</ListItemButton>
            </List>
           </Box>

           <Grid container spacing={3}>
                {
                    filter.map((item) => (
                        <Grid item xs={4} key={item.id}>
                            <NavLink to={`product/${item.id}`}><img src={`${item.images}`}/></NavLink>
                            <NavLink to={`product/${item.id}`}><h4>{`${item.title}`}</h4></NavLink>
                            <h4>{`$${item.price}`}</h4>
                        </Grid>
                    ))
                }
           </Grid>
        </Box>
    );
};

export default HomePage;
