import { Chip, Grid, MenuItem, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PageHead from '../components/PageHead';
import SellerProfileBox from '../components/SellerProfileBox';
import ProfileTransactionBox from '../components/ProfileTransactionBox';
import ProfileSalesActivity from '../components/ProfileSalesActivity';
import ProfileExpenseProfitBox from '../components/ProfileExpenseProfitBox';
import PeriodSaleRevenue from '../components/PeriodSaleRevenue';
import SalesProfitByCategory from '../components/SalesProfitByCategory';
import ProfileAvgRate from '../components/ProfileAvgRate';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSellersWithSalesDetails } from '../redux/sellerSlice';

const SellersProfile = () => {

  const { id } = useParams();
  const dispatch = useDispatch()
  const sellerProfile = useSelector(state => state.sellerReducer.sallerSalesStat.find((item) => item._id == id))
  console.log(sellerProfile)


  useEffect(() => {
    dispatch(fetchAllSellersWithSalesDetails(''))
  }, [])

  return (
    <>
      <PageHead heading={'Seller Profile Details'} />
      <Grid mt={1} mb={3} container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography gutterBottom variant='h6' sx={{ fontWeight: 'bold' }}>Sales Period :</Typography>
          <Stack direction={'row'} justifyContent={{ xs: 'center', md: 'start' }} spacing={1} alignItems={'center'}>
            <TextField size='small' sx={{ bgcolor: 'white' }} variant='outlined' type='date' />
            <Typography>-</Typography>
            <TextField size='small' sx={{ bgcolor: 'white' }} variant='outlined' type='date' />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack alignItems={{ xs: 'center', md: 'flex-end' }}>
            <Typography gutterBottom variant='h6' sx={{ fontWeight: 'bold' }}>Popular Tags :</Typography>
            <Stack flexWrap={'wrap'} direction={'row'} rowGap={1} spacing={1}>
              <Chip label='Top Rated' color='primary' sx={{ fontWeight: 'bold' }}></Chip>
              <Chip label='New In' color='primary' sx={{ fontWeight: 'bold' }}></Chip>
              <Chip label='Best Seller' color='primary' sx={{ fontWeight: 'bold' }}></Chip>
              <Chip label='A - Z' color='primary' sx={{ fontWeight: 'bold' }}></Chip>
              <Chip label='rating' color='primary' sx={{ fontWeight: 'bold' }}></Chip>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
          <SellerProfileBox sellerProfile={sellerProfile} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProfileTransactionBox />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProfileSalesActivity />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProfileExpenseProfitBox />
        </Grid>
        <Grid item xs={12} md={6}>
          <PeriodSaleRevenue />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack height={'100%'} spacing={2}>
            <SalesProfitByCategory />
            <ProfileAvgRate />
          </Stack>
        </Grid>
      </Grid>
      
    </>
  )
}

export default SellersProfile