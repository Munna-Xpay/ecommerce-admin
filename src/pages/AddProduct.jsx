import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSellersWithSalesDetails } from '../redux/sellerSlice';

function AddProduct() {
  const dispatch=useDispatch()
 const [seller,setSeller]=useState('')
  //const [stock,setStock]=useState('')
  const [category, setCategory] =useState('');

  const [productData,setProductData]=useState({
    title:'',about:'',stock:'',stockQuantity:'',discounted_price:'',original_price:'',memory:'',colors:'',
    category:'',manufacturer:'',ships_from:'',description:'',seller:'',thumbnail:'',images:[]

  })

  //onchange
  const setInput=(e)=>{
    const {value,name}=e.target
    setProductData({...productData,[name]:value})
  }
console.log(productData);

const setImage=(e)=>{
  const selectedImages=e.target.files[0]
  if (selectedImages) {
    const fileName = selectedImages.name;
    setProductData(prevState => ({
      ...prevState,
      images: [...prevState.images, fileName]
    }));
}
}
  const handleCategoryChange = (e) => {
    setProductData({...productData,category:e.target.value})
  };
  const handleSellerChange = (e) => {
    setProductData({...productData,seller:e.target.value})
  };
  const handleStockChange = (e) => {
    setProductData({...productData,stock:e.target.value})
  };


const data=useSelector(state=>state.sellerReducer.sallerSalesStat)
//console.log(data);
useEffect(()=>{
  dispatch(fetchAllSellersWithSalesDetails())
},[])
const sellers=data.map((i)=>i.seller)
//console.log(sellers);
  return (
    <Box mt={2} marginLeft={{xs:0,md:7}}>
      <Typography fontSize={16} fontWeight={'bold'}>Product Settings</Typography>
      <Typography mt={3} fontSize={12} color={'gray'} fontWeight={'bold'}>Product Images</Typography>
      <Grid container spacing={{xs:0,md:10}}>
        <Grid item xs={12} md={6} direction={'row'}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <label htmlFor='img1'  >
              <Stack bgcolor={'#dedede'} sx={{ padding: { xs: 5, md: 10 } }} borderRadius={1}>
                <input onChange={(e)=>setImage(e)} name='images' id='img1' style={{ display: 'none' }} type="file" />
                <Box textAlign={'center'}>
                  <PhotoLibraryIcon />
                  <Typography>Browse Image</Typography>
                </Box>
              </Stack>
            </label>
            <label htmlFor='img2'  >
              <Stack bgcolor={'#dedede'} sx={{ padding: { xs: 5, md: 10 } }} borderRadius={1}>
                <input onChange={(e)=>setImage(e)} name='images' id='img2' style={{ display: 'none' }} type="file" />
                <Box textAlign={'center'}>
                  <PhotoLibraryIcon />
                  <Typography>Browse Image</Typography>
                </Box>
              </Stack>
            </label>

            <label htmlFor='img3'  >
              <Stack bgcolor={'#dedede'} sx={{ padding: { xs: 5, md: 10 } }} borderRadius={1}>
                <input onChange={(e)=>setImage(e)} name='images' id='img3' style={{ display: 'none' }} type="file" />
                <Box textAlign={'center'}>
                  <PhotoLibraryIcon />
                  <Typography>Browse Image</Typography>
                </Box>
              </Stack>
            </label>
            <label htmlFor='img4'  >
              <Stack bgcolor={'#dedede'} sx={{ padding: { xs: 5, md: 10 } }} borderRadius={1}>
                <input onChange={(e)=>setImage(e)} name='images' id='img4' style={{ display: 'none' }} type="file" />
                <Box textAlign={'center'}>
                  <PhotoLibraryIcon />
                  <Typography>Browse Image</Typography>
                </Box>
              </Stack>
            </label>
          </Stack>
          <Stack width={{xs:380,md:210}}>
          <Typography mt={3} fontSize={12} color={'gray'} fontWeight={'bold'}>Product Thumbnail</Typography>

          <label htmlFor='img5'  >
              <Stack bgcolor={'#dedede'} sx={{ padding: { xs: 5, md: 10 } }} borderRadius={1}>
                <input onChange={(e)=>setInput(e)} name='thumbnail' id='img5' style={{ display: 'none' }} type="file" />
                <Box textAlign={'center'}>
                  <PhotoLibraryIcon />
                  <Typography>Browse Image</Typography>
                </Box>
              </Stack>
            </label>
          </Stack>
          <Box>
            <Typography mt={1} fontSize={12} color={'gray'} fontWeight={'bold'}>Product description</Typography>
            <TextField
            onChange={(e)=>setInput(e)}
            name='description'
              sx={{ width: { xs: 380, md: 900 } }}
              color='info'
              placeholder="Description"
              multiline
              rows={5}
              maxRows={5}
            />
          </Box>
        </Grid>
        <Grid item md={6} xs={12} >
          <Box
            sx={{
              width: 804,
              maxWidth: '100%',
            }}
          >
            <Typography fontSize={12} color={'gray'} fontWeight={'bold'}>Product name</Typography>
            <TextField onChange={(e)=>setInput(e)} name='title' InputProps={{ style: { borderRadius: '7px',height:'50px' } }} fullWidth label="" id="fullWidth" />
          </Box>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} mt={2}>
            <Box>
              <Typography fontSize={12} color={'gray'} fontWeight={'bold'}>Brand name</Typography>
              <TextField onChange={(e)=>setInput(e)} name='manufacturer' InputProps={{ style: { borderRadius: '7px',height:'50px' } }} sx={{ width: '399px' }} label="" id="fullWidth" />
            </Box>
            <Box>
              <Typography fontSize={12} color={'gray'} fontWeight={'bold'}>Category</Typography>
              <FormControl sx={{ width: '399px' }}>
                <Select
                sx={{height:'50px'}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name='category'
                  value={productData.category}
                  onChange={(e)=>handleCategoryChange(e)}
                  InputProps={{ style: { borderRadius: '7px' } }}
                >
                  <MenuItem value={'Electronics'}>Electronics</MenuItem>
                  <MenuItem value={'Fashion'}>Fashion</MenuItem>
                  <MenuItem value={'Groceries'}>Groceries</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} mt={2}>
            <Box>
              <Typography fontSize={12} color={'gray'} fontWeight={'bold'}>Regular price</Typography>
              <TextField onChange={(e)=>setInput(e)} name='original_price' InputProps={{ style: { borderRadius: '7px',height:'50px' } }} sx={{ width: '399px' }} label="" id="fullWidth" />
            </Box>
            <Box>
              <Typography fontSize={12} color={'gray'} fontWeight={'bold'}>Sale price</Typography>
              <TextField onChange={(e)=>setInput(e)} name='discounted_price' InputProps={{ style: { borderRadius: '7px',height:'50px' } }} sx={{ width: '399px' }} label="" id="fullWidth" />

            </Box>
          </Stack>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} mt={2}>
            <Box>
              <Typography fontSize={12} color={'gray'} fontWeight={'bold'}>About</Typography>
              <TextField onChange={(e)=>setInput(e)} name='about' InputProps={{ style: { borderRadius: '7px',height:'50px' } }} type='text' sx={{ width: '399px' }} label="" id="fullWidth" />
            </Box>
            <Box>
              <Typography fontSize={12} color={'gray'} fontWeight={'bold'}>Stock status</Typography>
              <FormControl sx={{ width: '399px' }}>
                <Select
                
              
                sx={{height:'50px'}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={productData.stock}
                  onChange={(e)=>handleStockChange(e)}
                  InputProps={{ style: { borderRadius: '7px' } }}
                >
                  <MenuItem value={'in_stock'}>In stock</MenuItem>
                  <MenuItem value={'low_inventory'}>Low Inventory</MenuItem>
                  <MenuItem value={'out_of_stock'}>Out of Stock</MenuItem>
                  <MenuItem value={'on_demand'}>On Demand</MenuItem>
                  <MenuItem value={'temporarily_unavailable'}>Temporarily Unavailable</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} mt={2}>
            <Box>
              <Typography fontSize={12} color={'gray'} fontWeight={'bold'}>Seller</Typography>
              <FormControl sx={{ width: '399px' }}>
                <Select
                
                name='seller'
                sx={{height:'50px'}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={productData.seller}
                  onChange={(e)=>handleSellerChange(e)}
                  InputProps={{ style: { borderRadius: '7px' } }}
                >{sellers.map((i)=>(
                  <MenuItem value={i._id}>{i.fullName}</MenuItem>
                  )) }
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography fontSize={12} color={'gray'} fontWeight={'bold'}>Stock Quantity</Typography>
              <TextField onChange={(e)=>setInput(e)} name='stockQuantity' InputProps={{ style: { borderRadius: '7px',height:'50px' } }} type='text' sx={{ width: '399px' }} label="" id="fullWidth" />
            </Box>
          </Stack>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} mt={2}>
            <Box>
              <Typography fontSize={12} color={'gray'} fontWeight={'bold'}>Memory</Typography>
              <TextField onChange={(e)=>setInput(e)} name='memory' InputProps={{ style: { borderRadius: '7px',height:'50px' } }} type='text' sx={{ width: '399px' }} label="" id="fullWidth" />
            </Box>
            <Box>
              <Typography fontSize={12} color={'gray'} fontWeight={'bold'}>Colour</Typography>
              <TextField onChange={(e)=>setInput(e)} name='colors' InputProps={{ style: { borderRadius: '7px',height:'50px' } }} type='text' sx={{ width: '399px' }} label="" id="fullWidth" />
            </Box>
          </Stack>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} mt={2}>
            <Box>
              <Typography fontSize={12} color={'gray'} fontWeight={'bold'}>Ships From</Typography>
              <TextField onChange={(e)=>setInput(e)} name='ships_from' InputProps={{ style: { borderRadius: '7px',height:'50px' } }} type='text' sx={{ width: '399px' }} label="" id="fullWidth" />
            </Box>
          </Stack>
          <Stack direction={{ xs: 'column', md: 'row' }} textAlign={'center'} spacing={1} mt={2}>
            <Box>
            <Button sx={{ marginTop: '15px', backgroundColor: '#035ecf', color: 'white', '&:hover': { backgroundColor: '#035ecf' }, width: '300px',borderRadius:'20px', padding:'10px' }}>
                Save to Drafts
              </Button>                 
              </Box>   
              <Box>
            <Button sx={{ marginTop: '15px', backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'green' }, width: '300px',borderRadius:'20px', padding:'10px' }}>
                Publish Product
              </Button>                 
              </Box>         
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AddProduct