import React, { useEffect } from 'react'
import PageHead from '../components/PageHead'
import { Grid } from '@mui/material'
import CustomerProfileBox from '../components/CustomerProfileBox'
import CustomerFullDetailsBox from '../components/CustomerFullDetailsBox'
import { useDispatch } from 'react-redux'
import { fetchAllUsers } from '../redux/userSlice'
import CustomerOrders from '../components/CustomerOrders'

const CustomerProfile = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllUsers(''))
    }, [])

    return (
        <>
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
        </>
    )
}

export default CustomerProfile