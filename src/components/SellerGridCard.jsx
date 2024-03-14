import { Box, Button, IconButton, Menu, MenuItem, Paper, Stack } from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

const SellerGridCard = ({ seller }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Link to={'/seller-profile/' + seller._id}>
            <Paper sx={{ position: 'relative' }}>
                <Stack sx={{ height: '220px' }} justifyContent={'center'} alignItems={'center'}>
                    <Box
                        component={'img'}
                        alt='company log'
                        src={`http://localhost:4000/uploadedFiles/${seller?.seller?.company_icon}`}
                        sx={{ width: '120px', height: '120px', objectFit: 'contain' }}
                    />
                </Stack>
                <IconButton
                    sx={{ position: 'absolute', top: '5px', right: '5px' }}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MoreVertIcon color='primary' />
                </IconButton>
                <Menu
                    id="basic-menu"
                    placement="bottom-start"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>View Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Contact</MenuItem>
                    <MenuItem onClick={handleClose}>Share</MenuItem>
                </Menu>
            </Paper>
        </Link>
    )
}

export default SellerGridCard