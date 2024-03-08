import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import CachedIcon from '@mui/icons-material/Cached';
import TopProductsCategory from '../components/TopProductsCategory';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import TopProductsElectronics from '../components/TopProductsElectronics';
import TopProductsFashion from '../components/TopProductsFashion';
import TopProductsGroceries from '../components/TopProductsGroceries';
import RestaurantIcon from '@mui/icons-material/Restaurant';

function TopProducts() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });
  const tick = () => setCurrentDateTime(new Date());

  //progress bar


  return (
    <>
      <Stack boxShadow={5}  border={1} borderColor={'#F9F9F9'} p={2} mt={10} direction={'row'} justifyContent={'space-between'} >
        <Typography fontSize={35} fontWeight={'bold'}>Top Products</Typography><Typography display={'flex'} mt={2} fontWeight={'bold'} fontSize={15}>Data refresh <Box marginLeft={1}><CachedIcon /></Box>
          <Box sx={{ backgroundColor: '#d2d6d5' }}  marginTop={-1} borderRadius={2} marginLeft={2}><Typography p={1} fontWeight={'bold'}>{currentDateTime.toLocaleString()}</Typography></Box></Typography>
      </Stack>
      <TopProductsCategory />

      <Grid container mt={4}>
         
        <Grid item xs={12} md={5.5}>
        <Stack direction={'row'} spacing={1}><LaptopMacIcon sx={{ backgroundColor: 'blue', color: 'white', padding: '5px', borderRadius: '3px', height:'20px', width:'20px' }} /> <Typography fontSize={20} fontWeight={'bold'} >Electronics</Typography></Stack>
          <TopProductsElectronics />
          </Grid>
        <Grid item sx={{marginLeft:{
          xs:0,
          md:10
        }}} xs={12}  md={5.5}>
        <Stack direction={'row'} spacing={1}><i style={{marginTop:'12px'}} class="fa-solid fa-shirt fa-xl"></i> <Typography fontSize={20} fontWeight={'bold'} >Fashion</Typography></Stack>
          <TopProductsFashion />
          </Grid>
          <Grid item sx={{marginLeft:{
          xs:0,
          md:0
        }}} xs={12}  md={5.5}>
        <Stack direction={'row'} spacing={1}><RestaurantIcon sx={{ backgroundColor: 'black', color: 'white', padding: '5px', borderRadius: '3px', height:'20px', width:'20px' }} /> <Typography fontSize={20} fontWeight={'bold'} >Groceries</Typography></Stack>
          <TopProductsGroceries />
          </Grid>
      </Grid>
    </>
  )
}

export default TopProducts