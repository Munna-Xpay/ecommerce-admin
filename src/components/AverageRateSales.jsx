import { Avatar, Box, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import DiamondIcon from '@mui/icons-material/Diamond';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import CountUp from 'react-countup';
import { useSelector } from 'react-redux';

const AverageRateSales = () => {

    const orderStat = useSelector(state => state.orderReducer.orderStat)
    const income = orderStat.map(item => item.monthlyIncome).length > 0 ? orderStat.map(item => item.monthlyIncome).reduce((a, b) => a + b) : 0;
    const orders = orderStat.map(item => item.orderCount).length > 0 ? orderStat.map(item => item.orderCount).reduce((a, b) => a + b) : 0;
    console.log(orderStat)

    return (
        <>
            <Paper sx={{ marginTop: '40px' }}>
                <Grid container spacing={3} px={3} pb={2}>
                    <Grid item xs={12} md={2}>
                        <Stack sx={{ border: '2px solid #e2e1e1', borderRadius: '10px', bgcolor: '#f9f9f9' }} px={3} py={4} spacing={3} alignItems={'center'}>
                            <Box
                                component={'img'}
                                sx={{ objectFit: 'contain', height: '100px' }}
                                alt='icon'
                                src='https://shop-point.merku.love/assets/logo_light-33bb10d5.svg'
                            />
                            <Typography variant='h6' sx={{ opacity: '.9', textAlign: 'center' }}>ShopPoint</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <Stack spacing={3}>
                            <Stack spacing={1}>
                                <Typography variant='h4' sx={{ opacity: '.9', fontWeight: 'bold' }}>ShopPoint - Retail</Typography>
                                <Typography sx={{ opacity: '.9' }}>Lorem ipsum is placeholder text commonly used in the graphic, p</Typography>
                            </Stack>
                            <Stack spacing={2}>
                                <Typography variant='h5' sx={{ opacity: '.9', fontWeight: 'bold' }}>Average Rate - {new Date().getFullYear()}</Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={2.5}>
                                        <Stack direction={'row'} spacing={3}>
                                            <Avatar sx={{ bgcolor: '#00ba9d', width: '50px', height: '50px' }} variant="rounded">
                                                <DiamondIcon fontSize='large' />
                                            </Avatar>
                                            <Stack>
                                                <Typography variant='h5' sx={{ opacity: '.9', fontWeight: 'bold' }}>₹ <CountUp end={income} duration={1} /></Typography>

                                                <Typography gutterBottom sx={{ opacity: '.8', fontWeight: 'bold' }}>Income</Typography>
                                                <Stack direction={'row'} alignItems={'center'} sx={{ color: 'green' }}>
                                                    <ArrowDropUpIcon />
                                                    <Typography sx={{ opacity: '.8', fontWeight: 'bold' }}>+ 45.10%</Typography>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={2.5}>
                                        <Stack direction={'row'} spacing={3}>
                                            <Avatar sx={{ bgcolor: '#ff5470', width: '50px', height: '50px' }} variant="rounded">
                                                <BusinessCenterIcon fontSize='large' />
                                            </Avatar>
                                            <Stack>
                                                <Typography variant='h5' sx={{ opacity: '.9', fontWeight: 'bold' }}>₹ 1200</Typography>
                                                <Typography gutterBottom sx={{ opacity: '.8', fontWeight: 'bold' }}>Expense</Typography>
                                                <Stack direction={'row'} alignItems={'center'} sx={{ color: 'red' }}>
                                                    <ArrowDropDownIcon />
                                                    <Typography sx={{ opacity: '.8', fontWeight: 'bold' }}>+ 12.10%</Typography>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={2.5}>
                                        <Stack direction={'row'} spacing={3}>
                                            <Avatar sx={{ bgcolor: '#035ecf', width: '50px', height: '50px' }} variant="rounded">
                                                <QrCodeScannerIcon fontSize='large' />
                                            </Avatar>
                                            <Stack>
                                                <Typography variant='h5' sx={{ opacity: '.9', fontWeight: 'bold' }}><CountUp end={orders} duration={1} /></Typography>
                                                <Typography gutterBottom sx={{ opacity: '.8', fontWeight: 'bold' }}>New Orders</Typography>
                                                <Stack direction={'row'} alignItems={'center'} sx={{ color: 'green' }}>
                                                    <ArrowDropUpIcon />
                                                    <Typography sx={{ opacity: '.8', fontWeight: 'bold' }}>+ 45.10%</Typography>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default AverageRateSales