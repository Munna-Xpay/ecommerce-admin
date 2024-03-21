import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import PageHead from '../components/PageHead'

function Banners() {
  return (
    <>
     <PageHead heading={'Banners & Offers'} />
    <Grid container mt={2.5}>
      <Grid item xs={12} md={3.7} boxShadow={5} p={1} borderRadius={2}>
        <Stack  display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <img width={300} height={250} src="https://shop-point.merku.love/assets/phone-1e361855.webp" alt="" />
        <Typography fontSize={23} fontWeight={'bold'}>New IPhone 15 Pro</Typography>
        <Typography fontSize={17} color={'gray'}>Get $200–$600 in credit toward</Typography>
        </Stack>
      </Grid>
      <Grid item mt={{xs:2,md:0}} marginLeft={{xs:0,md:2}} xs={12} md={4} boxShadow={5} bgcolor={'#f8d518'} border={'2px dotted #ff5470'} borderRadius={2} >
      <Stack   display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <img width={200} height={200} src="https://shop-point.merku.love/assets/sale-a6ac9b4e.webp" alt="" />
        <Typography fontSize={30} fontWeight={'bold'} color={'#FF6900'}>Hot Offer!</Typography>
        <Button
            sx={{ marginTop: '15px', backgroundColor: 'white', color: '#ff5470', '&:hover': { backgroundColor: '#ff5470',color:'white' }, width: '300px', borderRadius: '20px',border:'1px solid #ff5470', padding: '10px' }}
          >
            Get Discount %
          </Button>
        </Stack>
      </Grid>
      <Grid item mt={{xs:2,md:0}} marginLeft={{xs:0,md:2}} xs={12} md={4} boxShadow={5} bgcolor={'#00193B'} border={'2px dotted #ff5470'} p={1} borderRadius={2}>
      <Stack   display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <img width={190} height={170} src="https://shop-point.merku.love/assets/cards-f716d9f3.webp" alt="" />
        <Typography mt={2} fontSize={25} fontWeight={'bold'} color={'white'}>Security Payments</Typography>
        <Typography fontSize={13} fontWeight={'bold'} color={'white'}>Secure e-commerce platform and  payment provider</Typography>
        </Stack>
      </Grid>
    </Grid>

<Grid container mt={2}> 
  <Grid item xs={12} md={5} bgcolor={'#00193B'} borderRadius={2} >
    <Stack p={2}>
  <Typography fontSize={30} fontWeight={'bold'} color={'white'}>Get Up to <br />70% off</Typography>
    <Stack  display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <img width={400} height={300} src="https://shop-point.merku.love/assets/collage-44a7ee1e.webp" alt="" />
        </Stack>
        </Stack>
  </Grid>
  <Grid item mt={{xs:2,md:0}} marginLeft={{xs:0,md:4}} xs={12} md={5} boxShadow={5} borderRadius={2}>
    <Stack  direction={{xs:'column',md:'row'}} p={{xs:0,md:5}}>
        <img width={350} height={300} src="https://shop-point.merku.love/assets/balance-c2e80db3.webp" alt="" />
        
        <Stack  display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Typography fontSize={27} fontWeight={'bold'} >$467,3k </Typography>
        <Typography fontSize={17} fontWeight={'bold'} >Total Balance </Typography>
        </Stack>
        </Stack>
       
  </Grid>
</Grid>


    <Grid container mt={3}>
      <Grid item xs={12} md={4} bgcolor={'#00193B'} height={100} borderRadius={2} p={1}>
        <Stack direction={'row'} width={{xs:370,md:500}}>
        <Typography mt={2} fontSize={16} fontWeight={'bold'} color={'white'}>Make your new become a <br /> part of largest marketplace</Typography>
        <Button
            sx={{ marginTop: '15px',marginLeft:{xs:1,md:10}, backgroundColor: '#00BA9D', color: 'white', '&:hover': { backgroundColor: '#00BA9D',color:'white' }, width: '150px', borderRadius: '20px', padding: '10px' }}
          >
           Subscribe
          </Button>
        </Stack>
      </Grid>
      <Grid item mt={{xs:2,md:0}} xs={12} md={4} marginLeft={{xs:0,md:4}}  height={100} borderRadius={2} border={'2px solid #035ECF'} >
        <Stack direction={'row'} width={{xs:370,md:650}} justifyContent={{xs:'',md:'space-between'}}>
        <Typography mt={4} color={"#035ECF"}  fontSize={{xs:19,md:25}} fontWeight={'bold'}>Best offers for subscribers</Typography>
     <Box><img width={{xs:100}} height={130} src="https://shop-point.merku.love/assets/arrow-33b9e8cf.webp" alt="" srcset="" /></Box> 
        </Stack>
      </Grid>
      <Grid item mt={{xs:2,md:0}} xs={12} md={3} marginLeft={{xs:0,md:4}}  height={100} borderRadius={2} bgcolor={'#f8d518'} border={'2px dotted #ff5470'} >
        <Stack direction={'row'}>
        <Box><img width={130} height={100} src="https://shop-point.merku.love/assets/tags-d4b05e01.webp" alt="" srcset="" /></Box> 
        <Typography mt={3} color={'#FF6900'} ml={2} fontSize={30} fontWeight={'bold'}>Hot Offer!</Typography>
        </Stack>
      </Grid>
    </Grid>
    </>
  )
}

export default Banners