import { Avatar, Box, Button, Divider, Grid, LinearProgress, Paper, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import DiamondIcon from '@mui/icons-material/Diamond';
import CountUp from 'react-countup';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { formatNumberToK } from '../formatPriceToK';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../redux/baseUrl';

const SellerListCard = ({ sellerDetails }) => {
    return (
        <Paper>
            <Grid container spacing={4} p={3}>
                <Grid item xs={12} md={2}>
                    <Stack spacing={1} justifyContent={'center'}>
                        <Box
                            component={'img'}
                            alt='company icon'
                            src={`${BASE_URL}/uploadedFiles/${sellerDetails?.seller?.company_icon}`}
                            sx={{ width: '100%', height: '170px', objectFit: 'contain' }}
                        />
                        <Link to={'/seller-profile/' + sellerDetails._id}><Button sx={{ width: '100%' }} size='small' variant='contained' color='primary'>Profile</Button></Link>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Stack height={'100%'} justifyContent={'center'}>
                        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>{sellerDetails?.seller?.company_name}</Typography>
                        <a href='#' style={{ textDecoration: 'none', opacity: '.8' }}><Typography gutterBottom variant='body1' sx={{ fontWeight: 'bold' }}>www.something.com</Typography></a>
                        <Typography sx={{ opacity: '.8' }} gutterBottom variant='body1'>{sellerDetails?.seller?.phoneNum}</Typography>
                        <Typography sx={{ opacity: '.8' }} gutterBottom>{sellerDetails?.seller?.country}</Typography>
                        <Typography sx={{ opacity: '.8' }} gutterBottom>{sellerDetails?.seller?.address}</Typography>
                        <Typography sx={{ opacity: '.8' }} variant='body1'>{sellerDetails?.seller?.email}</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Stack height={'100%'} justifyContent={'center'} spacing={2}>
                        <Stack spacing={1}>
                            <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.8' }}>Statisctics :</Typography>
                            <Stack direction={'row'}>
                                <Stack direction={'row'} px={2} spacing={1} alignItems={'center'}>
                                    <Avatar sx={{ bgcolor: '#00ba9d', width: '50px', height: '50px' }} variant="rounded">
                                        <DiamondIcon fontSize='large' />
                                    </Avatar>
                                    <Stack>
                                        <Typography variant='h6' sx={{ opacity: '.9', fontWeight: 'bold' }}>₹ <CountUp end={sellerDetails?.total_income} /></Typography>
                                        <Typography gutterBottom sx={{ opacity: '.8', fontWeight: 'bold' }}>Income</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction={'row'} px={2} spacing={1} alignItems={'center'}>
                                    <Avatar sx={{ bgcolor: '#035ecf', width: '50px', height: '50px' }} variant="rounded">
                                        <QrCodeScannerIcon fontSize='large' />
                                    </Avatar>
                                    <Stack>
                                        <Typography variant='h6' sx={{ opacity: '.9', fontWeight: 'bold' }}><CountUp end={sellerDetails?.total_orders} /></Typography>
                                        <Typography gutterBottom sx={{ opacity: '.8', fontWeight: 'bold' }}>Orders</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Divider />
                        <Stack spacing={1}>
                            <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.8' }}>Review Rate :</Typography>
                            <Rating sx={{ padding: '0px 16px' }} precision={0.5} value={sellerDetails?.avg_rating != null ? sellerDetails?.avg_rating : 0} readOnly />
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack height={'100%'}>
                        <Typography gutterBottom variant='h5' sx={{ fontWeight: 'bold', opacity: '.8' }}>Profit By Category</Typography>
                        <Stack spacing={1}>
                            {sellerDetails?.categories[0]?.category
                                ?
                                sellerDetails?.categories?.map((item) => (
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
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default SellerListCard