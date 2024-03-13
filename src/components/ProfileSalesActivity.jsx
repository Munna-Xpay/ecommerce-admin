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

    const data = sellerStat?.monthlyStat?.map((item, index) => {
        if (index > sellerStat?.monthlyStat.length - 7) {
            const this_month = months[item.month - 1];
            return { name: this_month, income: item.monthlyIncome, expense: 2400 }
        }
    })



    return (
        <Paper>
            <Stack p={2} spacing={2}>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Sale Activity {new Date().getFullYear()}</Typography>
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