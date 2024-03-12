import { Avatar, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import DiamondIcon from '@mui/icons-material/Diamond';
import CountUp from 'react-countup';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const ProfileAvgRate = ({ sellerProfile }) => {
    return (
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} spacing={2}>
            <Paper sx={{ flex: '1' }}>
                <Stack direction={'row'} py={2} px={2} spacing={1} alignItems={'center'}>
                    <Avatar sx={{ bgcolor: '#00ba9d', width: '60px', height: '60px' }} variant="rounded">
                        <DiamondIcon fontSize='large' />
                    </Avatar>
                    <Stack>
                        <Typography variant='h6' sx={{ opacity: '.9', fontWeight: 'bold' }}>₹ <CountUp end={sellerProfile?.total_income} /></Typography>
                        <Typography gutterBottom sx={{ opacity: '.8', fontWeight: 'bold' }}>Income</Typography>
                    </Stack>
                </Stack>
            </Paper>
            <Paper sx={{ flex: '1' }}>
                <Stack direction={'row'} py={2} px={2} spacing={1} alignItems={'center'}>
                    <Avatar sx={{ bgcolor: '#035ecf', width: '60px', height: '60px' }} variant="rounded">
                        <QrCodeScannerIcon fontSize='large' />
                    </Avatar>
                    <Stack>
                        <Typography variant='h6' sx={{ opacity: '.9', fontWeight: 'bold' }}><CountUp end={sellerProfile?.total_orders} /></Typography>
                        <Typography gutterBottom sx={{ opacity: '.8', fontWeight: 'bold' }}>Orders</Typography>
                    </Stack>
                </Stack>
            </Paper>
            <Paper sx={{ flex: '1' }}>
                <Stack direction={'row'} py={2} px={2} spacing={1} alignItems={'center'}>
                    <Avatar sx={{ bgcolor: '#ff5470', width: '60px', height: '60px' }} variant="rounded">
                        <BusinessCenterIcon fontSize='large' />
                    </Avatar>
                    <Stack>
                        <Typography variant='h6' sx={{ opacity: '.9', fontWeight: 'bold' }}>₹ <CountUp end={1400} /></Typography>
                        <Typography gutterBottom sx={{ opacity: '.8', fontWeight: 'bold' }}>Expense</Typography>
                    </Stack>
                </Stack>
            </Paper>
        </Stack>
    )
}

export default ProfileAvgRate