import { Box,Paper,InputBase,IconButton,Divider, Button, Stack, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function ProductManagement() {
  return (
    <>
    <Stack direction={'row'} justifyContent={'space-between'} mt={2}>
    <Button sx={{ marginTop: '15px', backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'green' }, width: '300px',borderRadius:'20px', padding:'10px' }}>
               Add new product
              </Button>   
              <Paper
      component="form"
      sx={{ display: 'flex', alignItems: 'center', width: 300 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Product"
        
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
     
    </Paper> 
      </Stack>
      <Stack direction={'row'} mt={2}>
      <Typography fontSize={15} fontWeight={'bold'}>Products : All <span style={{fontWeight:'normal'}}> (17)</span></Typography>
        <Divider  sx={{ height: 17, m: 0.5 }} orientation="vertical" />
        <Typography fontSize={15} fontWeight={'bold'}>Published : <span style={{fontWeight:'normal'}}>(7)</span></Typography>
        <Divider sx={{ height: 17, m: 0.5 }} orientation="vertical" />
        <Typography fontSize={15} fontWeight={'bold'}>Drafts : <span style={{fontWeight:'normal'}}>(1)</span></Typography>
        <Divider sx={{ height: 17, m: 0.5 }} orientation="vertical" />
        <Typography fontSize={15} fontWeight={'bold'}>Trash : <span style={{fontWeight:'normal'}}>(3)</span></Typography>
      </Stack>
      <Stack direction={{xs:'column',md:'row'}} justifyContent={'space-evenly'} spacing={2} mt={2}>
      <FormControl sx={{ width: {xs:379,md:200} }}>
      <InputLabel id="demo-simple-select-label">Stock</InputLabel>
                <Select
                sx={{height:'50px'}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  InputProps={{ style: { borderRadius: '7px' } }}
                >
                  <MenuItem value={'in_stock'}>In stock</MenuItem>
                  <MenuItem value={'low_inventory'}>Low Inventory</MenuItem>
                  <MenuItem value={'out_of_stock'}>Out of Stock</MenuItem>
                  <MenuItem value={'on_demand'}>On Demand</MenuItem>
                  <MenuItem value={'temporarily_unavailable'}>Temporarily Unavailable</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ width: {xs:379,md:200} }}>
              <InputLabel id="demo-simple-select-label">Product Category</InputLabel>
            <Select
             sx={{height:'50px'}}
             InputProps={{ style: { borderRadius: '7px' } }}
            >
              <MenuItem value={'Electronics'}>Electronics</MenuItem>
              <MenuItem value={'Fashion'}>Fashion</MenuItem>
              <MenuItem value={'Groceries'}>Groceries</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ width: {xs:379,md:200} }}>
              <InputLabel id="demo-simple-select-label">Product Seller</InputLabel>
            <Select
             sx={{height:'50px'}}
             InputProps={{ style: { borderRadius: '7px' } }}
            >
              <MenuItem value={''}>Seller</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ width: {xs:379,md:200} }}>
      <InputLabel id="demo-simple-select-label">Additional Options</InputLabel>
                <Select
                sx={{height:'50px'}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  InputProps={{ style: { borderRadius: '7px' } }}
                >
                  <MenuItem value={'last_modified'}>Last Modified</MenuItem>
                  <MenuItem value={'date_added'}>Date Added</MenuItem>
                  <MenuItem value={'last_viewed'}>Last Viewed</MenuItem>
                  <MenuItem value={'avg_rating'}>Average Rating</MenuItem>
                </Select>
              </FormControl>
      </Stack>
      </>
  )
}

export default ProductManagement