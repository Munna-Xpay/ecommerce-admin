import { KeyboardArrowRight } from '@mui/icons-material'
import {  List, ListItemButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [dashboardOpen, setDashboardOpen] = useState(false);
     const [productsOpen,setProductsOpen]=useState(false)
    const handleDashboardClick = () => {
      setDashboardOpen(!dashboardOpen);
    };
    const handleProductClick=()=>{
        setProductsOpen(!productsOpen)
    }
  return (
    
    
        <List
      sx={{ width: '700px', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
       <Stack direction={'row'}>
        <img width={40} height={40} src="https://shop-point.merku.love/assets/logo_light-33bb10d5.svg" alt="" /> 
        <Typography fontSize={30} fontWeight={'bold'} color={'black'}>Shop Point</Typography>
       </Stack>  
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleDashboardClick}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        {dashboardOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={dashboardOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 10 }}>
            <Stack direction={'column'} spacing={4}>
            <Link to={'/'} style={{textDecoration:'none'}}> <ListItemText sx={{color:'black'}}>Sales Analytics</ListItemText></Link>
            <Link to={'/seller-list'} style={{textDecoration:'none'}}> <ListItemText sx={{color:'black'}}>Sellers List</ListItemText></Link>
            <Link to={'/seller-table'} style={{textDecoration:'none'}}> <ListItemText sx={{color:'black'}}>Sellers Table</ListItemText></Link>
            <Link to={'/seller-grid'} style={{textDecoration:'none'}}><ListItemText sx={{color:'black'}}>Sellers Grid</ListItemText></Link> 
            <Link to={'/seller-profile/:id'} style={{textDecoration:'none'}}> <ListItemText sx={{color:'black'}}>Seller Profile</ListItemText></Link>
            <Link to={'/revenew-by-period'} style={{textDecoration:'none'}}><ListItemText sx={{color:'black'}}>Revenew By Period</ListItemText></Link> 
            </Stack>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleProductClick}>
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText  primary="Products" />
        {productsOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={productsOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 10 }}>
            <Stack direction={'column'} spacing={4}>
            <Link to={'/top-product'} style={{textDecoration:'none'}}> <ListItemText sx={{color:'black'}}>Top Products</ListItemText></Link>
            <Link to={'/product-grid'} style={{textDecoration:'none'}}> <ListItemText sx={{color:'black'}}>Products Grid</ListItemText></Link> 
            <Link to={'/product-management'} style={{textDecoration:'none'}}> <ListItemText sx={{color:'black'}}>Products Management</ListItemText></Link>
            <Link to={'/add-product'} style={{textDecoration:'none'}}><ListItemText sx={{color:'black'}}>Add Product</ListItemText></Link> 
            <Link to={'/banners'} style={{textDecoration:'none'}}><ListItemText sx={{color:'black'}}>Banners</ListItemText></Link> 
            </Stack>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <Link to={'/orders'} style={{textDecoration:'none'}}> <ListItemText sx={{color:'black'}}>Orders</ListItemText></Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <StarHalfIcon />
        </ListItemIcon>
        <Link to={'/reviews'} style={{textDecoration:'none'}}> <ListItemText sx={{color:'black'}}>Reviews</ListItemText></Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AccountBoxIcon />
        </ListItemIcon>
        <Link to={'/customers'} style={{textDecoration:'none'}}> <ListItemText sx={{color:'black'}} >Customers</ListItemText></Link> 
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AccountBalanceWalletIcon />
        </ListItemIcon>
        <Link to={'/transactions'} style={{textDecoration:'none'}}><ListItemText sx={{color:'black'}} >Transactions</ListItemText></Link>   
      </ListItemButton>
    </List>
    
    
  )
}

export default Sidebar