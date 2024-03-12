import { Button, LinearProgress, Paper, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const SalesProfitByCategory = () => {
    return (
        <Paper sx={{ flex: '1' }}>
            <Stack p={3} spacing={2} justifyContent={'space-between'}>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Sales Profit By Category</Typography>
                <Stack spacing={1}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', opacity: '.8' }}>Electronics</Typography>
                        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>₹ 1.5k</Typography>
                    </Stack>
                    <LinearProgress sx={{ height: '15px', borderRadius: '50px', opacity: '.7' }} variant="determinate" value={20} />
                </Stack>
                <Stack spacing={1}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', opacity: '.8' }}>Fashion</Typography>
                        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>₹ 1.5k</Typography>
                    </Stack>
                    <LinearProgress sx={{ height: '15px', borderRadius: '50px', opacity: '.7' }} color='error' variant="determinate" value={50} />
                </Stack>
                <Stack spacing={1}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', opacity: '.8' }}>Food & Drinks</Typography>
                        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>₹ 1.5k</Typography>
                    </Stack>
                    <LinearProgress sx={{ height: '15px', borderRadius: '50px', opacity: '.7' }} color='warning' variant="determinate" value={70} />
                </Stack>
                <Stack spacing={1}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', opacity: '.8' }}>Others</Typography>
                        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>₹ 1.5k</Typography>
                    </Stack>
                    <LinearProgress sx={{ height: '15px', borderRadius: '50px', opacity: '.7' }} color='secondary' variant="determinate" value={80} />
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Stack spacing={1}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Review Rate</Typography>
                        <Rating readOnly value={3} />
                    </Stack>
                    <Stack spacing={1}>
                        <Typography>From 290 responders</Typography>
                        <Link><Button>View All Reviews</Button></Link>
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default SalesProfitByCategory