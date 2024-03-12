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
import { Container } from '@mui/material';

function App() {
  return (
    <>
      <Container maxWidth>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<SalesAnalytics />} />
          <Route path='/top-product' element={<TopProducts />} />
          <Route path='/product-grid' element={<ProductGrid />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/admin-profile' element={<AdminProfile />} />
          <Route path='/banners' element={<Banners />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/edit-product' element={<EditProducts />} />
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
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Container>

    </>
  );
}

export default App;
