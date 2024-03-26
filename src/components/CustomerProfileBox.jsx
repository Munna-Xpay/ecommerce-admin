import React from 'react'
import { Avatar, Box, Button, Chip, Grid, IconButton, Input, Paper, Stack, Typography } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../redux/baseUrl';
import { useSelector } from 'react-redux';

const CustomerProfileBox = () => {

    const { id } = useParams()
    const customer = useSelector(state => state.userReducer.allUsers?.find(item => item._id == id))
    console.log(customer)

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Paper >
                <Stack spacing={2} alignItems={'center'} p={2} justifyContent={'center'}>
                    <Avatar src={customer?.profileImage && `${BASE_URL}/uploadedFiles/${customer?.profileImage}`} sx={{ width: '130px', height: '130px' }} />
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{customer && customer.fullName}</Typography>
                    <Chip label='Customer' color='error' sx={{ padding: '0px 20px', fontWeight: 'bold' }} />
                    <Typography sx={{ fontWeight: 'bold' }} color={'primary'}>Registered at {new Date(customer?.registeredAt).toLocaleDateString()}</Typography>
                </Stack>
            </Paper>
            <Paper sx={{ width: '100%',flex:'1' }}>
                <Stack spacing={3} p={2} justifyContent={'center'}>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <MailIcon color='primary' />
                        <Typography>{customer?.email && customer.email}</Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <LocationOnIcon color='primary' />
                        <Typography>{customer?.country && customer.country}</Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <PhoneAndroidIcon color='primary' />
                        <Typography>{customer?.phoneNum && customer.phoneNum}</Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <InsertDriveFileIcon color='primary' />
                        <Button>Profile information file</Button>
                    </Stack>
                </Stack>
            </Paper>
        </Stack>
    )
}

export default CustomerProfileBox