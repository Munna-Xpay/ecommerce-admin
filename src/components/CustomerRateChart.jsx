import { Translate } from '@mui/icons-material';
import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'A', value: 250 },
    { name: 'B', value: 500 },
    { name: 'C', value: 750 },
    { name: 'D', value: 1000 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

const CustomerRateChart = () => {
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
                                    outerRadius={210}
                                    fill="#8884d8"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack spacing={2} p={2}>
                        <Typography sx={{ fontWeight: 'bold' }} >Total Customers - 1203 in 2024</Typography>
                        <Typography sx={{ opacity: '.7', textAlign: 'justify' }} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repr
                            ehenderit laborum repellat rem amet, accusantium deleniti provident nam tenetur ipsam accusamus, praesentium laudan
                            tium? Iusto a ducimus, laborum exercitationem dolores corrupti harum!
                        </Typography>
                        <Stack direction={'row'} spacing={1}>
                            <Box sx={{ width: '22px', height: '22px', borderRadius: '50%', bgcolor: '#8884d8' }} />
                            <Typography sx={{ fontWeight: 'bold', opacity: '.7', maxWidth: '300px' }} >New Customers - 14%, Which is 146 visitors</Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={1}>
                            <Box sx={{ width: '22px', height: '22px', borderRadius: '50%', bgcolor: '#82ca9d' }} />
                            <Typography sx={{ fontWeight: 'bold', opacity: '.7', maxWidth: '300px' }} >Frequent Customers - 8%, Which is 16 visitors</Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={1}>
                            <Box sx={{ width: '22px', height: '22px', borderRadius: '50%', bgcolor: '#ffc658' }} />
                            <Typography sx={{ fontWeight: 'bold', opacity: '.7', maxWidth: '250px' }} >Idle Users - 14%, Which is 146 visitors</Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={1}>
                            <Box sx={{ width: '22px', height: '22px', borderRadius: '50%', bgcolor: '#ff7300' }} />
                            <Typography sx={{ fontWeight: 'bold', opacity: '.7', maxWidth: '300px' }} >Cart Abandoners - 17%, Which is 186 visitors</Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default CustomerRateChart