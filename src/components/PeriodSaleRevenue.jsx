import { Paper, Stack, Typography } from '@mui/material'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react'

const PeriodSaleRevenue = () => {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <Paper>
            <Stack p={2} spacing={2} height={'500px'}>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Period Sales Revenue</Typography>
                <ResponsiveContainer width="100%" height={'100%'}>
                    <LineChart width={300} height={100} data={data}>
                        <CartesianGrid strokeDasharray="5 10"/>
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={5} />
                        <XAxis axisLine={false} />
                        <YAxis axisLine={false} />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                </ResponsiveContainer>
            </Stack>
        </Paper>
    )
}

export default PeriodSaleRevenue