import React, { useEffect, useState } from 'react'
import { Pagination, FormControl, Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow, Grid, LinearProgress, MenuItem, Select, Stack, TextField, Typography, Rating, Menu, IconButton, } from '@mui/material'
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import ReplayIcon from '@mui/icons-material/Replay';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, orderByCategory } from '../redux/orderSlice';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PageHead from '../components/PageHead'
import { BASE_URL } from '../redux/baseUrl';

function Orders() {

  const dispatch = useDispatch('')
  const orders = useSelector(state => state.orderReducer.orderCategory)
  // console.log(orders);
  const allOrders = useSelector(state => state.orderReducer.allOrders)
  // console.log(allOrders);
  const [sortData, setSortData] = useState({
    categoryFilter: "All",
    sort_option: "A-Z"
  })

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllOrders())
  }, [])

  useEffect(() => {
    dispatch(orderByCategory(sortData))
  }, [sortData])

  const orderStatus1 = allOrders.filter((i) => i.orderStatus === 'ordered')
  const orderStatus2 = allOrders.filter((i) => i.orderStatus === 'confirmed')
  const orderStatus3 = allOrders.filter((i) => i.orderStatus === 'canceled')
  const orderStatus4 = allOrders.filter((i) => i.orderStatus === 'refunded')
  const ordered = orderStatus1.length
  const confirmed = orderStatus2.length
  const canceled = orderStatus3.length
  const refunded = orderStatus4.length

  const lastIndexOfItemInAPage = itemsPerPage * currentPage;
  const firstIndexOfItemInAPage = lastIndexOfItemInAPage - itemsPerPage;


  return (
    <>
      <PageHead heading={'Orders'} />
      <Stack mt={2}>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={{ xs: 'center', md: 'end' }} spacing={3} sx={{ marginTop: { xs: 5, md: 0 } }}>
          <FormControl size='small' sx={{ width: { xs: 380, md: 160 } }}>
            <Select
              value={sortData.categoryFilter}
              onChange={(e) => setSortData({ ...sortData, ["categoryFilter"]: e.target.value })}
            >
              <MenuItem value={'All'}>All Products</MenuItem>
              <MenuItem value={'Electronics'}>Electronics</MenuItem>
              <MenuItem value={'Fashion'}>Fashion</MenuItem>
              <MenuItem value={'Groceries'}>Groceries</MenuItem>
            </Select>
          </FormControl>
          <FormControl size='small' sx={{ width: { xs: 380, md: 160 } }}>
            <Select
              value={sortData.sort_option}
              onChange={(e) => setSortData({ ...sortData, ["sort_option"]: e.target.value })}
            >
              <MenuItem selected value={'A-Z'}>By name: A-Z</MenuItem>
              <MenuItem value={'Z-A'}>By name: Z-A</MenuItem>
              <MenuItem value={'rating_low_to_high'}>Rating: Low to High</MenuItem>
              <MenuItem value={'rating_high_to_low'}>Rating: High to Low</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <Grid container mt={2}>
        {/* <Grid item md={3} xs={12} boxShadow={5} >
          <Stack p={2}>
            <Typography fontSize={20} fontWeight={'bold'}>Average Rate(%)</Typography>
            <Box>
              <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}><Typography fontSize={15} fontWeight={'bold'}></Typography><Typography fontSize={15} fontWeight={'bold'}>17%</Typography></Stack>
              <LinearProgress sx={{ height: '13px', borderRadius: '5px', flexGrow: 1 }} variant="determinate" />
            </Box>
          </Stack>
        </Grid> */}
        <Grid item xs={12} md={2} boxShadow={5} p={2} mt={{ xs: 2, md: 0 }} borderRadius={2}>
          <FactCheckIcon sx={{ backgroundColor: 'blue', borderRadius: '4px', color: 'white', padding: '7px' }} />
          <Stack mt={3}>
            <Typography fontSize={20} fontWeight={'bold'}>Ordered</Typography>

            <Typography fontSize={30} fontWeight={'bold'}>{ordered}</Typography>

          </Stack>
        </Grid>
        <Grid item xs={12} md={2} boxShadow={5} marginLeft={{ xs: 0, md: 2 }} p={2} mt={{ xs: 2, md: 0 }} borderRadius={2}>
          <AssignmentTurnedInIcon sx={{ backgroundColor: 'green', borderRadius: '4px', color: 'white', padding: '7px' }} />
          <Stack mt={3}>
            <Typography fontSize={20} fontWeight={'bold'}>Orders Confirmed</Typography>
            <Typography fontSize={30} fontWeight={'bold'}>{confirmed}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={2} boxShadow={5} marginLeft={{ xs: 0, md: 2 }} p={2} mt={{ xs: 2, md: 0 }} borderRadius={2}>
          <DoDisturbIcon sx={{ backgroundColor: 'red', borderRadius: '4px', color: 'white', padding: '7px' }} />
          <Stack mt={3}>
            <Typography fontSize={20} fontWeight={'bold'}>Orders Canceled</Typography>
            <Typography fontSize={30} fontWeight={'bold'}>{canceled}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={2} boxShadow={5} marginLeft={{ xs: 0, md: 2 }} p={2} mt={{ xs: 2, md: 0 }} borderRadius={2}>
          <ReplayIcon sx={{ backgroundColor: 'black', borderRadius: '4px', color: 'white', padding: '7px' }} />
          <Stack mt={3}>
            <Typography fontSize={20} fontWeight={'bold'}>Orders Refunded</Typography>
            <Typography fontSize={30} fontWeight={'bold'}>{refunded}</Typography>
          </Stack>
        </Grid>
      </Grid>
      <TableContainer component={Paper} sx={{ marginTop: '15px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '14px', color: '#035ECF' }}>PRODUCT</TableCell>
              <TableCell sx={{ fontSize: '14px', color: '#035ECF' }}>CATEGORY</TableCell>
              <TableCell sx={{ fontSize: '14px', color: '#035ECF' }}>PRICE</TableCell>
              <TableCell sx={{ fontSize: '14px', color: '#035ECF' }}>ORDER DELIVERY</TableCell>
              <TableCell sx={{ fontSize: '14px', color: '#035ECF' }}>ORDER STATUS</TableCell>
              <TableCell sx={{ fontSize: '14px', color: '#035ECF' }}>RATING</TableCell>
              <TableCell sx={{ fontSize: '14px', color: '#035ECF' }}>ACTIONS</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {orders.slice(firstIndexOfItemInAPage, lastIndexOfItemInAPage).map((order, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Stack direction={'row'}><img width={70} height={55} src={`${BASE_URL}/uploadedFiles/${order?.products.product.thumbnail}`} alt="" /> <Stack marginLeft={1}>
                    <Typography fontWeight={'bold'}>{order.products.product.title}</Typography>
                    <Typography fontSize={13} color={'gray'}>Regular Price: {order.products.product.original_price}</Typography>
                    <Typography fontSize={13} color={'gray'}>Sale Price{order.products.product.discounted_price}</Typography>
                  </Stack>
                  </Stack>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}> {order.products.product.category}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{order.totalPrice}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{order.shippingMethod}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}><Typography sx={{
                  backgroundColor: (() => {
                    switch (order.orderStatus) {
                      case 'ordered':
                        return '#f0ad4e'; // Yellow
                      case 'confirmed':
                        return '#00ba9d'; // Green
                      case 'canceled':
                        return 'red'; // Red
                      case 'completed':
                        return '#035ecf'; // Blue
                      default:
                        return 'transparent'; // Default background color
                    }
                  })(),
                  borderRadius: '20px',
                  color: 'white',
                  width: '100px'
                }} p={1} textAlign={'center'}>{order.orderStatus}</Typography></TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}><Rating name="read-only" value={order.products.product.review_star} readOnly /></TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}> <Stack direction={'row'}> <IconButton><EditIcon sx={{ color: 'black' }} /></IconButton>  <IconButton> <MoreVertIcon sx={{ color: 'black' }} />
                </IconButton></Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={Math.ceil(orders.length / itemsPerPage)} onChange={(e, pageNumber) => setCurrentPage(pageNumber)} sx={{ margin: '30px 0px' }} color="primary" />

    </>
  )
}

export default Orders