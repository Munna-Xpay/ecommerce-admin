import { Button, LinearProgress, Paper, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { formatNumberToK } from '../formatPriceToK'

const SalesProfitByCategory = ({ sellerProfile }) => {
    return (
        <Paper sx={{ flex: '1' }}>
            <Stack p={3} spacing={2} justifyContent={'space-between'}>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Sales Profit By Category</Typography>
                {sellerProfile?.categories[0]?.category
                    ?
                    sellerProfile?.categories?.map((item) => (
                        <Stack spacing={1}>
                            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold', opacity: '.8' }}>{item.category}</Typography>
                                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>₹ {formatNumberToK(item.total_income)}</Typography>
                            </Stack>
                            <LinearProgress sx={{ height: '10px', borderRadius: '50px', opacity: '.7' }} variant="determinate" value={item.total_income.toString().length} />
                        </Stack>
                    ))
                    :
                    <Typography variant='h6' color={'error'} sx={{ textAlign: 'center', padding: '50px 0px' }}>Seller has'nt added any products yet</Typography>
                }

                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Stack spacing={1}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Review Rate</Typography>
                        <Rating readOnly value={sellerProfile?.avg_rating != null ? sellerProfile?.avg_rating : 0} precision={0.5} />
                    </Stack>
                    <Stack spacing={1}>
                        {/* <Typography>From 290 responders</Typography> */}
                        <Link><Button>View All Reviews</Button></Link>
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default SalesProfitByCategory