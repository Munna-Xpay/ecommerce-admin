import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import SalesAnalytics from './pages/SalesAnalytics';
import TopProducts from './pages/TopProducts';
import ProductGrid from './pages/ProductGrid';
import AddProduct from './pages/AddProduct';
import AdminProfile from './pages/AdminProfile';
import Banners from './pages/Banners';
import Customers from './pages/Customers';
import EditProducts from './pages/EditProducts';
import Orders from './pages/Orders';
import ProductManagement from './pages/ProductManagement';
import RevenewByPeriod from './pages/RevenewByPeriod';
import Reviews from './pages/Reviews';
import SellersGrid from './pages/SellersGrid';
import SellersList from './pages/SellersList';
import SellersProfile from './pages/SellersProfile';
import SellersTable from './pages/SellersTable';
import Transactions from './pages/Transactions';
import PageNotFound from './pages/PageNotFound';
import AddSeller from './pages/AddSeller';
import { Box, Container, Divider, Grid, Stack } from '@mui/material';
import CustomersTable from './pages/CustomersTable';
import CustomerProfile from './pages/CustomerProfile';
import Sidebar from './components/Sidebar';
import { useSelector } from 'react-redux';
import EditSeller from './pages/EditSeller';
import { useEffect, useState } from 'react';

function App() {
  const admin = useSelector(state => state.userReducer)
  const socketConnection = useSelector(state => state.socketReducer.socket)
  // console.log(socketConnection);
  const [socket, setSocket] = useState(null)
  //socket io
  useEffect(() => {
    setSocket(socketConnection)
  }, [])

  useEffect(() => {
    const adminId = localStorage.getItem('adminId')
    if (admin?.admin) {
      socket && socket.emit("sendClient", admin?.admin?._id)
    }
  }, [socket, admin?.admin])
  return (
    <>
      <Header />
      <Stack direction={'row'} >
        {admin.admin &&
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Sidebar />
          </Box>
        }
        <Container maxWidth sx={{ height: '90vh', overflow: 'scroll' }}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/sales-analytics' element={<SalesAnalytics />} />
            <Route path='/top-product' element={<TopProducts />} />
            <Route path='/product-grid' element={<ProductGrid />} />
            <Route path='/add-product' element={<AddProduct />} />
            <Route path='/admin-profile' element={<AdminProfile />} />
            <Route path='/banners' element={<Banners />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/customer-profile/:id' element={<CustomerProfile />} />
            <Route path='/customers-table' element={<CustomersTable />} />
            <Route path='/edit-product' element={<EditProducts />} />
            <Route path='/edit-product/:id' element={<EditProducts />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/product-management' element={<ProductManagement />} />
            <Route path='/revenew-by-period' element={<RevenewByPeriod />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='/seller-grid' element={<SellersGrid />} />
            <Route path='/seller-list' element={<SellersList />} />
            <Route path='/seller-profile/:id' element={<SellersProfile />} />
            <Route path='/seller-table' element={<SellersTable />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/add-seller' element={<AddSeller />} />
            <Route path='/edit-seller/:id' element={<EditSeller />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Divider sx={{ marginBottom: '25px', marginTop: '30px' }} />
          <Footer />
        </Container>
      </Stack>
    </>
  );
}

export default App;


