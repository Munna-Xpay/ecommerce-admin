import { Avatar, LinearProgress, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { useSelector } from 'react-redux';

const CustomerSegmentaion = () => {

    const userStat = useSelector(state => state.userReducer.userStat)
    console.log(userStat)

    return (
        <Paper sx={{ height: '100%' }}>
            <Stack p={2} spacing={2}>
                <Stack spacing={2}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }} >Demographic Segmention By Age</Typography>
                    {
                        userStat?.usersAgeRange?.map(item => (
                            <Stack spacing={1}>
                                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                    <Typography variant='body1' sx={{ fontWeight: 'bold', opacity: '.8' }}>Age {item?.ageRange}</Typography>
                                    <Typography variant='body1' sx={{ fontWeight: 'bold' }}>{item?.count}</Typography>
                                </Stack>
                                <LinearProgress sx={{ height: '17px', borderRadius: '50px' }} variant="determinate" value={Math.ceil((item?.count / userStat?.allUsers?.length) * 100)} />
                            </Stack>
                        ))
                    }
                </Stack>
                <Stack spacing={2}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }} >Segmention By Gender</Typography>
                    {userStat.allUsers && <Stack direction={'row'} spacing={5}>
                        <Stack spacing={1}>
                            <Avatar sx={{ bgcolor: 'blue' }} variant='rounded'><MaleIcon /></Avatar>
                            <Typography variant='h5' sx={{ fontWeight: 'bold' }} >{Math.ceil(((userStat?.allUsers?.filter(item => item.gender == 'Male')?.length) / userStat?.allUsers?.length) * 100)} %</Typography>
                        </Stack>
                        <Stack spacing={1}>
                            <Avatar sx={{ bgcolor: 'blue' }} variant='rounded'><FemaleIcon /></Avatar>
                            <Typography variant='h5' sx={{ fontWeight: 'bold' }} >{Math.ceil(((userStat?.allUsers?.filter(item => item.gender == 'Female')?.length) / userStat?.allUsers?.length) * 100)} %</Typography>
                        </Stack>
                        <Stack spacing={1}>
                            <Avatar sx={{ bgcolor: 'blue' }} variant='rounded'><MaleIcon /></Avatar>
                            <Typography variant='h5' sx={{ fontWeight: 'bold' }} >{Math.ceil(((userStat?.allUsers?.filter(item => item.gender == 'Others')?.length) / userStat?.allUsers?.length) * 100)} %</Typography>
                        </Stack>
                    </Stack>}
                    <Typography sx={{ opacity: '.7' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur consequatur optio, perspiciatis </Typography>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default CustomerSegmentaion