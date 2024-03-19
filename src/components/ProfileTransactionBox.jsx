import { Avatar, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { formatNumberToK } from '../formatPriceToK';


const ProfileTransactionBox = ({ sellerProfile }) => {
    return (
        <Paper sx={{ height: '100%' }}>
            <Stack p={3} spacing={1} height={'90%'} justifyContent={'center'}>
                <Avatar variant='rounded' sx={{ bgcolor: '#00ba9d' }}><SwapHorizIcon fontSize='large' /></Avatar>
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>Transactions</Typography>
                <Stack direction={'row'} alignItems={'center'} sx={{ color: 'green' }}>
                    <ArrowDropUpIcon />
                    <Typography sx={{ opacity: '.8', fontWeight: 'bold' }}>+ 45.10%</Typography>
                </Stack>
                <Typography variant='h4' sx={{ fontWeight: 'bold' }}>₹ {sellerProfile?.total_income && formatNumberToK(sellerProfile?.total_income)}</Typography>
            </Stack>
        </Paper>
    )
}

export default ProfileTransactionBox