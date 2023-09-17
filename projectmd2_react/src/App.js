// import './App.css';
// import HeaderIndex from './components/Header/HeaderIndex';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Shop from './pages/Shop';
import SingleProduct from './pages/Product/SingleProduct';
import CheckOut from './pages/Checkout/CheckOut';
import Cart from './pages/Cart';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound';
import News from './pages/News';
import OrderHistory from './pages/Cart/OrderHistory';


function App() {
  return (
    <div className="App">
      {/* <HeaderIndex></HeaderIndex> */}
      <Header></Header>
      <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/product/:id' element={<SingleProduct/>}></Route>
          <Route path='/checkout' element={<CheckOut/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/news' element={<News/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/order-history' element={<OrderHistory></OrderHistory>}></Route>
          <Route path='*' element={<NotFound/>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
