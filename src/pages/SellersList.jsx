import React, { useEffect, useState } from 'react'
import PageHead from '../components/PageHead'
import { FormControl, Grid, InputLabel, MenuItem, Pagination, Select, Stack, TextField, Typography } from '@mui/material'
import SellerListCard from '../components/SellerListCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllSellersWithSalesDetails } from '../redux/sellerSlice'

const SellersList = () => {

  const dispatch = useDispatch()
  const sellers = useSelector(state => state.sellerReducer.allSellers)
  console.log(sellers)
  const [sort, setSort] = useState('latest');
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndexOfItemInAPage = itemsPerPage * currentPage;
  const firstIndexOfItemInAPage = lastIndexOfItemInAPage - itemsPerPage;


  const handleChange = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchAllSellersWithSalesDetails(sort))
  }, [sort])

  const showAllSellers = sellers.slice(firstIndexOfItemInAPage, lastIndexOfItemInAPage).map((item) => {
    return (
      <SellerListCard sellerDetails={item} />
    )
  })

  return (
    <Stack minHeight={'100vh'}>
      <PageHead heading='Sellers List' />
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
                <MenuItem value='latest'>Latest</MenuItem>
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
      <Stack mt={2} spacing={2}>
        {showAllSellers}
      </Stack>
      <Pagination sx={{ margin: '30px 0px' }} count={Math.ceil(sellers.length / itemsPerPage)} onChange={(e, pageNumber) => setCurrentPage(pageNumber)} color="primary" />
    </Stack>
  )
}

export default SellersList