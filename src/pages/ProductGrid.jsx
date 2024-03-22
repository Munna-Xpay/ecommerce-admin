import { Box, Button, FormControl, Grid, MenuItem, Pagination, Select, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CreateIcon from '@mui/icons-material/Create';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts, productById } from '../redux/productSlice';
import PageHead from '../components/PageHead'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../redux/baseUrl';
import { Toaster } from 'react-hot-toast';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CheckroomIcon from '@mui/icons-material/Checkroom';

function ProductGrid() {

const navigate=useNavigate()
  const dispatch = useDispatch()
  const [sortData, setSortData] = useState({
    categoryFilter: "Electronics",
    sort_option: "Best_selling"
  })

  //console.log(sortData)
  const products = useSelector(state => state.productReducer.products)
  console.log(products);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndexOfItemInAPage = itemsPerPage * currentPage;
  const firstIndexOfItemInAPage = lastIndexOfItemInAPage - itemsPerPage;

  useEffect(() => {
    dispatch(getProducts(sortData))
  }, [sortData])

  //handle delete func
  const handleDelete =  (id) => {
    dispatch(deleteProduct(id))
  }

  //handle edit
  const handleEdit=(id)=>{
    navigate(`/edit-product/${id}`)
  }

  return (
    <>
      <PageHead heading={'Products Grid'} />
      <Box marginTop={2} sx={{ display: { xs: 'block', md: 'flex' } }} justifyContent={'space-between'}>
        <Stack sx={{ width: { xs: 350, md: 170 } }} direction={'row'} spacing={1} boxShadow={4} p={2} borderRadius={2} >
        {sortData.categoryFilter === 'Electronics' ? <LaptopMacIcon sx={{ backgroundColor: '#035ECF', color: 'white', padding: '5px', borderRadius: '3px', height: '20px', width: '20px' }} /> : null}
        {sortData.categoryFilter === 'Fashion' ? <CheckroomIcon sx={{ backgroundColor: '#ff5470', color: 'white', padding: '5px', borderRadius: '3px', height: '20px', width: '20px' }} /> : null}
          {sortData.categoryFilter === 'Groceries' ? <RestaurantIcon sx={{ backgroundColor: 'orange', color: 'white', padding: '5px', borderRadius: '3px', height: '20px', width: '20px' }} /> : null}
          {products.slice(0, 1).map((i) => (<Typography fontSize={20} fontWeight={'bold'} >{i.category}</Typography>))}
        </Stack>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ marginTop: { xs: 5, md: 0 } }}>

          <FormControl size='small' sx={{ width: { xs: '300', md: 150 } }}>
            <Select
              value={sortData.categoryFilter}
              onChange={(e) => setSortData({ ...sortData, ["categoryFilter"]: e.target.value })}
            >
              <MenuItem value={'Electronics'}>Electronics</MenuItem>
              <MenuItem value={'Fashion'}>Fashion</MenuItem>
              <MenuItem value={'Groceries'}>Groceries</MenuItem>
            </Select>
          </FormControl>
          <FormControl size='small' sx={{ width: { xs: '300', md: 150 } }}>
            <Select
              value={sortData.sort_option}
              onChange={(e) => setSortData({ ...sortData, ["sort_option"]: e.target.value })}
            >
              <MenuItem selected value={'Best_selling'}>Best seling</MenuItem>
              <MenuItem value={'Availability'}>Availability</MenuItem>
              <MenuItem value={'low_to_high'}>Price: Low to High</MenuItem>
              <MenuItem value={'high_to_low'}>Price: High to Low</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>
      <Typography gutterBottom sx={{ opacity: '.9' }} fontSize={16} textAlign={{ xs: 'start', md: 'end' }}>View Products {products.length > 24 ? 24 : products.length}/{products.length}</Typography>

      <Grid container mt={4} spacing={2}>
        {products.slice(firstIndexOfItemInAPage, lastIndexOfItemInAPage).map((product) => (
          <Grid item xs={12} md={2}>
            <Stack spacing={1} boxShadow={4} borderRadius={2} padding={3} sx={{ width: { xs: 350, md: 190 } }}>
              <Box border={1} borderColor={'#f1f1f1'} marginBottom={2} textAlign={'center'}> <img width={170} height={130}  src={`${BASE_URL}/uploadedFiles/${product?.thumbnail}`} alt="" /></Box>
              <Typography fontWeight={'bold'} fontSize={16} >{product.title}</Typography>
              <Typography fontWeight={'bold'} fontSize={15} color={'#0dd1b0'}>Available :<span>{product.stockQuantity}</span></Typography>
              <Typography fontWeight={'bold'} fontSize={15} color={'darkblue'}>Already sold :<span>{product.product_sold}</span></Typography>
              <Typography fontWeight={'bold'} fontSize={15} color={'gray'}>Regular price :<span>${product.original_price}</span></Typography>
              <Typography fontWeight={'bold'} fontSize={15} color={'gray'}>Sale price :<span>${product.discounted_price}</span></Typography>
              <Stack direction={'row'} marginTop={3}>
                <Button onClick={()=>handleEdit(product._id)} sx={{ borderRadius: '20px', fontWeight: 'bold', width: { xs: 200 } }} variant='outlined'><CreateIcon sx={{ width: '15px' }} />Edit</Button>
                <Button onClick={() => handleDelete(product._id)} sx={{ marginLeft: '5px', borderRadius: '20px', fontWeight: 'bold', width: { xs: 200 } }} color='error' variant='outlined'>Delete</Button>
              </Stack>
            </Stack>
          </Grid>
        ))
        }
      </Grid>
      <Pagination count={Math.ceil(products.length / itemsPerPage)} onChange={(e, pageNumber) => setCurrentPage(pageNumber)} sx={{ margin: '30px 0px' }} color="primary" />
      <Toaster position="top-center"
        reverseOrder={false}
        containerStyle={{
          padding: '10px',
          fontSize: '17px',
          fontFamily: 'sans-serif',
        }}
      />
    </>
  )
}

export default ProductGrid