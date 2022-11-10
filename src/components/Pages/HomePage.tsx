import { Autocomplete, AutocompleteRenderInputParams, Button, Grid, List, ListItemButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/hook/reduxHooks";
import { productFetch, sortByPrice } from "../redux/products";

const HomePage = () => {

    const products = useAppSelector(state => state.productReducer);
    const dispatch = useAppDispatch();
    const [order, setOrder] = useState(true)
    const [category, setCategory] = useState("All")
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState(products)
 
    useEffect(() => {
        dispatch(productFetch());
    }, [dispatch]);

    const categoryFilter = (cat: string) => {
        const filteredList = products.filter((item) => item.category.name === cat);
        setFilter(filteredList);
    };

    const productSearch = (keyword: string) => {
        const searchRes = products.filter((item) => item.title.includes(keyword));
        setFilter(searchRes);
    }

    return (

        <Box>
           <Box>
            <Button onClick={() => {dispatch(sortByPrice()); setOrder(!order)}}>Sort products</Button>
            <List>
                <ListItemButton onClick={() => {setFilter(products); setCategory('All')}}>All</ListItemButton>
                <ListItemButton onClick={() => {categoryFilter('Clothes'); setCategory('Clothes')}}>Clothes</ListItemButton>
                <ListItemButton onClick={() => {categoryFilter('Electronics'); setCategory('Electronics')}}>Electronics</ListItemButton>
                <ListItemButton onClick={() => {categoryFilter('Furniture'); setCategory('Furniture')}}>Furniture</ListItemButton>
                <ListItemButton onClick={() => {categoryFilter('Shoes'); setCategory('Shoes')}}>Shoes</ListItemButton>
                <ListItemButton onClick={() => {categoryFilter('Others'); setCategory('Others')}}>Others</ListItemButton>
            </List>
            <TextField variant="outlined" label="Search" value={search} onChange={(e)=> {setSearch(e.target.value); productSearch(search)}}/>
           </Box>
            <h2>{`${category}`}</h2>
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
