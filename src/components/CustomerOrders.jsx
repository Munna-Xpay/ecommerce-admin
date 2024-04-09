import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderByCategory } from '../redux/orderSlice'
import { useParams } from 'react-router-dom'
import { IconButton, Pagination, Paper, Rating, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { BASE_URL } from '../redux/baseUrl'
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const CustomerOrders = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const orders = useSelector(state => state.orderReducer.orderCategory.filter(item => item.userId == id))
    console.log(orders)
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    const lastIndexOfItemInAPage = itemsPerPage * currentPage;
    const firstIndexOfItemInAPage = lastIndexOfItemInAPage - itemsPerPage;

    useEffect(() => {
        dispatch(orderByCategory(''))
    }, [])

    const showUserOrders = orders.slice(firstIndexOfItemInAPage, lastIndexOfItemInAPage).map((order, index) => (
        <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                <Stack direction={'row'}>
                    {/* <img width={70} style={{ objectFit: 'contain' }} height={55} src={`${order?.products.product.thumbnail}`} alt="" /> */}
                    <img width={70} height={55} style={{ objectFit: 'contain' }} src={`${BASE_URL}/uploadedFiles/${order?.products.product.thumbnail}`} alt="" />
                    <Stack marginLeft={1}>
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
                        case 'Ordered':
                            return '#f0ad4e';
                        case 'Confirmed':
                            return '#00ba9d';
                        case 'Canceled':
                            return 'red';
                        case 'Completed':
                            return '#035ecf';
                        case 'Shipped':
                            return '#f55505';
                        default:
                            return 'black';
                    }
                })(),
                borderRadius: '20px',
                color: 'white',
                width: '100px'
            }} p={1} textAlign={'center'}>{order.orderStatus}</Typography></TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}><Rating name="read-only" value={order.products.product.review_star} readOnly /></TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>{new Date(order.createdAt).toDateString()}</TableCell>
        </TableRow>
    ))

    return (
        <>
            <Paper sx={{ marginTop: '20px' }}>
                {showUserOrders.length > 0 ?
                    <TableContainer component={Paper} sx={{ marginTop: '15px' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontSize: '17px', color: '#035ECF' }}>Product</TableCell>
                                    <TableCell sx={{ fontSize: '17px', color: '#035ECF' }}>Category</TableCell>
                                    <TableCell sx={{ fontSize: '17px', color: '#035ECF' }}>Price</TableCell>
                                    <TableCell sx={{ fontSize: '17px', color: '#035ECF' }}>Order Delivery</TableCell>
                                    <TableCell sx={{ fontSize: '17px', color: '#035ECF' }}>Order Status</TableCell>
                                    <TableCell sx={{ fontSize: '17px', color: '#035ECF' }}>Rating</TableCell>
                                    <TableCell sx={{ fontSize: '17px', color: '#035ECF' }}>Date</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {showUserOrders}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :
                    <Typography variant='h5' color={'primary'} sx={{ textAlign: 'center', padding: '40px', fontWeight: 'bold' }}>This customer has'nt ordered any products yet !</Typography>}
            </Paper>
            {showUserOrders.length != 0 && <Pagination count={Math.ceil(orders.length / itemsPerPage)} onChange={(e, pageNumber) => setCurrentPage(pageNumber)} sx={{ margin: '30px 0px' }} color="primary" />}
        </>
    )
}

export default CustomerOrders