import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Box, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

function TopProductsFashion() {
  return (
    <>
    <Swiper
    style={{padding:'5px'}}
      slidesPerView={3}
      spaceBetween={10}
      freeMode={true}
      width={600}
      
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide style={{padding:'25px'}}>
        <Box boxShadow={4} borderRadius={2} padding={4} width={150} >
        <Box border={1} borderColor={'#f1f1f1'} marginBottom={2}><img width={170} height={130} src="https://shop-point.merku.love/assets/3-10e03a58.webp" alt="" /></Box> 
            <Typography fontWeight={'bold'} fontSize={15} textAlign={'center'}>Oculus Quest 2 VR Headset 64 GB</Typography>
           <Box textAlign={'center'}><Rating name="read-only" value={3} readOnly /></Box> 
           <Typography textAlign={'center'} fontWeight={'bold'} fontSize={15} color={'#0dd1b0'}>Available :<span>223</span></Typography>
           <Typography textAlign={'center'} fontWeight={'bold'} fontSize={15} color={'darkblue'}>Already sold :<span>107</span></Typography>

        </Box>
      </SwiperSlide>
      <SwiperSlide style={{padding:'25px'}} >
        <Box  marginBottom={3} boxShadow={4} borderRadius={2} padding={4} width={150}>
        <Box border={1} borderColor={'#f1f1f1'} marginBottom={2}><img width={170} height={130} src="https://shop-point.merku.love/assets/3-10e03a58.webp" alt="" /></Box> 
            <Typography fontWeight={'bold'}  fontSize={15} textAlign={'center'}>Oculus Quest 2 VR Headset 64 GB</Typography>
            <Box textAlign={'center'}><Rating name="read-only" value={3} readOnly /></Box> 
            <Typography textAlign={'center'} fontWeight={'bold'} fontSize={15} color={'#0dd1b0'}>Available :<span>223</span></Typography>
           <Typography textAlign={'center'} fontWeight={'bold'} fontSize={15} color={'darkblue'}>Already sold :<span>107</span></Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide  style={{padding:'25px'}}>
        <Box   boxShadow={4} borderRadius={2} padding={4} width={150}>
        <Box border={1} borderColor={'#f1f1f1'} marginBottom={2}><img width={170} height={130} src="https://shop-point.merku.love/assets/3-10e03a58.webp" alt="" /></Box> 
            <Typography fontWeight={'bold'}  fontSize={15} textAlign={'center'}>Oculus Quest 2 VR Headset 64 GB</Typography>
            <Box textAlign={'center'}><Rating name="read-only" value={3} readOnly /></Box> 
            <Typography textAlign={'center'} fontWeight={'bold'} fontSize={15} color={'#0dd1b0'}>Available :<span>223</span></Typography>
           <Typography textAlign={'center'} fontWeight={'bold'} fontSize={15} color={'darkblue'}>Already sold :<span>107</span></Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide  style={{padding:'25px'}} >
        <Box   boxShadow={4} borderRadius={2} padding={4} width={150}>
        <Box border={1} borderColor={'#f1f1f1'} marginBottom={2}><img width={170} height={130} src="https://shop-point.merku.love/assets/3-10e03a58.webp" alt="" /></Box> 
            <Typography fontWeight={'bold'}  fontSize={15} textAlign={'center'}>Oculus Quest 2 VR Headset 64 GB</Typography>
            <Box textAlign={'center'}><Rating name="read-only" value={3} readOnly /></Box> 
            <Typography textAlign={'center'} fontWeight={'bold'} fontSize={15} color={'#0dd1b0'}>Available :<span>223</span></Typography>
           <Typography textAlign={'center'} fontWeight={'bold'} fontSize={15} color={'darkblue'}>Already sold :<span>107</span></Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide  style={{padding:'25px'}}>
        <Box   boxShadow={4} borderRadius={2} padding={4} width={150}>
        <Box border={1} borderColor={'#f1f1f1'} marginBottom={2}><img width={170} height={130} src="https://shop-point.merku.love/assets/3-10e03a58.webp" alt="" /></Box> 
            <Typography fontWeight={'bold'}  fontSize={15} textAlign={'center'}>Oculus Quest 2 VR Headset 64 GB</Typography>
            <Box textAlign={'center'}><Rating name="read-only" value={3} readOnly /></Box> 
            <Typography textAlign={'center'} fontWeight={'bold'} fontSize={15} color={'#0dd1b0'}>Available :<span>223</span></Typography>
           <Typography textAlign={'center'} fontWeight={'bold'} fontSize={15} color={'darkblue'}>Already sold :<span>107</span></Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide  style={{padding:'25px'}} >
        <Box   boxShadow={4} borderRadius={2} padding={4} width={150}>
        <Box border={1} borderColor={'#f1f1f1'} marginBottom={2}><img width={170} height={130} src="https://shop-point.merku.love/assets/3-10e03a58.webp" alt="" /></Box> 
            <Typography fontWeight={'bold'}  fontSize={15} textAlign={'center'}>Oculus Quest 2 VR Headset 64 GB</Typography>
            <Box textAlign={'center'}><Rating name="read-only" value={3} readOnly /></Box> 
            <Typography textAlign={'center'} fontWeight={'bold'} fontSize={15} color={'#0dd1b0'}>Available :<span>223</span></Typography>
           <Typography textAlign={'center'} fontWeight={'bold'} fontSize={15} color={'darkblue'}>Already sold :<span>107</span></Typography>
        </Box>
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default TopProductsFashion