import React, { useEffect } from 'react'
import PageHead from '../components/PageHead'
import AverageRateSales from '../components/AverageRateSales'
import { Grid } from '@mui/material'
import SalesStatics from '../components/SalesStatics'
import TotalReport from '../components/TotalReport'
import { useDispatch } from 'react-redux'
import { fetchOrderStat } from '../redux/orderSlice'

const SalesAnalytics = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOrderStat())
  }, [])

  return (
    <>
      <PageHead heading={'Sales Analytics'} />
      <AverageRateSales />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <SalesStatics />
        </Grid>
        <Grid item xs={12} md={6}>
          <TotalReport />
        </Grid>
      </Grid>
    </>
  )
}

export default SalesAnalytics