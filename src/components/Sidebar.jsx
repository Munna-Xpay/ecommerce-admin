import { KeyboardArrowRight } from '@mui/icons-material'
import { List, ListItemButton, Stack, Typography } from '@mui/material'
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
  const [productsOpen, setProductsOpen] = useState(false)
  const handleDashboardClick = () => {
    setDashboardOpen(!dashboardOpen);
  };
  const handleProductClick = () => {
    setProductsOpen(!productsOpen)
  }
  return (


    <List
      sx={{ width: '700px',height:'100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" >
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleDashboardClick}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText  ><Typography fontWeight={'bold'} fontSize={17}>Dashboard</Typography></ListItemText>
        {dashboardOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={dashboardOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{
            '&:hover': {
              bgcolor: 'transparent',
            },
            '&:hover .MuiTouchRipple-root': {
              display: 'none', 
            },
            pl: 10
          }}>
            <Stack direction={'column'} spacing={4}>
              <Link to={'/sales-analytics'} style={{ textDecoration: 'none' }}> <ListItemText sx={{ color: 'black' }}><Typography sx={{ ":hover": { color: 'black' } }} fontWeight={'bold'} color={'#6E757f'} fontSize={15}>Sales Analytics</Typography></ListItemText></Link>
              <Link to={'/seller-list'} style={{ textDecoration: 'none' }}> <ListItemText sx={{ color: 'black' }}><Typography sx={{ ":hover": { color: 'black' } }} fontWeight={'bold'} color={'#6E757f'} fontSize={15}>Sellers List</Typography></ListItemText></Link>
              <Link to={'/seller-table'} style={{ textDecoration: 'none' }}> <ListItemText sx={{ color: 'black' }}><Typography sx={{ ":hover": { color: 'black' } }} fontWeight={'bold'} color={'#6E757f'} fontSize={15}>Sellers Table</Typography></ListItemText></Link>
              <Link to={'/seller-grid'} style={{ textDecoration: 'none' }}><ListItemText sx={{ color: 'black' }}><Typography sx={{ ":hover": { color: 'black' } }} fontWeight={'bold'} color={'#6E757f'} fontSize={15}>Sellers Grid</Typography></ListItemText></Link>
              <Link to={'/add-seller'} style={{ textDecoration: 'none' }}><ListItemText sx={{ color: 'black' }}><Typography sx={{ ":hover": { color: 'black' } }} fontWeight={'bold'} color={'#6E757f'} fontSize={15}>Add Seller</Typography></ListItemText></Link>

            </Stack>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleProductClick}>
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText><Typography fontWeight={'bold'} fontSize={17}>Products</Typography></ListItemText>
        {productsOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={productsOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{
            '&:hover': {
              bgcolor: 'transparent'
            },
            '&:hover .MuiTouchRipple-root': {
              display: 'none',
            },
            pl: 10
          }}>
            <Stack direction={'column'} spacing={4}>
              <Link to={'/top-product'} style={{ textDecoration: 'none' }}> <ListItemText sx={{ color: 'black', }}><Typography sx={{ ":hover": { color: 'black' } }} fontWeight={'bold'} color={'#6E757f'} fontSize={15}>Top Products</Typography></ListItemText></Link>
              <Link to={'/product-grid'} style={{ textDecoration: 'none' }}> <ListItemText sx={{ color: 'black' }}><Typography sx={{ ":hover": { color: 'black' } }} fontWeight={'bold'} color={'#6E757f'} fontSize={15}>Products Grid</Typography></ListItemText></Link>
              <Link to={'/product-management'} style={{ textDecoration: 'none' }}> <ListItemText sx={{ color: 'black' }}><Typography sx={{ ":hover": { color: 'black' } }} fontWeight={'bold'} color={'#6E757f'} fontSize={15}>Products Management</Typography></ListItemText></Link>
              <Link to={'/add-product'} style={{ textDecoration: 'none' }}><ListItemText sx={{ color: 'black' }}><Typography sx={{ ":hover": { color: 'black' } }} fontWeight={'bold'} color={'#6E757f'} fontSize={15}>Add Product</Typography></ListItemText></Link>
              <Link to={'/banners'} style={{ textDecoration: 'none' }}><ListItemText sx={{ color: 'black' }}><Typography sx={{ ":hover": { color: 'black' } }} fontWeight={'bold'} color={'#6E757f'} fontSize={15}>Banners</Typography></ListItemText></Link>
            </Stack>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <Link to={'/orders'} style={{ textDecoration: 'none' }}> <ListItemText sx={{ color: 'black' }}><Typography fontWeight={'bold'} fontSize={17}>Orders</Typography></ListItemText></Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <StarHalfIcon />
        </ListItemIcon>
        <Link to={'/reviews'} style={{ textDecoration: 'none' }}> <ListItemText sx={{ color: 'black' }}><Typography fontWeight={'bold'} fontSize={17}>Reviews</Typography></ListItemText></Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AccountBoxIcon />
        </ListItemIcon>
        <Link to={'/customers'} style={{ textDecoration: 'none' }}> <ListItemText sx={{ color: 'black' }} ><Typography fontWeight={'bold'} fontSize={17}>Customers</Typography></ListItemText></Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AccountBalanceWalletIcon />
        </ListItemIcon>
        <Link to={'/transactions'} style={{ textDecoration: 'none' }}><ListItemText sx={{ color: 'black' }} ><Typography fontWeight={'bold'} fontSize={17}>Transaction</Typography></ListItemText></Link>
      </ListItemButton>
    </List>


  )
}

export default Sidebar