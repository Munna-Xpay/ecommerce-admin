import React from 'react'
import { Avatar, Grid, LinearProgress, Paper, Rating, Stack, Typography } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StarIcon from '@mui/icons-material/Star';
import { useSelector } from 'react-redux';

const ReviewsAndUsers = () => {

    const reviewStat = useSelector(state => state.reviewReducer.allReviewStat)

    const rating = reviewStat?.avg_review?.toFixed(1)
    console.log(rating)

    return (
        <Grid container spacing={2} mt={2}>
            <Grid item xs={12} md={2}>
                <Paper>
                    <Stack p={2} spacing={1} height={'170px'} justifyContent={'center'} alignItems={'center'}>
                        <Rating precision={0.5} readOnly value={rating} />
                        <Typography variant='h4' sx={{ fontWeight: 'bold' }} >{reviewStat?.avg_review?.toFixed(1)}</Typography>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }} >Review Score</Typography>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} md={2}>
                <Paper>
                    <Stack p={2} spacing={1} height={'170px'} justifyContent={'center'} alignItems={'center'}>
                        <Avatar sx={{ bgcolor: '#00ba9d' }} variant='rounded'><GroupIcon /></Avatar>
                        <Typography variant='h4' sx={{ fontWeight: 'bold' }} >{reviewStat?.all_reviews?.length}</Typography>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }} >Total</Typography>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} md={2}>
                <Paper>
                    <Stack p={2} spacing={1} height={'170px'} justifyContent={'center'} alignItems={'center'}>
                        <Avatar sx={{ bgcolor: '#035ecf' }} variant='rounded'><PersonAddIcon /></Avatar>
                        <Typography variant='h4' sx={{ fontWeight: 'bold' }} >25%</Typography>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }} >New</Typography>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} md={2}>
                <Paper>
                    <Stack p={2} spacing={1} height={'170px'} justifyContent={'center'} alignItems={'center'}>
                        <Avatar sx={{ bgcolor: '#ff5470' }} variant='rounded'><Diversity3Icon /></Avatar>
                        <Typography variant='h4' sx={{ fontWeight: 'bold' }} >75%</Typography>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }} >Regular </Typography>
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4} >
                <Paper>
                    <Stack p={2} spacing={1} height={'170px'} justifyContent={'center'} alignItems={'center'}>
                        {reviewStat?.review_stat?.map(item => (
                            <Stack width={'100%'} spacing={1} direction={'row'} alignItems={'center'}>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <Typography sx={{ fontWeight: 'bold' }}>{item._id}</Typography>
                                    <StarIcon color='warning' />
                                </Stack>
                                <LinearProgress sx={{ flex: '1', height: '10px', borderRadius: '50px' }} color='warning' value={Math.floor((item.total_review / reviewStat?.all_reviews?.length) * 100)} fourColor variant="determinate" />
                                <Typography sx={{ fontWeight: 'bold' }}>{Math.floor((item.total_review / reviewStat?.all_reviews?.length) * 100)}%</Typography>
                            </Stack>
                        ))
                        }
                    </Stack>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default ReviewsAndUsers