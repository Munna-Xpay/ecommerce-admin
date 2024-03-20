import React, { useEffect } from 'react'
import PageHead from '../components/PageHead'
import CustomerDetails from '../components/CustomerDetails'
import { Grid } from '@mui/material'
import CustomerRateChart from '../components/CustomerRateChart'
import CustomerSegmentaion from '../components/CustomerSegmentaion'
import { useDispatch } from 'react-redux'
import { fetchUserConversionRate, fetchUsersStat } from '../redux/userSlice'

const Customers = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsersStat())
    dispatch(fetchUserConversionRate())
  }, [])

  return (
    <>
      <PageHead heading='Customers' />
      <CustomerDetails />
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={8}>
          <CustomerRateChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomerSegmentaion />
        </Grid>
      </Grid>
    </>
  )
}

export default Customers