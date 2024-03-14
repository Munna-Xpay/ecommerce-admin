import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const SellerProfileBox = ({sellerProfile}) => {

    return (
        <Paper sx={{height:'100%'}}>
            <Stack p={2} direction={{ sx: 'column', md: 'row' }} spacing={4} alignItems={{ xs: 'start', md: 'center' }}>
                <Box
                    component={'img'}
                    alt='company icon'
                    src={`http://localhost:4000/uploadedFiles/${sellerProfile?.seller?.company_icon}`}
                    sx={{ objectFit: 'contain', width: { xs: '90%', md: '140px' }, height: { xs: '100px', md: '100%' }, padding: '20px' }}
                />
                <Stack spacing={1}>
                    <Typography variant='h4' sx={{ fontWeight: 'bold' }}>{sellerProfile?.seller?.company_name}</Typography>
                    <a href='#' style={{ textDecoration: 'none', opacity: '.8' }}><Typography gutterBottom variant='body1' sx={{ fontWeight: 'bold' }}>www.something.com</Typography></a>
                    <Typography gutterBottom variant='body1' sx={{}}>{sellerProfile?.seller?.phoneNum}</Typography>
                    <Typography variant='body1' sx={{}}>{sellerProfile?.seller?.email}</Typography>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default SellerProfileBox