import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} p={3}>
                <Typography>Copyright © 2024 by ShopPoint. All Right Reserved</Typography>
                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <Typography>Powered By </Typography>
                    <Box
                        component={'img'}
                        alt=''
                        src='https://shop-point.merku.love/assets/logo_light-33bb10d5.svg'
                        sx={{ width: '40px', height: '40px', objectFit: 'contain' }}
                    />
                </Stack>
            </Stack>
        </>
    )
}

export default Footer