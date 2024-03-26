import React, { useEffect } from 'react'
import PageHead from '../components/PageHead'
import { Button, Grid } from '@mui/material'
import CustomerProfileBox from '../components/CustomerProfileBox'
import CustomerFullDetailsBox from '../components/CustomerFullDetailsBox'
import { useDispatch } from 'react-redux'
import { fetchAllUsers } from '../redux/userSlice'
import CustomerOrders from '../components/CustomerOrders'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const CustomerProfile = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllUsers(''))
    }, [])

    return (
        <>
            <Link to={'/customers-table'}><Button sx={{ marginTop: '10px' }} startIcon={<ArrowBackIosIcon />} size='small' >Back</Button></Link>
            <PageHead heading='Customer Profile' />
            <Grid container spacing={2} my={1}>
                <Grid item xs={12} md={3}>
                    <CustomerProfileBox />
                </Grid>
                <Grid item xs={12} md={9}>
                    <CustomerFullDetailsBox />
                </Grid>
            </Grid>
            <CustomerOrders />
            <Toaster />
        </>
    )
}

export default CustomerProfile