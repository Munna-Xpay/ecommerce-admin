import { Translate } from '@mui/icons-material';
import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';


const CustomerRateChart = () => {

    const userStat = useSelector(state => state.userReducer.userStat)
    const usersOf2024 = userStat?.allUsers?.filter(item => {
        console.log(new Date(item.registeredAt)?.getUTCFullYear())
        return new Date(item.registeredAt)?.getUTCFullYear() == 2024
    })
    console.log(usersOf2024)

    const data = [
        { name: 'New Customers', value: userStat?.newUsersCount },
        { name: 'Frequente Customers', value: usersOf2024?.filter(item => item.ordersCount > 1)?.length },
        { name: 'Idle Customers', value: usersOf2024?.filter(item => item.ordersCount < 1)?.length },
    ];

    const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

    return (
        <Paper sx={{ padding: '20px' }}>
            <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }} >Customer Retention Rate</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Stack spacing={2} height={'100%'}>
                        <ResponsiveContainer width="100%" height={'100%'}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={200}
                                    fill="#8884d8"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack spacing={3} p={2}>
                        <Typography sx={{ fontWeight: 'bold' }} >Total Customers - {usersOf2024?.length} in 2024</Typography>
                        <Typography sx={{ opacity: '.7', textAlign: 'justify' }} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repr
                            ehenderit laborum repellat rem amet, accusantium deleniti provident nam tenetur ipsam accusamus, praesentium laudan
                            tium? Iusto a ducimus, laborum exercitationem dolores corrupti harum!
                        </Typography>
                        <Stack direction={'row'} spacing={1}>
                            <Box sx={{ width: '22px', height: '22px', borderRadius: '50%', bgcolor: '#8884d8' }} />
                            <Typography sx={{ fontWeight: 'bold', opacity: '.7', maxWidth: '300px' }} >New Customers - {Math.ceil((userStat?.newUsersCount / usersOf2024?.length) * 100)}%, Which is {userStat?.newUsersCount} visitors</Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={1}>
                            <Box sx={{ width: '22px', height: '22px', borderRadius: '50%', bgcolor: '#82ca9d' }} />
                            <Typography sx={{ fontWeight: 'bold', opacity: '.7', maxWidth: '300px' }} >Frequent Customers - {Math.ceil((usersOf2024?.filter(item => item.ordersCount > 1)?.length / usersOf2024?.length) * 100)}%, Which is {usersOf2024?.filter(item => item.ordersCount > 1)?.length} visitors</Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={1}>
                            <Box sx={{ width: '22px', height: '22px', borderRadius: '50%', bgcolor: '#ffc658' }} />
                            <Typography sx={{ fontWeight: 'bold', opacity: '.7', maxWidth: '250px' }} >Idle Users - {Math.ceil((usersOf2024?.filter(item => item.ordersCount < 1)?.length / usersOf2024?.length) * 100)}%, Which is {usersOf2024?.filter(item => item.ordersCount < 1)?.length} visitors</Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default CustomerRateChart