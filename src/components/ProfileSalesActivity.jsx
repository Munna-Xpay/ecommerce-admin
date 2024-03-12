import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const ProfileSalesActivity = ({ sellerStat }) => {

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

    const data = sellerStat?.monthlyStat?.map((item) => {
        const this_month = months[item.month - 1];
        return { name: this_month, income: item.monthlyIncome, expense: 2400 }
    })

    // [
    //     {
    //         name: 'Page A',
    //         uv: 4000,
    //         pv: 2400,
    //         amt: 2400,
    //     },
    //     {
    //         name: 'Page B',
    //         uv: 3000,
    //         pv: 1398,
    //         amt: 2210,
    //     },
    //     {
    //         name: 'Page C',
    //         uv: 2000,
    //         pv: 9800,
    //         amt: 2290,
    //     },
    //     {
    //         name: 'Page D',
    //         uv: 2780,
    //         pv: 3908,
    //         amt: 2000,
    //     },
    //     {
    //         name: 'Page E',
    //         uv: 1890,
    //         pv: 4800,
    //         amt: 2181,
    //     },
    //     {
    //         name: 'Page F',
    //         uv: 2390,
    //         pv: 3800,
    //         amt: 2500,
    //     },
    //     {
    //         name: 'Page G',
    //         uv: 3490,
    //         pv: 4300,
    //         amt: 2100,
    //     },
    //     ];

    return (
        <Paper>
            <Stack p={2} spacing={2}>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Sale Activity</Typography>
                <ResponsiveContainer width="100%" height={130}>
                    <BarChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" />
                        {/* <YAxis /> */}
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="expense" fill="rgb(59 130 246 / .5)" barSize={15} radius={[20, 20, 0, 0]} />
                        <Bar dataKey="income" fill="#000000" barSize={15} radius={[20, 20, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </Stack>
        </Paper>
    )
}

export default ProfileSalesActivity