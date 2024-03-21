import React, { useEffect, useState } from 'react'
import PageHead from '../components/PageHead'
import { Button, FormControl, Grid, InputLabel, MenuItem, Pagination, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../redux/userSlice';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

const CustomersTable = () => {

    const dispatch = useDispatch()
    const allUsers = useSelector(state => state.userReducer.allUsers)
    const [sort, setSort] = useState('registered_asc');
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    console.log(allUsers)
    const lastIndexOfItemInAPage = itemsPerPage * currentPage;
    const firstIndexOfItemInAPage = lastIndexOfItemInAPage - itemsPerPage;

    const handleChange = (event) => {
        setSort(event.target.value);
    };

    useEffect(() => {
        dispatch(fetchAllUsers(sort))
    }, [sort])

    const showAllUsers = allUsers.slice(firstIndexOfItemInAPage, lastIndexOfItemInAPage).map((item, index) => {
        return (
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    <Typography p={1}>{item._id}</Typography>
                </TableCell>
                <TableCell align="left">{item.fullName}</TableCell>
                <TableCell align="left">{item.email}</TableCell>
                <TableCell align="left">{new Date(item.registeredAt).toDateString()}</TableCell>
                <TableCell align="center">{item.ordersCount}</TableCell>
                <TableCell align="left"><Link to={'/customer-profile/' + item._id}><Button startIcon={<VisibilityIcon />} size='small'>Show User</Button></Link></TableCell>
            </TableRow>
        )
    })

    return (
        <>
            <PageHead heading='Customers Table' />
            <Grid mt={1} container spacing={2}>
                <Grid item xs={12} md={6}>
                    {/* <Typography gutterBottom variant='h6' sx={{ fontWeight: 'bold' }}>Sales Period :</Typography>
                    <Stack direction={'row'} justifyContent={{ xs: 'center', md: 'start' }} spacing={1} alignItems={'center'}>
                        <TextField size='small' sx={{ bgcolor: 'white' }} variant='outlined' type='date' />
                        <Typography>-</Typography>
                        <TextField size='small' sx={{ bgcolor: 'white' }} variant='outlined' type='date' />
                    </Stack> */}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack alignItems={'flex-end'}>
                        <Typography gutterBottom sx={{ opacity: '.9', display: { xs: 'none', md: 'flex' } }}>View Profile</Typography>
                        <FormControl size='small' sx={{ width: { xs: '100%', md: '200px' }, bgcolor: 'white' }}>
                            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sort}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value='registered_asc'>Registered: Ascending</MenuItem>
                                <MenuItem value='registered_des'>Registered: Descending</MenuItem>
                                <MenuItem value='A_to_Z'>By Name: A-Z</MenuItem>
                                <MenuItem value='Z_to_A'>By Name: Z-A</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Grid>
            </Grid>
            <TableContainer sx={{ marginTop: '20px' }} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography sx={{ fontWeight: 'bold' }}>Customer ID</Typography> </TableCell>
                            <TableCell align="left"><Typography sx={{ fontWeight: 'bold' }}>Fullname</Typography></TableCell>
                            <TableCell align="left"><Typography sx={{ fontWeight: 'bold' }}>Email Address</Typography></TableCell>
                            <TableCell align="left"><Typography sx={{ fontWeight: 'bold' }}>Registered Date</Typography></TableCell>
                            <TableCell align="left"><Typography sx={{ fontWeight: 'bold' }}>User Orders</Typography></TableCell>
                            <TableCell align="left"><Typography sx={{ fontWeight: 'bold' }}>Show</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {showAllUsers}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination sx={{ margin: '30px 0px' }} count={Math.ceil(allUsers.length / itemsPerPage)} onChange={(e, pageNumber) => setCurrentPage(pageNumber)} color="primary" />
        </>
    )
}

export default CustomersTable