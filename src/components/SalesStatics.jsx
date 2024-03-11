import { Box, Paper, Stack, Typography } from '@mui/material'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import React from 'react'
import { useSelector } from 'react-redux';
import { formatNumberToK } from '../formatPriceToK';

const SalesStatics = () => {

    const orderStat = useSelector(state => state.orderReducer.orderStat)
    console.log(orderStat)

    const months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",

    ]

    const formatINR = (value) => {
        const formattedNumber = formatNumberToK(value);
        console.log(formattedNumber);
        return formattedNumber
    };

    const data = orderStat.map((item) => {
        const thisMonth = months[item._id - 1]
        return { name: thisMonth, amount: item.monthlyIncome }
    });

    return (
        <Paper sx={{ marginTop: '20px' }}>
            <Stack spacing={1} p={2}>
                <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Sales Statistic {new Date().getFullYear()}</Typography>
                    <Stack alignItems={'center'} direction={'row'} spacing={1}>
                        <Box sx={{ height: '17px', width: '17px', borderRadius: '50%', bgcolor: 'black' }} />
                        <Typography sx={{ fontWeight: 'bold' }}>Revenue</Typography>
                    </Stack>
                </Stack>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis axisLine={false} dataKey="name" />
                        <YAxis tickFormatter={formatINR} axisLine={false} domain={[1000, 1000]} tickCount={5} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="amount" fill="#000000" barSize={15} radius={[20, 20, 0, 0]} />
                        <Bar dataKey="amount" fill="rgb(59 130 246 / .5)" barSize={15} radius={[20, 20, 0, 0]} />
                        {/* Add more <Bar /> components for additional bars */}
                    </BarChart>
                </ResponsiveContainer>
            </Stack>
        </Paper>
    )
}

export default SalesStatics