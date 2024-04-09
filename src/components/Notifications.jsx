import { Avatar, Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../redux/baseUrl'
import { updateNotification } from '../redux/notificationSlice'
import { editProduct } from '../redux/productSlice'
import { useNavigate } from 'react-router-dom'

const Notifications = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const notifications = useSelector(state => state.notificationReducer.allNotifications)
    console.log(notifications)

    const handleAccept = (id, item_id) => {
        dispatch(editProduct({ id: item_id, data: { isActive: true }, navigate }))
        dispatch(updateNotification({ id, data: { response: "Accepted" } }))
    }

    const handleReject = (id) => {
        dispatch(updateNotification({ id, data: { response: "Rejected" } }))
    }

    const showAllNotifications = notifications.map((item, index) => {
        return (
            <Stack spacing={3} mb={2}>
                <Stack direction={'row'} spacing={2}>
                    <Avatar sx={{ width: '40px', height: '40px' }} variant='rounded' src={`${BASE_URL}/uploadedFiles/${item?.userProPic}`} />
                    <Stack>
                        <Typography sx={{ fontWeight: 'bold' }} gutterBottom>{item?.username}</Typography>
                        <Typography sx={{ opacity: '.9' }}>{item?.notifyMsg}</Typography>
                        <Stack direction={'row'} spacing={1} alignItems={'center'}>
                            <Typography sx={{ opacity: '.7' }}>{new Date(item?.createdAt).toDateString()}</Typography>
                            <Box sx={{ width: '17px', height: '17px', borderRadius: '50%', bgcolor: '#00000070' }} />
                            <Typography sx={{ opacity: '.7' }}>{item?.type}</Typography>
                        </Stack>
                        <Typography variant='body2' sx={{ opacity: '.7' }}>{new Date(item?.createdAt).toLocaleTimeString()}</Typography>
                        {!item.response ? <Stack mt={1} direction={'row'} spacing={2} alignItems={'center'}>
                            <Button variant='outlined' size='small' color='success' onClick={() => handleAccept(item._id, item.item_id)}>Accept</Button>
                            <Button variant='outlined' size='small' color='error' onClick={() => handleReject(item._id)}>Decline</Button>
                        </Stack>
                            :
                            <Typography color={'secondary'} sx={{ fontWeight: 'bold' }}>- {item.response}</Typography>
                        }
                    </Stack>
                </Stack>
                <Divider />
            </Stack>
        )
    })

    return (
        <Stack p={2} spacing={2} width={{ xs: '250px', md: 300 }}>
            <Typography gutterBottom variant='h5' sx={{ fontWeight: 'bold' }}>Notifications</Typography>
            <Divider />
            {showAllNotifications.length > 0
                ?
                showAllNotifications
                :
                <Typography color={'secondary'}>Notification is empty !</Typography>
            }
        </Stack>
    )
}

export default Notifications