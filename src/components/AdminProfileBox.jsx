import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button, Chip, Grid, IconButton, Input, Paper, Stack, Typography } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfilePic } from '../redux/userSlice';
import { BASE_URL } from '../redux/baseUrl';
import toast, { Toaster } from 'react-hot-toast';


const AdminProfileBox = () => {

    const admin = useSelector(state => state.userReducer.admin)
    const dispatch = useDispatch()
    const [proPic, setProPic] = useState(null)
    const [proPicUrl, setProPicUrl] = useState("")
    console.log(proPic)

    useEffect(() => {
        proPic ? setProPicUrl(URL.createObjectURL(proPic)) : setProPicUrl("")
    }, [proPic])

    const handleProfileUpdate = () => {
        if (proPic) {
            const body = new FormData();
            body.append("profileImage", proPic)
            dispatch(updateProfilePic(body));
            setProPic(null)
            setProPicUrl("")
        }
    }


    return (
        <Stack spacing={2}>
            <Paper sx={{ width: '100%' }}>
                <Stack spacing={2} alignItems={'center'} p={2} justifyContent={'center'}>
                    <Box sx={{ position: 'relative' }}>
                        <Avatar src={proPicUrl ? proPicUrl : `${BASE_URL}/uploadedFiles/${admin?.profileImage}`} sx={{ width: '130px', height: '130px' }} />
                        <IconButton sx={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#050a9d', position: 'absolute', bottom: '0px', right: '0px', "&:hover": { bgcolor: '#050a9d', } }}>
                            <label htmlFor="upload-photo">
                                <input
                                    id="upload-photo"
                                    type="file"
                                    onChange={(e) => setProPic(e.target.files[0])}
                                    style={{ display: 'none', cursor: 'pointer' }}
                                />
                                <InsertPhotoIcon fontSize='small' sx={{ color: 'white', cursor: 'pointer' }} />
                            </label>
                        </IconButton>
                        {proPicUrl && <IconButton onClick={handleProfileUpdate} sx={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#050a9d', position: 'absolute', bottom: '0px', right: '-45px', "&:hover": { bgcolor: '#050a9d', } }}>
                            <SaveIcon fontSize='small' sx={{ color: 'white', cursor: 'pointer' }} />
                        </IconButton>}
                        {proPicUrl && <IconButton onClick={(e) => setProPic(null)} sx={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#050a9d', position: 'absolute', bottom: '0px', right: '-90px', "&:hover": { bgcolor: '#050a9d', } }}>
                            <CancelIcon fontSize='small' sx={{ color: 'white', cursor: 'pointer' }} />
                        </IconButton>}
                    </Box>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{admin && admin.fullName}</Typography>
                    <Chip label='Admin' color='error' sx={{ padding: '0px 20px', fontWeight: 'bold' }} />
                    <Typography sx={{ fontWeight: 'bold' }} color={'primary'}>Last visit at {new Date().toLocaleDateString()}</Typography>
                    <Button fullWidth variant='contained'>Log out</Button>
                </Stack>
            </Paper>
            {/* <Paper sx={{ width: '100%' }}>
                <Stack spacing={2} p={3} justifyContent={'center'}>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <NotificationsIcon color='error' />
                        <Typography>Notifications(2)</Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <ChatBubbleIcon color='success' />
                        <Typography>Messages(6)</Typography>
                    </Stack>
                </Stack>
            </Paper> */}
            <Paper sx={{ width: '100%' }}>
                <Stack spacing={2} p={2} justifyContent={'center'}>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <MailIcon color='primary' />
                        <Typography>{admin && admin.email}</Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <LocationOnIcon color='primary' />
                        <Typography>{admin && admin.country}</Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <PhoneAndroidIcon color='primary' />
                        <Typography>{admin && admin.phoneNum}</Typography>
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

export default AdminProfileBox