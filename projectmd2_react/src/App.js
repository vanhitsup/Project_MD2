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
<<<<<<< HEAD
import Register from './pages/Register/Register';
=======
import Regitrer from './pages/register/Register';


>>>>>>> 64f14253d7bcdd7dde268be99c8a04e666eeed77
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
<<<<<<< HEAD
          <Route path='/register' element={<Register/>}></Route>
=======
          <Route path='/register' element={<Regitrer/>}></Route>

>>>>>>> 64f14253d7bcdd7dde268be99c8a04e666eeed77
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
