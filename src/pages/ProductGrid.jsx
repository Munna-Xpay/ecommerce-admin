import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Pagination, Select, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CreateIcon from '@mui/icons-material/Create';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/productSlice';

function ProductGrid() {
  const dispatch = useDispatch()
  const [sortData, setSortData] = useState({
    categoryFilter: "Electronics",
    sort_option: "Best_selling"
  })
  const handleCategoryChange = (event) => {
    setSortData({
      ...sortData,
      categoryFilter: event.target.value
    })
  };
  const handleOptionChange = (event) => {
    setSortData({
      ...sortData,
      sort_option: event.target.value
    })
  };
  //console.log(sortData)
  const products = useSelector(state => state.productReducer.products)
  console.log(products);
  const [itemsPerPage, setItemsPerPage] = useState(24);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndexOfItemInAPage = itemsPerPage * currentPage;
  const firstIndexOfItemInAPage = lastIndexOfItemInAPage - itemsPerPage;

  useEffect(() => {
    dispatch(getProducts(sortData))
  }, [sortData])

  return (
    <>
      <Box sx={{ display: { xs: 'block', md: 'flex' } }} justifyContent={'space-between'}>
        <Stack sx={{ width: { xs: 365, md: 170 } }} direction={'row'} spacing={1} boxShadow={4} p={2} borderRadius={2} >
          <LaptopMacIcon sx={{ backgroundColor: 'blue', color: 'white', padding: '5px', borderRadius: '3px', height: '20px', width: '20px' }} />
          {products.slice(0, 1).map((i) => (<Typography fontSize={20} fontWeight={'bold'} >{i.category}</Typography>))}
        </Stack>
        <Stack direction={'row'} spacing={3} sx={{ marginTop: { xs: 5, md: 0 } }}>

          <FormControl sx={{ width: '200px' }}>
            <Select
              value={sortData.categoryFilter}
              onChange={handleCategoryChange}
            >
              <MenuItem value={'Electronics'}>Electronics</MenuItem>
              <MenuItem value={'Fashion'}>Fashion</MenuItem>
              <MenuItem value={'Groceries'}>Groceries</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: '200px' }}>
            <Select
              value={sortData.sort_option}
              onChange={handleOptionChange}
            >
              <MenuItem selected value={'Best_selling'}>Best seling</MenuItem>
              <MenuItem value={'Availability'}>Availability</MenuItem>
              <MenuItem value={'low_to_high'}>Price: Low to High</MenuItem>
              <MenuItem value={'high_to_low'}>Price: High to Low</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>
      <Typography  gutterBottom sx={{ opacity: '.9' }} fontSize={16} textAlign={'end'}>View Products {products.length > 24 ? 24 : products.length}/{products.length}</Typography>

      <Grid container mt={4} spacing={2}>
        {products.slice(firstIndexOfItemInAPage, lastIndexOfItemInAPage).map((product) => (
          <Grid item xs={12} md={2}>
            <Stack spacing={1} boxShadow={4} borderRadius={2} padding={3} sx={{ width: { xs: 350, md: 190 } }}>
              <Box border={1} borderColor={'#f1f1f1'} marginBottom={2} textAlign={'center'}> <img width={170} height={130} src={product.thumbnail} alt="" /></Box>
              <Typography fontWeight={'bold'} fontSize={16} >{product.title}</Typography>
              <Typography fontWeight={'bold'} fontSize={15} color={'#0dd1b0'}>Available :<span>{product.inStock - product.product_sold}</span></Typography>
              <Typography fontWeight={'bold'} fontSize={15} color={'darkblue'}>Already sold :<span>{product.product_sold}</span></Typography>
              <Typography fontWeight={'bold'} fontSize={15} color={'gray'}>Regular price :<span>${product.original_price}</span></Typography>
              <Typography fontWeight={'bold'} fontSize={15} color={'gray'}>Sale price :<span>${product.discounted_price}</span></Typography>
              <Stack direction={'row'} marginTop={3}>
                <Button sx={{ borderRadius: '20px', fontWeight: 'bold', width: { xs: 200 } }} variant='outlined'><CreateIcon sx={{ width: '15px' }} />Edit</Button>
                <Button sx={{ marginLeft: '5px', borderRadius: '20px', fontWeight: 'bold', width: { xs: 200 } }} color='error' variant='outlined'>Delete</Button>
              </Stack>
            </Stack>
          </Grid>
        ))
        }
      </Grid>
      <Pagination count={Math.ceil(products.length / itemsPerPage)} onChange={(e, pageNumber) => setCurrentPage(pageNumber)} sx={{ margin: '30px 0px' }} color="primary" />
    </>
  )
}

export default ProductGrid