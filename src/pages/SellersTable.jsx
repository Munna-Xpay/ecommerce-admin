import React, { useEffect, useState } from 'react'
import PageHead from '../components/PageHead'
import { Box, FormControl, Grid, InputLabel, MenuItem, Pagination, Paper, Rating, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllSellersWithSalesDetails } from '../redux/sellerSlice'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { formatNumberToK } from '../formatPriceToK'


const SellersTable = () => {

  const dispatch = useDispatch()
  const sellers = useSelector(state => state.sellerReducer.allSellers)
  console.log(sellers)
  const [sort, setSort] = useState('bestSelling');
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndexOfItemInAPage = itemsPerPage * currentPage;
  const firstIndexOfItemInAPage = lastIndexOfItemInAPage - itemsPerPage;


  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const showAllSellers = sellers.slice(firstIndexOfItemInAPage, lastIndexOfItemInAPage).map((item) => {
    return (
      <TableRow

        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <Stack py={2} direction={'row'} spacing={3} alignItems={'center'}>
            <Box
              component={'img'}
              alt='company icon'
              src={item?.seller?.company_icon}
              sx={{ width: '80px', height: '80px', objectFit: 'contain', padding: '10px', borderRadius: '10px', border: '2px solid #f2f2f2' }}
            />
            <Stack>
              <a href='#' style={{ textDecoration: 'none', opacity: '.8' }}><Typography gutterBottom variant='body1' sx={{ fontWeight: 'bold' }}>www.something.com</Typography></a>
              <Typography sx={{ opacity: '.8' }} gutterBottom variant='body1'>{item?.seller?.phoneNum}</Typography>
              <Typography sx={{ opacity: '.8' }} variant='body1'>{item?.seller?.email}</Typography>
            </Stack>
          </Stack>
        </TableCell>
        <TableCell align="center">
          <Stack alignItems={'center'}>
            <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.9' }}>{formatNumberToK(item?.total_orders)}</Typography>
            <Typography gutterBottom sx={{ fontWeight: 'bold', opacity: '.7' }}>All Orders</Typography>
            <Stack direction={'row'} alignItems={'center'} sx={{ color: '#00ba9d' }}>
              <ArrowDropUpIcon />
              <Typography sx={{ opacity: '.8', fontWeight: 'bold' }}>+ 45.10%</Typography>
            </Stack>
          </Stack>
        </TableCell>
        <TableCell align="center">
          <Stack alignItems={'center'}>
            <Typography variant='h5' sx={{ fontWeight: 'bold', opacity: '.9' }}>₹ {formatNumberToK(item?.total_income)}</Typography>
            <Typography gutterBottom sx={{ fontWeight: 'bold', opacity: '.7' }}>Income</Typography>
            <Stack direction={'row'} alignItems={'center'} sx={{ color: '#00ba9d' }}>
              <ArrowDropUpIcon />
              <Typography sx={{ opacity: '.8', fontWeight: 'bold' }}>+ 45.10%</Typography>
            </Stack>
          </Stack>
        </TableCell>
        <TableCell align="center">
          <Rating readOnly value={item?.avg_rating != null ? item?.avg_rating : 0} size='large' precision={0.5} />
        </TableCell>
        <TableCell align="center">
          <Stack alignItems={'center'} spacing={1}>
            {item?.categories[0]?.category
              ?
              item?.categories?.map((cat) => (
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ width: '60%' }}>
                  <Typography sx={{ opacity: '.7' }}>{cat.category}</Typography>
                  <Typography sx={{ opacity: '.9' }}>₹ {formatNumberToK(cat.total_income)}</Typography>
                </Stack>
              ))
              :
              <Typography variant='body2' color={'error'} sx={{ textAlign: 'center', padding: '20px 0px' }}>Seller has'nt added any products yet</Typography>
            }
          </Stack>
        </TableCell>
        <TableCell align="center">Something</TableCell>
      </TableRow>
    )
  })

  useEffect(() => {
    dispatch(fetchAllSellersWithSalesDetails(sort))
  }, [sort])

  return (
    <>
      <PageHead heading='Sellers Table' />
      <Grid mt={2} container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography gutterBottom variant='h6' sx={{ fontWeight: 'bold' }}>Sales Period :</Typography>
          <Stack direction={'row'} justifyContent={{ xs: 'center', md: 'start' }} spacing={1} alignItems={'center'}>
            <TextField size='small' sx={{ bgcolor: 'white' }} variant='outlined' type='date' />
            <Typography>-</Typography>
            <TextField size='small' sx={{ bgcolor: 'white' }} variant='outlined' type='date' />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack alignItems={'flex-end'}>
            <Typography gutterBottom sx={{ opacity: '.9', display: { xs: 'none', md: 'flex' } }}>View Profile </Typography>
            <FormControl size='small' sx={{ width: { xs: '100%', md: '200px' }, bgcolor: 'white' }}>
              <InputLabel id="demo-simple-select-label">Filter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value='bestSelling'>Best Selling</MenuItem>
                <MenuItem value='highest_rating'>Rating: High to Low</MenuItem>
                <MenuItem value='lowest_rating'>Rating: Low to High</MenuItem>
                <MenuItem value='A_to_Z'>By Name: A-Z</MenuItem>
                <MenuItem value='Z_to_A'>By Name: Z-A</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Grid>
      </Grid>

      <TableContainer component={Paper} sx={{ marginTop: '20px', width: '100%' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><Typography variant='h6' color={'primary'} sx={{ opacity: '.9' }}>Seller</Typography> </TableCell>
              <TableCell align="center"><Typography variant='h6' color={'primary'} sx={{ opacity: '.9' }}>Order Value</Typography> </TableCell>
              <TableCell align="center"><Typography variant='h6' color={'primary'} sx={{ opacity: '.9' }}>Income Value</Typography> </TableCell>
              <TableCell align="center"><Typography variant='h6' color={'primary'} sx={{ opacity: '.9' }}>Review Rate</Typography> </TableCell>
              <TableCell align="center"><Typography variant='h6' color={'primary'} sx={{ opacity: '.9' }}>Sales Categories Values</Typography> </TableCell>
              <TableCell align="center"><Typography variant='h6' color={'primary'} sx={{ opacity: '.9' }}>Others</Typography> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {showAllSellers}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination sx={{ margin: '30px 0px' }} count={Math.ceil(sellers.length / itemsPerPage)} onChange={(e, pageNumber) => setCurrentPage(pageNumber)} color="primary" />
    </>
  )
}

export default SellersTable