import { Button, Grid, List, ListItemButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/hook/reduxHooks";
import { productFetch } from "../redux/products";
import "../styles/home.css"

const HomePage = () => {

    const products = useAppSelector(state => state.productReducer);
    const dispatch = useAppDispatch();
    const [order, setOrder] = useState<'asc' | 'desc'>('asc')
    const [category, setCategory] = useState("All")
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState(products)
 
    useEffect(() => {
        dispatch(productFetch());
        setFilter(products);
        categoryFilter("All");
    }, []);

    const categoryFilter = (cat: string) => {
        const filteredList = products.filter((item) => item.category.name === cat);
        setFilter(filteredList);
    };

    const productSearch = (keyword: string) => {
        const searchRes = products.filter((item) => item.title.includes(keyword));
        setFilter(searchRes);
    }

    const sortProducts = () => {
        setOrder((order) => {
            if (order === 'asc') {
                setFilter([...filter].sort((a, b) => (a.price > b.price ? 1 : -1)));
                return 'desc'
            } else {
                setFilter([...filter].sort((a, b) => (a.price < b.price ? 1 : -1)));
                return 'asc'}
            }
        )}

    return (

        <Box className="home-page">
           <Box>
                <List id="category-list">
                    <ListItemButton onClick={() => {setFilter(products); setCategory('All')}}>All</ListItemButton>
                    <ListItemButton onClick={() => {categoryFilter('Clothes'); setCategory('Clothes')}}>Clothes</ListItemButton>
                    <ListItemButton onClick={() => {categoryFilter('Electronics'); setCategory('Electronics')}}>Electronics</ListItemButton>
                    <ListItemButton onClick={() => {categoryFilter('Furniture'); setCategory('Furniture')}}>Furniture</ListItemButton>
                    <ListItemButton onClick={() => {categoryFilter('Shoes'); setCategory('Shoes')}}>Shoes</ListItemButton>
                    <ListItemButton onClick={() => {categoryFilter('Others'); setCategory('Others')}}>Others</ListItemButton>
                </List>
               
            </Box>
            <Box className="category-search">
            <Grid container spacing={3}>
                <Grid item xs={4}><Button onClick={sortProducts}>Sort products</Button></Grid>
                <Grid item xs={4}><h2>{`${category}`}</h2></Grid>
                <Grid item xs={4}><TextField variant="outlined" id="search" label="Search" value={search} onChange={(e)=> {setSearch(e.target.value); productSearch(search)}}/></Grid>
            </Grid>
            </Box>
            <Grid container spacing={3}>
                {
                    filter.map((item) => (
                        <Grid item xs={4} key={item.id}>
                            <Box className="product-item-home">
                            <NavLink to={`product/${item.id}`}><img src={`${item.images}`} alt="product"/></NavLink>
                            <NavLink to={`product/${item.id}`}><h4>{`${item.title}`}</h4></NavLink>
                            <h4>{`$${item.price}`}</h4>
                            </Box>
                        </Grid>
                    ))
                }
           </Grid>
        </Box>
    );
};

export default HomePage;
