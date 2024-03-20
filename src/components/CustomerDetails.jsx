import { Avatar, Grid, LinearProgress, Paper, Rating, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StarIcon from '@mui/icons-material/Star';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CustomerDetails = () => {

    const userStat = useSelector(state => state.userReducer.userStat)
    const userConverRate = useSelector(state => state.userReducer.userConversionRate)
    console.log(userConverRate)

    const showUserConversionRate = userConverRate.map((item, index) => {
        return (
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell sx={{ fontWeight: 'bold' }} align="right">{item._id}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">{item.total_count}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">{item.total_orders}</TableCell>
            </TableRow>
        )
    })

    return (
        <Grid container spacing={2} mt={1}>
            <Grid item xs={12} md={2}>
                <Link to={'/customers-table'} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Paper>
                        <Stack p={2} spacing={1} height={'170px'} justifyContent={'center'} alignItems={'center'}>
                            <Avatar sx={{ bgcolor: '#00ba9d' }} variant='rounded'><Diversity3Icon /></Avatar>
                            <Typography variant='h4' sx={{ fontWeight: 'bold' }} >{userStat?.allUsers?.length}</Typography>
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }} >All</Typography>
                        </Stack>
                    </Paper>
                </Link>
            </Grid>
            <Grid item xs={12} md={2}>
                <Paper>
                    <Stack p={2} spacing={1} height={'170px'} justifyContent={'center'} alignItems={'center'}>
                        <Avatar sx={{ bgcolor: '#035ecf' }} variant='rounded'><PersonAddIcon /></Avatar>
                        <Typography variant='h4' sx={{ fontWeight: 'bold' }} >{userStat?.newUsersCount}</Typography>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }} >New</Typography>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} md={2}>
                <Paper>
                    <Stack p={2} spacing={1} height={'170px'} justifyContent={'center'} alignItems={'center'}>
                        <Avatar sx={{ bgcolor: '#ff5470' }} variant='rounded'><GroupIcon /></Avatar>
                        <Typography variant='h4' sx={{ fontWeight: 'bold' }} >{userStat?.allUsers?.filter(item => item.ordersCount > 1)?.length}</Typography>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }} >Regular </Typography>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} >
                <Paper>
                    <Stack p={2} height={{ xs: '100%', md: '170px' }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Conversion Rate</Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <TableContainer >
                                    <Table sx={{ minWidth: '100%' }} size="small" aria-label="a dense table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="right">Year</TableCell>
                                                <TableCell align="right">Customer</TableCell>
                                                <TableCell align="right">Orders</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {showUserConversionRate}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack direction={'row'} spacing={3} justifyContent={{ xs: 'flex-start', md: 'center' }}>
                                    <Stack spacing={1}>
                                        <Typography variant='h4' sx={{ fontWeight: 'bold' }} >{userConverRate[0]?.total_count}</Typography>
                                        <Typography sx={{ fontWeight: 'bold', opacity: '.7' }} >Regular</Typography>
                                        <Stack direction={'row'} alignItems={'center'} sx={{ color: 'green' }}>
                                            <ArrowDropUpIcon />
                                            <Typography sx={{ opacity: '.8', fontWeight: 'bold' }}>+ 45.10%</Typography>
                                        </Stack>
                                    </Stack>
                                    <Stack spacing={1}>
                                        <Typography variant='h4' sx={{ fontWeight: 'bold' }} >+{userConverRate[0]?.total_count - userConverRate[1]?.total_count}</Typography>
                                        <Typography sx={{ fontWeight: 'bold', opacity: '.7' }} >New</Typography>
                                        <Stack direction={'row'} alignItems={'center'} sx={{ color: 'green' }}>
                                            <ArrowDropUpIcon />
                                            <Typography sx={{ opacity: '.8', fontWeight: 'bold' }}>+ 45.10%</Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Stack>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default CustomerDetails