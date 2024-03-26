import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Box, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../redux/baseUrl';


function TopProductsFashion() {
  const categoryProducts=useSelector(state=>state.categoryReducer.categoryProducts)
  //console.log(categoryProducts);
  const fashion=categoryProducts.filter((i)=>i.category==='Fashion')
 //console.log(fashion);
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
      {fashion.map((product)=>(
      <SwiperSlide style={{padding:'25px'}}>            
        <Box boxShadow={4} borderRadius={2} padding={4} width={150} bgcolor={'white'}>
        <Box border={1} borderColor={'#f1f1f1'} marginBottom={2}> <img width={150} height={130} src={`${BASE_URL}/uploadedFiles/${product?.thumbnail}`} alt="" /></Box> 
            <Typography fontWeight={'bold'} fontSize={15} textAlign={'center'}>{product.title}</Typography>
           <Box textAlign={'center'}><Rating name="read-only" value={product.review_star} readOnly /></Box> 
           <Typography textAlign={'center'} fontWeight={'bold'} fontSize={15} color={'#0dd1b0'}>Available :<span>{product.stockQuantity}</span></Typography>
           <Typography textAlign={'center'} fontWeight={'bold'} fontSize={15} color={'darkblue'}>Already sold :<span>{product.product_sold}</span></Typography>
         
        </Box>
          
      </SwiperSlide>
       ))}
    </Swiper>
  </>
  )
}

export default TopProductsFashion