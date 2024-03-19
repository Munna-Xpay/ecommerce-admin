import { Paper, Stack, Typography } from '@mui/material'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react'
import { formatNumberToK } from '../formatPriceToK';

const PeriodSaleRevenue = ({ dailyStat }) => {

    const formatINR = (value) => {
        const formattedNumber = formatNumberToK(value);
        console.log(formattedNumber);
        return formattedNumber
    };

    const data = dailyStat?.dailyStat?.map((item, index) => {
        if (index > dailyStat?.dailyStat.length - 7) {
            return {
                date: new Date(item.date).toDateString().slice(3, -4),
                "income ₹": item.dailyIncome
            }
        }
    })

    return (
        <Paper>
            <Stack p={2} spacing={2} height={'500px'}>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Period Sales Revenue</Typography>
                <ResponsiveContainer width="100%" height={'100%'}>
                    <LineChart width={300} height={100} data={data}>
                        <CartesianGrid strokeDasharray="5 10" />
                        <Line type="monotone" dataKey="income ₹" stroke="#8884d8" strokeWidth={5} />
                        <XAxis axisLine={false} dataKey='date' />
                        <YAxis tickFormatter={formatINR} axisLine={false} />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                </ResponsiveContainer>
            </Stack>
        </Paper>
    )
}

export default PeriodSaleRevenue