import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Sidebar from '../components/Sidebar'
import { Button, Drawer, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { adminById } from '../redux/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import Notifications from './Notifications';
import { fetchAllNotifications } from '../redux/notificationSlice';
import toast, { Toaster } from 'react-hot-toast';
import { orderByCategory } from '../redux/orderSlice';


export default function PrimarySearchAppBar() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const admin = useSelector(state => state.userReducer)
    const notifications = useSelector(state => state.notificationReducer.allNotifications)
    let notifys = notifications.filter(item => item.response == "")
    const [drawer, setDrawer] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    console.log(notifys)
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [open, setOpen] = useState(false);
    const [sortData, setSortData] = useState({
        categoryFilter: "All",
        sort_option: "latest"
      })
    const socketConnection = useSelector(state => state.socketReducer.socket)
    // console.log(socketConnection);
    const [notifyMsg, setNotifyMsg] = useState("")
    const [socket, setSocket] = useState(null)


    const toggleDrawer = (isOpen) => () => {
        setOpen(isOpen);
    };



    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    useEffect(() => {
        const token = localStorage.getItem('token')
        const adminId = localStorage.getItem('adminId')
        if (admin.admin === null && token) {
            dispatch(adminById(adminId))
        }
        else if (!token) {
            navigate('/')
        }
    }, [admin.admin])

    useEffect(() => {
        dispatch(fetchAllNotifications())
    }, [])

    //socket io
    useEffect(() => {
        setSocket(socketConnection)
    }, [])

    useEffect(() => {
        socket?.on("getNotify", (msg) => {
            setNotifyMsg(msg)
            // console.log(msg)
        })
        socket?.on("getNotifyCheckout", (msg) => {
            //console.log(msg);
            setNotifyMsg(msg)
            dispatch(orderByCategory(sortData))
        })
        socket?.on("getCancelOrder", (msg) => {
            //console.log(msg);
            setNotifyMsg(msg)
            dispatch(orderByCategory(sortData))
        })
    }, [socket])

    useEffect(() => {
        notifyMsg && toast.success(notifyMsg, { duration: 5000 })
    }, [notifyMsg])

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem onClick={toggleDrawer(true)}>
                <IconButton

                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={notifys.length} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <Link to={'/admin-profile'} style={{ color: 'black', textDecoration: 'none' }}>
                <MenuItem >
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Link>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ height: '80px' }}>
                    {admin.admin &&
                        <Box display={{ xs: 'block', md: 'none' }}>
                            <IconButton

                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: { xs: 0, md: 5 } }}
                                onClick={() => setDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    }
                    <Stack direction={'row'} spacing={1}>
                        <img width={40} height={40} src="https://shop-point.merku.love/assets/logo_light-33bb10d5.svg" alt="" />
                        <Typography fontSize={30} fontWeight={'bold'} color={'white'}>Shop Point</Typography>
                    </Stack>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {admin.admin ?
                            <>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={4} color="error">
                                        <MailIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    onClick={toggleDrawer(true)}
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={notifys.length} color="error">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <Link to={'/admin-profile'} style={{ color: 'white' }}>
                                    <IconButton
                                        size="large"
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={menuId}
                                        aria-haspopup="true"
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton></Link>
                            </> : <Link to={'/'}>
                                <Button variant='text' sx={{ color: '#efefef' }}>Login</Button>
                            </Link>
                        }
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            <Drawer
                anchor='left'
                open={drawer}
                onClose={() => setDrawer(false)}
            >
                <Sidebar setDrawer={setDrawer} />
            </Drawer>


            <Drawer
                anchor='right'
                open={open}
                onClose={toggleDrawer(false)}
            >
                <Notifications />
            </Drawer>
            <Toaster />
        </Box>
    );
}