// import './App.css';
// import HeaderIndex from './components/Header/HeaderIndex';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';
import CheckOut from './pages/CheckOut';
import Cart from './pages/Cart';
import About from './pages/About';
import Login from './pages/Login';
import Regitrer from './pages/register/Register';


function App() {
  return (
    <div className="App">
      {/* <HeaderIndex></HeaderIndex> */}
      <Header></Header>
      <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/single-product' element={<SingleProduct/>}></Route>
          <Route path='/checkout' element={<CheckOut/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Regitrer/>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
