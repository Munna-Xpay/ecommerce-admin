import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import CachedIcon from '@mui/icons-material/Cached';
import TopProductsCategory from '../components/TopProductsCategory';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import TopProductsElectronics from '../components/TopProductsElectronics';
import TopProductsFashion from '../components/TopProductsFashion';
import TopProductsGroceries from '../components/TopProductsGroceries';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useDispatch } from 'react-redux';
import { getPriceByCategory, getProductsByCategory, getSellerProductsByCategory } from '../redux/categorySlice';
import PageHead from '../components/PageHead'


function TopProducts() {
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getPriceByCategory())
  dispatch(getProductsByCategory())
  dispatch(getSellerProductsByCategory())
})
  return (
    <>
     <PageHead heading={'Top Products'}/>
      <TopProductsCategory />
      <Grid container mt={4}>

        <Grid item xs={12} md={5.5}>
          <Stack direction={'row'} spacing={1}><LaptopMacIcon sx={{ backgroundColor: 'blue', color: 'white', padding: '5px', borderRadius: '3px', height: '20px', width: '20px' }} /> <Typography fontSize={20} fontWeight={'bold'} >Electronics</Typography></Stack>
          <TopProductsElectronics />
        </Grid>
        <Grid item sx={{
          marginLeft: {
            xs: 0,
            md: 10
          }
        }} xs={12} md={5.5}>
          <Stack direction={'row'} spacing={1}><i style={{ marginTop: '12px' }} class="fa-solid fa-shirt fa-xl"></i> <Typography fontSize={20} fontWeight={'bold'} >Fashion</Typography></Stack>
          <TopProductsFashion />
        </Grid>
        <Grid item sx={{
          marginLeft: {
            xs: 0,
            md: 0
          }
        }} xs={12} md={5.5}>
          <Stack direction={'row'} spacing={1}><RestaurantIcon sx={{ backgroundColor: 'black', color: 'white', padding: '5px', borderRadius: '3px', height: '20px', width: '20px' }} /> <Typography fontSize={20} fontWeight={'bold'} >Groceries</Typography></Stack>
          {/* <TopProductsGroceries /> */}
        </Grid>
      </Grid>
    </>
  )
}

export default TopProducts